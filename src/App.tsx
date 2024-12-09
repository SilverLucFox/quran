import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SurahList from './components/SurahList';
import Surah from './components/Surah';
import surahData from './assets/quran.json';

const App: React.FC = () => {
    return (
        <Router>
            <Navbar surahs={surahData.surahs} />
            <Routes>
                <Route path="/" element={<SurahList surahs={surahData.surahs} />} />
                <Route path="/surah/:surahId" element={<Surah surahs={surahData.surahs} />} />
            </Routes>
        </Router>
    );      
};

export default App;
