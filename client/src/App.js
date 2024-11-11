import React, { useEffect, useState } from 'react';
import api from './api';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        console.log('this is', process.env.NODE_ENV);

        const fetchData = async () => {
            try {
                const response = await api.get('/api/test');
                setData(response.data);
            } catch (e) {
                console.error(e);
            }
        };

        fetchData(); // Call the async function
    }, []);

    return (
        <div>
            <h1>Backends Testt</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default App;
