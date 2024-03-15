import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Feed from '../Components/Organisms/Feed';
import './App.css';

function App() {
    return ( 
        <Router>
            <Routes>
                <Route path='/' element={<Feed />} />
            </Routes>
        </Router>
     );
}

export default App;
