const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router();

// Handle contact form submissions
router.post('/', async (req, res) => {
    const { name, email, message } = req.body;
    try {
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(201).json(newContact);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
