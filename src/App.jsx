import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Pages/Home';
import { lazy, Suspense } from 'react';
import Spiner from './Loader/Spiner';

function App() {
  const Layout = lazy(() => import('./Layout/Layout'));
  const Home = lazy(() => import('./Pages/Home'));
  // const Login = lazy(() => import('./Pages/Home'));
  // const Profile = lazy(() => import('./Pages/Home'));
  // const singlePage = lazy(() => import('./Pages/Home'));

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <Suspense fallback={<Spiner />}>
            <Layout />
          </Suspense>
        }>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
