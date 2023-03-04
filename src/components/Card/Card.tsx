import React, { FC } from "react";
import classNames from "classnames";
import { Theme, useThemeContext } from "../../components/context/Theme/Context";
import { CardProps, CardSize } from "./types";
import styles from "./Card.module.scss";
import { BookmarkIcon } from "../../assets/icons/BookmarkIcon";
import { DislikeIcon } from "../../assets/icons/DislikeIcon";
import { LikeIcon } from "../../assets/icons/LikeIcon";
import { MoreIcon } from "../../assets/icons/MoreIcon";


const Card: FC<CardProps> = ({ card, size }) => {
  const { title, text, date, image } = card;
  const { theme } = useThemeContext();
  const isDark = theme === Theme.Dark;
  const isMedium = size === CardSize.Medium;
  const isSmall = size === CardSize.Small;

  return (
    <div
      className={classNames(styles.container, {
        [styles.mediumContainer]: isMedium,
        [styles.smallContainer]: isSmall,
        
      })}
    >
      <div
        className={classNames(styles.infoContainer, {
          [styles.mediumInfoContainer]: isMedium,
          [styles.smallInfoContainer]: isSmall,
        })}
      >
        <div className={styles.mainInfoContainer}>
          <div className={styles.titleContainer}>
            <div className={styles.date}>{date}</div>
            <div
              className={classNames(styles.title, {
                [styles.mediumTitle]: isMedium || isSmall,
                [styles.darkContainer]: isDark,
              })}
            >
              {title}
            </div>
          </div>
          {size === CardSize.Large && <div className={styles.text}>{text}</div>}
        </div>
        <img
          src={image}
          className={classNames(styles.image, {
            [styles.mediumImage]: isMedium,
            [styles.smallImage]: isSmall,
          })}
        />
      </div>
      <div className={styles.footer}>
        <div className={classNames(styles.iconContainer, {
            [styles.darkIconContainer]: isDark,
          })}>
          <div>
            <LikeIcon />
          </div>
          <div>
            <DislikeIcon />
          </div>
        </div>
        <div  className={classNames(styles.iconContainer, {
            [styles.darkIconContainer]: isDark,
          })}>
          <div>
            <BookmarkIcon />
          </div>
          <div>
            <MoreIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;