import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import { PAGE_NAV } from './utils/constants';
import HomePage from './pages/HomePage';
import BoardDetailPage from './pages/MovieDetailPage';

function App() {
    return (
        <div className="container">
            <Header />
            <div className="main-container">
                <Routes>
                    <Route path={PAGE_NAV.HOME.path} element={<HomePage />} />
                    <Route path={PAGE_NAV.NOW_PLAYING.path} element={<></>} />
                    <Route path={PAGE_NAV.UP_COMING.path} element={<></>} />
                    <Route path={PAGE_NAV.POPULAR.path} element={<></>} />
                    <Route path={PAGE_NAV.TOP_RATED.path} element={<></>} />
                    <Route path="movie/:movieId" element={<BoardDetailPage />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
