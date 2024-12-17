import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Layout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
