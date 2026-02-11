const express = require('express');
const app = express();
app.use(express.json());

app.get('/watchlist', (req, res) => {
    res.json(['Inception', 'Matrix']);
});

app.post('/watchlist', (req, res) => {
    res.json({ message: 'Added' });
});

app.put('/watchlist/watched', (req, res) => {
    res.json({ message: 'Marked watched' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
