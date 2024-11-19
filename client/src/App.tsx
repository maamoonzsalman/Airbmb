//TODO: Get rid of this disabled warningv
//yea
/* eslint-disable @typescript-eslint/no-unused-vars */


import React, { useEffect, useState } from 'react';
import api from './api';
import NavBar from './components/NavBar';
import './App.css'

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
            
            <NavBar/>
        </div>
    );
}

export default App;
