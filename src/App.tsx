import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePageComponent from "./shared/view/HomePage";
import NewsItemPageComponent from "./shared/view/ArticlePage";

import '@fontsource/noto-sans/400.css';
import '@fontsource/noto-sans/500.css';
import '@fontsource/noto-sans/700.css';
function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePageComponent />} />
                    <Route path="/item" element={<NewsItemPageComponent /> } />
                    {/*<Route component={NotFound} />*/}
                </Routes>
            </Router>
        </>
    );
}

export default App;
