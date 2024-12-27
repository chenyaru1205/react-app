// 引入组件
import App from "../App";
import HomeView from "../views/HomeView";
import AboutView from "../views/AboutView";
 
import { createBrowserRouter, Navigate } from "react-router-dom";

const base = window.__POWERED_BY_QIANKUN__ ? '/app-react' : '/'
 
const router = createBrowserRouter([
  {
    path: base + "/",
    element: < App />,
    children: [
      { path: base + "/", element: <Navigate to="home" replace /> },
      { path: base + "home", element: <HomeView /> },
      { path: base + "about", element: <AboutView /> }
    ]
  },
])
 
export default router