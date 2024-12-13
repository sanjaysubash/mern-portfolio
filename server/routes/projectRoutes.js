const express = require('express');
const Project = require('../models/Project');
const router = express.Router();

// Get all projects
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add a project
router.post('/', async (req, res) => {
    const { title, description, techStack, link, image } = req.body;
    try {
        const newProject = new Project({ title, description, techStack, link, image });
        await newProject.save();
        res.status(201).json(newProject);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
