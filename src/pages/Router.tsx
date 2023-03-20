import React from "react";

import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import PagesContainer from "./PagesContainer";
import SingInPage from "./SingInPage";
import SingUpPage from "./SingUpPage";
import SuccessPage from "./SuccessPage";
import SinglePost from "./SinglePost";
import ContentPage from "./ContentPage";


import Home from "./Home";
import RegConfirmation from "./RegConfirmation";

export enum RoutesList {
  Home = "/",
  SinglePost = "/blog/:id",
  Search = "/blog/search",
  AddPost = '/blog/add',
  SignIn = "/sign-in",
  SignUp = "/sign-up",
  Confirm = "/sign-up/confirm",
  Success = "/sign-up/success",
  Default = "*",
}

const Router = () => {
  const isLoggedIn = false;
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesList.Home} element={<PagesContainer />}>
          <Route path={RoutesList.Home} element={<Home />} />
          <Route path={RoutesList.SinglePost} element={<SinglePost/>} />
          <Route path={RoutesList.AddPost} element={isLoggedIn? <Home />:<Navigate to={RoutesList.SignIn}/>} />
          <Route path={RoutesList.SignIn} element={<SingInPage />} />
          <Route path={RoutesList.SignUp} element={<SingUpPage />} />
          <Route path={RoutesList.Success} element={<SuccessPage />} />
          <Route path={RoutesList.Confirm } element={<RegConfirmation/>} />
          <Route path={RoutesList.Default } element={<div>404 NOT FOUND</div>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;