import axios from 'axios';

const baseURL =
    process.env.NODE_ENV === 'production'
        ? 'http://18.217.83.118:4000'  // Production URL (EC2)
        : 'http://localhost:4000';        // Local URL (localhost)

export default axios.create({
    baseURL,
});
