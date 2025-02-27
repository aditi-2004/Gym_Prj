const axios = require('axios');

const generateContent = async (req, res) => {
  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyAAYzxGaWn-fHQIsvBkXGBfVHeK6ovJAi8`,
      {
        contents: [
          {
            parts: [
              { text: req.body.text }, // Text passed from frontend
            ],
          },
        ],
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error generating content from Gemini API' });
  }
};

module.exports = generateContent;
