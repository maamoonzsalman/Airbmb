var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useEffect, useState } from 'react';
import api from './api';
import NavBar from './components/NavBar';
import './App.css';
function App() {
    const [data, setData] = useState(null);
    useEffect(() => {
        console.log('Environment:', process.env.NODE_ENV);
        const fetchData = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield api.get('/api/test');
                setData(response.data);
            }
            catch (e) {
                console.error('Error fetching data:', e);
            }
        });
        fetchData();
    }, []);
    return (React.createElement("div", null,
        React.createElement(NavBar, null)));
}
export default App;
