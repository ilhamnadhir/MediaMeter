// routes/usageRoutes.js
const express = require('express');
const Usage = require('../models/usage');
const router = express.Router();

// Route to add a usage record
router.post('/add', async (req, res) => {
  try {
    const { userId, socialMediaApp, usageTime } = req.body;

    // Validate input
    if (!userId || !socialMediaApp || !usageTime) {
      return res.status(400).json({ error: 'All fields (userId, socialMediaApp, usageTime) are required' });
    }

    // Create a new usage record
    const newUsage = new Usage({ userId, socialMediaApp, usageTime });
    await newUsage.save(); // Save the usage record to MongoDB

    res.status(201).json(newUsage); // Return the created usage data
  } catch (err) {
    res.status(500).json({ error: err.message || 'Could not add usage data' });
  }
});

// Route to get all usage data for a specific user
router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const page = parseInt(req.query.page) || 1; // Default to page 1
    const limit = parseInt(req.query.limit) || 10; // Default to 10 records per page
    const skip = (page - 1) * limit;

    // Validate userId
    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    // Find all usage records for the given userId with pagination
    const usageData = await Usage.find({ userId })
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      page,
      limit,
      total: usageData.length,
      data: usageData,
    }); // Return the usage data
  } catch (err) {
    res.status(500).json({ error: err.message || 'Could not fetch usage data' });
  }
});

module.exports = router;
