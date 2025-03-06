// import React from "react"; //No es necesario importarlo explícitamente cuando se utiliza un jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Importamos los componentes de la carpeta pages para cargarlos en el sistema

import Home from '@/pages/home/Home.jsx';
import {createBrowserRouter} from "react-router";
import Login from "@/pages/auth/Login.jsx";
import Register from "@/pages/auth/Register.jsx";
import VerifyEmail from "@/pages/auth/VerifyEmail.jsx";
import Dashboard from "@/pages/dashboard/Dashboard.jsx";
import Wrapper from "@/pages/dashboard/Wrapper.jsx";
import ProfileForm from "@/pages/profile/ProfileForm.jsx";
import NotFound from "@/pages/errors/NotFound.jsx";

export const router = createBrowserRouter([
    {path:"/", element: <Home/>},
    {path:"/login", element: <Login/>},
    {path:"/register", element: <Register/>},
    {path:"/verify-email", element: <VerifyEmail/>},
    {path:"/dashboard", element: <Wrapper><Dashboard/></Wrapper>},
    {path:"/profile", element: <Wrapper><ProfileForm/></Wrapper>},
    {path:"*", element: <NotFound/>},

])