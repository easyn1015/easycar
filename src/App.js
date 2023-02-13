import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CarList from './pages/CarList';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path='/'
                        element={<Layout />}>
                        <Route
                            index
                            element={<Home />}
                        />
                        <Route
                            path='list'
                            element={<CarList />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
