import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import XKCDComic from './components/XKCDComic';

const App: React.FC = () => {
    return (
        <Router>
            <div id="page">
                <Header />
                <Menu />
                <Routes>
                    <Route path="/" element={<MainContent />} />
                    <Route path="/comic" element={<XKCDComic />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
