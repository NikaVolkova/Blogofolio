import React, { useState } from "react";
import styles from "./RegConfirmation.module.scss";
import Title from "../../components/Title";
import classNames from "classnames";
import Button from "../../components/Button";
import { ButtonType } from "../../components/Button/Button";
import { Theme, useThemeContext } from "../../components/context/Theme/Context";
import { NavLink } from "react-router-dom";
import { RoutesList } from "../Router";

const RegConfirmation = () => {
    const { theme } = useThemeContext();
    const isDark = theme === Theme.Dark;
    return (
        <div>
          <div
            className={classNames(styles.containerRegConfirm, {[styles.containerDark]: isDark,
            })}
          >
            <div
              className={classNames(styles.backBtnHome, {[styles.backHomeDark]: isDark,
              })}
            >
              Back to home
            </div>
            <div className={classNames(styles.titleRegConfirm)}>
              <Title title={"Registration Confirmation"} />
            </div>
            <div className={styles.wrapperRegConfirm}>
              <div
                className={classNames(styles.emailText, { [styles.emailTextDark]: isDark,
                })}
              >
    
                <div className={styles.textComment}>Please activate your account with the activation link in the email example@gmail.com.</div>
                Please, check your email
                
                <div className={styles.button}>
                  <Button
                    title={"Go to home"} onClick={() => {}} type={ButtonType.Primary}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
};

export default RegConfirmation;