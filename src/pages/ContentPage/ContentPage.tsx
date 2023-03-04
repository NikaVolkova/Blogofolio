import React, { FC } from "react";

import {ContentProps} from "./types";
import styles from "./ContentPage.module.scss";

import { BookmarkIcon} from "../../assets/icons/BookmarkIcon";
import { DislikeIcon } from "../../assets/icons/DislikeIcon";
import { LikeIcon } from "../../assets/icons/LikeIcon";


const ContentPage: FC<ContentProps> = ({content}) => {
const { title,image,text} = content;
return(
<div>
    <div className={styles.wraper}>
        <div className={styles.navigation}>
         <div className={styles.anchorНome}>Home</div>
         <div className={styles.pipeline}>|</div>
         <div className={styles.postText}>Post 14278</div>
        </div>
              <div className={styles.contentFilling}>
               <div className={styles.header}>{title}</div>
               <img src={image} className={styles.picture}></img>
               <div className={styles.textPost}>{text}</div>
              </div>
            <div className={styles.icons} >
              <div className={styles.leftIcons}>
                  <div className={styles.likeIc}>
                <LikeIcon/>
                  </div>
                  <div className={styles.disLikeIc}>
                <DislikeIcon/>
                  </div>
              </div>
              <div className={styles.rightIcons}>
               <div className={styles.saveIc}>
               <BookmarkIcon /> 
               </div>
               <div className={styles.addIc}>
               Add to favorites
               </div>
              </div>
            </div>


    </div>
</div>
);
};
export default ContentPage;