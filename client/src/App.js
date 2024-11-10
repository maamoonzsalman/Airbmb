import React, { useEffect, useState } from 'react';
import api from './api';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        console.log('this', process.env.NODE_ENV)
        api.get('/api/test')
            .then((res) => setData(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <h1>Backendd Test</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default App;
