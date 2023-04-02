import { takeLatest, all, call, put } from "redux-saga/effects";
import { ApiResponse } from "apisauce";
import {PayloadAction} from "@reduxjs/toolkit";
import { getAllPosts, setAllPosts,getSinglePost,setSinglePost,getMyPosts,setMyPosts } from "../reducers/postSlice";
import API from "../api";
import { AllPostsResponse } from "./@types";
import { CardType } from "../../utils/@globalTypes";
import callCheckingAuth from "src/redux/sagas/callCheckingAuth";

function* getAllPostsWorker() {
  const { ok, data, problem }: ApiResponse<AllPostsResponse> = yield call(
    API.getPosts
  );
  if (ok && data) {
    yield put(setAllPosts(data.results));
  } else {
    console.warn("Error getting all posts", problem);
  }
}
function* getSinglePostWorker(action:PayloadAction<string>) {
  const { ok, data, problem }: ApiResponse<CardType> = yield call(
    API.getSinglePost,action.payload
  );
  if (ok && data) {
    yield put(setSinglePost(data));
  } else {
    console.warn("Error getting post", problem);
  }
}
function* getMyPostsWorker() {
  const { ok, data, problem }: ApiResponse<AllPostsResponse> = yield callCheckingAuth(
    API.getMyPosts
  );
  if (ok && data) {
    yield put(setMyPosts(data.results));
  } else {
    console.warn("Error getting my posts", problem);
  }
}

export default function* postsSaga() {
  yield all([
    takeLatest(getAllPosts, getAllPostsWorker),
    takeLatest (getSinglePost, getSinglePostWorker),
    takeLatest(getMyPosts, getMyPostsWorker),
  ]);
}