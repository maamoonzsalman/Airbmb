import React, { useEffect, useState } from 'react';
import api from './api';

function App() {
    const [data, setData] = useState(null);

    useEffect(async () => {
        console.log('this', process.env.NODE_ENV)
        try {
            const response = await api.get('/api/test')
            setData(response.data)
        } catch (e) {
            console.error(e)
        }
    }, []);

    return (
        <div>
            <h1>Backends Testt</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default App;
