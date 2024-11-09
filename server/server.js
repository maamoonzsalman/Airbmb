const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use(cors({
    origin: 'http://airbmbucket.s3-website.us-east-2.amazonaws.com',
    credentials: true,
}));


app.get('/api/test', async (req, res) => {
    res.json({ message: 'Backend is reachable!' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
