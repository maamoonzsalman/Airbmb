const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));


app.get('/api/test', async (req, res) => {
    res.json({ message: 'Backend is reachable!' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
