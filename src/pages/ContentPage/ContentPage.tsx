import React, { FC } from "react";

import {ContentProps} from "./types";
import styles from "./ContentPage.module.scss";

import { BookmarkIcon} from "../../assets/icons/BookmarkIcon";
import { DislikeIcon } from "../../assets/icons/DislikeIcon";
import { LikeIcon } from "../../assets/icons/LikeIcon";

const MOCK_ARRAY = [
    {
      id: 0,
      image:
        "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
      text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.During the final days of Alice Neel’s blockbuster solo show at the Metropolitan Museum of Art this summer, the line into the exhibition spanned the length of the museum’s European paintings corridor, and the wait was over half an hour. Titled “People Come First,” the show featured more than 100 gritty cityscapes, domestic interiors, and stripped-down portraits of Neel’s neighbors, friends, and fellow artists in the largest-ever showing of her work in her hometown of New York City.",
      
      date: "12-10-2023",
      lesson_num: 12,
      title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
      description: "Описание поста",
      author: 10,
    },]

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