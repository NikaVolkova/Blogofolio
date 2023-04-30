import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardListType, CardType } from "../../utils/@globalTypes";
import { RootState } from "../store";


type InitialType={
  selectedPost: CardType | null;
  isVisibleSelectedModal: boolean;
  likedPosts: CardType[];
  dislikedPosts: CardType[];
  addPost:CardType[];
  postsList: CardListType;
  singlePost: CardType | null;
};


export enum LikeStatus {
  Like = "like",
  Dislike = "dislike",
}

const initialState: InitialType = {
  selectedPost: null,
  isVisibleSelectedModal: false,
  likedPosts: [],
  dislikedPosts: [],
  addPost:[],
  postsList: [],
  singlePost:null,
};

 const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getAllPosts: (_, __: PayloadAction<undefined>) => {},
    setAllPosts: (state, action: PayloadAction<CardListType>) => {
      state.postsList = action.payload;
    },
    getSinglePost:(_, __: PayloadAction<string>)=>{},
    setSinglePost:(state, action: PayloadAction<CardType | null>) => {
      state.singlePost = action.payload;
    },
    setSelectedPost: (state, action: PayloadAction<CardType | null>) => {
      state.selectedPost = action.payload;
    }, 
    setPostVisibility: (state, action: PayloadAction<boolean>) => {
      state.isVisibleSelectedModal = action.payload;
    },
    setStatus(
      state,
      action: PayloadAction<{ status: LikeStatus; card: CardType }>
    ) {
      const { status, card } = action.payload;

      const likedIndex = state.likedPosts.findIndex(
        (post) => post.id === card.id
      );
      const dislikedIndex = state.dislikedPosts.findIndex(
        (post) => post.id === card.id
      );

      const isLike = status === LikeStatus.Like;

      const mainKey = isLike ? "likedPosts" : "dislikedPosts";
      const secondaryKey = isLike ? "dislikedPosts" : "likedPosts";
      const mainIndex = isLike ? likedIndex : dislikedIndex;
      const secondaryIndex = isLike ? dislikedIndex : likedIndex;

      if (mainIndex === -1) {
        state[mainKey].push(card);
      } else {
        state[mainKey].splice(mainIndex, 1);
      }

      if (secondaryIndex > -1) {
        state[secondaryKey].splice(secondaryIndex, 1);
      }
    },
    setAddPost:(state, action:PayloadAction<{card:CardType}>)=>{
      const {card} = action.payload;
      const addPostIndex =state.addPost.findIndex((post)=>post.id===card.id);
      if(addPostIndex===-1){
        state.addPost.push(card);
      } else{
        state.addPost.splice(addPostIndex,1);
      }
    }
  },
});

export const { setStatus, getAllPosts, setAllPosts,getSinglePost,setSinglePost, setSelectedPost,setAddPost, setPostVisibility } = postSlice.actions;


export const postName = postSlice.name;

export default postSlice.reducer;

export const PostSelectors = {
  getLikedPosts: (state: RootState) => state.posts.likedPosts,
  getDislikedPosts: (state: RootState) => state.posts.dislikedPosts,
  getSelectedPost: (state: RootState) => state.posts.selectedPost,
  getVisibleSelectedModal: (state: RootState) =>
    state.posts.isVisibleSelectedModal,
  getAddPost:(state: RootState) => state.posts.addPost,
  getAllPosts: (state: RootState) => state.posts.postsList,
  getSinglePost:(state:RootState)=>state.posts.singlePost,  
};


