import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./auth/Login";

export const publicRoutes = [
  { path: "/", exact: true, component: Home, layout: MainLayout },
  { path: "/login", component: Login, layout: MainLayout },
];

export const protectedRoutes = [
  { path: "/dashboard", exact: true, component: Dashboard, layout: MainLayout },
];
