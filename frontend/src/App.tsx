import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Mainpage from "./Pages/Mainpage";
import LoginPage from "./Pages/LoginPage";
import RequireAuth from "./Routing/RequireAuth";
import AuthProvider from "./Context/AuthProvider";
import ListPage from "./Pages/ListPage";

function App(){
    return(
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Mainpage />}/>
                    <Route path="/list" element={<ListPage />}/>
                    <Route path="/lists/:whichList" element={
                        <RequireAuth>
                            <ListPage />
                        </ RequireAuth>
                    }/>
                    <Route path={"/login"} element={<LoginPage />}/>
                </ Routes>
            </ AuthProvider>
        </ BrowserRouter>
    );
}

export default App;