const express = require('express');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cors = require('cors');
const { extractMediaFromPage } = require('./services/mediaExtractor');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use('/downloads', express.static(path.join(__dirname, 'downloads'))); // Serve downloaded files

// POST: Extract media from Instagram URL
app.post('/searchMedia', async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'URL is required' });

  try {
    const media = await extractMediaFromPage(url);
    console.log("media =>", media);
    res.status(200).json({ media });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to extract media' });
  }
});

// POST: Download media files locally
app.post('/download-direct', async (req, res) => {
  const { url } = req.body;

  if (!url || typeof url !== 'string') {
    return res.status(400).json({ error: 'A valid URL must be provided.' });
  }

  try {
    const ext = url.includes('.mp4') ? '.mp4' : '.jpg';
    const filename = `media${Date.now()}${ext}`;
    const filePath = path.resolve(__dirname, 'downloads', filename);
    const writer = fs.createWriteStream(filePath);

    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream',
    });

    response.data.pipe(writer);

    await new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });

    console.log(`Downloaded ${filename}`);
    res.status(200).json({ message: 'Single media downloaded successfully' });
  } catch (error) {
    console.error(`Download error: ${error.message}`);
    res.status(500).json({ error: 'An error occurred while downloading media' });
  }
});


// GET: Proxy media URL to bypass CORS
app.get('/proxy', async (req, res) => {
  const mediaUrl = req.query.url;
  if (!mediaUrl) return res.status(400).send('Missing URL');

  try {
    const response = await axios.get(mediaUrl, {
      responseType: 'stream',
    });

    res.set('Content-Type', response.headers['content-type']);
    response.data.pipe(res);
  } catch (err) {
    console.error('Proxy error:', err.message);
    res.status(500).send('Failed to proxy image');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
