const express = require('express');
const router = express.Router();
const { sendSupportEmail } = require('../services/emailService');

/**
 * Support form submission endpoint
 * @route POST /api/support
 */
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email, and message'
      });
    }

    // Send email
    const info = await sendSupportEmail(name, email, message);
    console.log('Message sent: %s', info.messageId);

    res.json({
      success: true,
      message: 'Your message has been sent successfully!'
    });
  } catch (error) {
    console.error('Support email error:', error);
    res.status(500).json({
      success: false,
      message: `Failed to send your message: ${error.message}`
    });
  }
});

module.exports = router;