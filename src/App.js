import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import { Wrapper } from './components/Wrapper/Wrapper';
import { HeaderLogoGroup } from './components/HeaderLogoGroup/HeaderLogoGroup';
import { Content } from './components/Content/Content';
import { Home } from './pages/Home/Home';
import { Layout } from './components/Layout/Layout';
import { NotFound } from './pages/NotFound/NotFound';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
