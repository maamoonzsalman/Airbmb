import axios from 'axios';

const baseURL =
    process.env.NODE_ENV === 'production'
        ? '3.12.111.174'  // Production URL (EC2)
        : 'http://localhost:4000';        // Local URL (localhost)

console.log('this url: ', baseURL)

export default axios.create({
    baseURL,
});
