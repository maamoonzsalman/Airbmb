import React, { useEffect, useState } from 'react';
import api from './api';
import SearchBar from './components/SearchBar';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        console.log('Environment:', process.env.NODE_ENV);

        const fetchData = async() => {
            try {
                const response = await api.get('/api/test');
                setData(response.data);
            } catch (e) {
                console.error('Error fetching data:', e);
            }
        }

        fetchData();

    }, []);


    return (
        <div>
            
            <SearchBar/>
        </div>
    );
}

export default App;
