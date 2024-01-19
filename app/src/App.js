import { ResumeContextProvider } from "./context/context";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Crafter from "./pages/Crafter";
import Layout from "./components/Layout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<LandingPage />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="crafter" element={<Crafter />} />
    </Route>
  )
);

function App() {
  return (
    <ResumeContextProvider>
      <RouterProvider router={router} />
    </ResumeContextProvider>
  );
}

export default App;
