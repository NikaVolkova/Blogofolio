import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PagesContainer from "./PagesContainer";
import SingInPage from "./SingInPage";
import SingUpPage from "./SingUpPage";
import SuccessPage from "./SuccessPage";

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
  Success = "/sign-up/success"
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesList.Home} element={<PagesContainer />}>
          <Route path={RoutesList.Home} element={<Home />} />
          <Route path={RoutesList.SignIn} element={<SingInPage />} />
          <Route path={RoutesList.SignIn} element={<SingUpPage />} />
          <Route path={RoutesList.SignIn} element={<SuccessPage />} />
          <Route path={RoutesList.SignIn} element={<RegConfirmation/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;