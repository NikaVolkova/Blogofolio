import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardType } from "../../components/Card";
import { RootState } from "../store";


type InitialType={
  selectedPost: CardType | null;
  isVisibleSelectedModal: boolean;
  likedPosts: CardType[];
  dislikedPosts: CardType[];
 
};
type PostState = {
    selectedPost: CardType | null;
    isModalPostOpened: boolean;
    likedPosts: CardType[];
    dislikedPosts: CardType[];
   
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
  
};

 const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
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
  },
});

export const { setStatus,setSelectedPost, setPostVisibility } = postSlice.actions;


export const postName = postSlice.name;

export default postSlice.reducer;

export const PostSelectors = {
  getLikedPosts: (state: RootState) => state.posts.likedPosts,
  getDislikedPosts: (state: RootState) => state.posts.dislikedPosts,
  getSelectedPost: (state: RootState) => state.posts.selectedPost,
  getVisibleSelectedModal: (state: RootState) =>
    state.posts.isVisibleSelectedModal,
};


