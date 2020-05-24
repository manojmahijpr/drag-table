const express = require('express');
const path = require('path');

const books = require('./api/books')
const app = express();
const port = process.env.PORT || 5000

/**
 * Registers Books Api with Express App
 */
app.use('/api/books', books);

/**
 * Serve static assets if in production
 */
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('ui/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'ui', 'build', 'index.html'));
    })
}

/**
 * Start express server
 */
app.listen(port, () => {
    console.log(`Server Started at Port: ${port}`);
})