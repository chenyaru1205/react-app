// 引入组件
// import App from "../App";
import HomeView from "../views/HomeView";
import AboutView from "../views/AboutView";
 
import { createBrowserRouter, Navigate } from "react-router-dom";
 
const router = createBrowserRouter([
    { path: "/", element: <Navigate to="home" replace /> },
    { path: "/home", element: <HomeView /> },
    { path: "/about", element: <AboutView /> }
], {
  basename: window.__POWERED_BY_QIANKUN__ ? '/react-app' : '/'
})
 
export default router