const express = require("express");
const router = express.Router();

// Routes
router.get('/', (req, res) => {
    res.render("index.html", { title: "My Movie List" });
});

router.get('/watched', (req, res) => {
    res.render("watched.html", { title: "Watched" });
});

module.exports = router;