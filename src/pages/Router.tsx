import React, {useEffect} from "react";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import {useDispatch, useSelector } from "react-redux";
import { AuthSelectors, getUserInfo } from "src/redux/reducers/authSlice";
import {getMyPosts} from "src/redux/reducers/postSlice";
import PagesContainer from "./PagesContainer";
import SingInPage from "./SingInPage";
import SingUpPage from "./SingUpPage";
import SuccessPage from "./SuccessPage";
import SinglePost from "./SinglePost";
import ContentPage from "./ContentPage";
import Home from "./Home";
import RegConfirmation from "./RegConfirmation";
import NewPass from "./Newpassword/NewPass";
import ResetPass from "./ResetPassword/ResetPass";


export enum RoutesList {
  Home = "/",
  SinglePost = "/blog/:id",
  Search = "/blog/search",
  AddPost = '/blog/add',
  SignIn = "/sign-in",
  SignUp = "/sign-up",
  Confirm = "/activate/:uid/:token",
  Success = "/sign-up/success",
  Default = "*",
  NewPass ="/new-password",
  ResetPass="/sign-in/reset-password"
}

const Router = () => {
  const isLoggedIn = useSelector(AuthSelectors.getLoggedIn);
  const dispatch= useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getUserInfo());
      dispatch(getMyPosts());
    }
  }, [isLoggedIn]);

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
          <Route path={RoutesList.NewPass} element={<NewPass />} />
          <Route path={RoutesList.ResetPass} element={<ResetPass />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;