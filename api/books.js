const express = require('express');
const router = express.Router();
const books = require("../data-store.json")

/**
 * REST end-point to get all the books
 * It will read the 'data-store.json' file and writes to the response object
 */
router.get('/', (req, res) => {
    res.json(books)
})

module.exports = router;