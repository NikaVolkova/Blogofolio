import API from "../api";
import { takeLatest, all, call, put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { ApiResponse } from "apisauce";
import { GetAllPostsPayload } from "src/redux/reducers/@types";
import { getAllPosts, setAllPosts,getSinglePost,setSinglePost,getMyPosts,setMyPosts,getSearchedPosts,setSearchedPosts} from "../reducers/postSlice";
import { AllPostsResponse } from "./@types";
import { CardType } from "../../utils/@globalTypes";
import callCheckingAuth from "src/redux/sagas/callCheckingAuth";

function* getAllPostsWorker(action: PayloadAction<GetAllPostsPayload>) {
  const { offset,search, ordering } = action.payload;
  const { ok, data, problem }: ApiResponse<AllPostsResponse> = yield call(
    API.getPosts,
    offset,
    search,
    ordering
  );
  if (ok && data) {
    yield put(setAllPosts({ cardList: data.results, postsCount: data.count }));
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
function* getSearchedPostsWorker(action: PayloadAction<string>) {
  const { ok, data, problem }: ApiResponse<AllPostsResponse> = yield call(
    API.getPosts,
    0,
    action.payload
  );
  if (ok && data) {
    yield put(setSearchedPosts(data.results));
  } else {
    console.warn("Error getting all posts", problem);
  }
}
export default function* postsSaga() {
  yield all([
    takeLatest(getAllPosts, getAllPostsWorker),
    takeLatest (getSinglePost, getSinglePostWorker),
    takeLatest(getMyPosts, getMyPostsWorker),
    takeLatest(getSearchedPosts, getSearchedPostsWorker),
  ]);
}