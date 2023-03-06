import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PagesContainer from "./PagesContainer";
import SingInPage from "./SingInPage";
import Home from "./Home";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;