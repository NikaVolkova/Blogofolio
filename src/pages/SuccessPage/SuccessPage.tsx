import React, { useState } from "react";
import styles from "./SuccessPage.module.scss";
import Title from "../../components/Title";
import classNames from "classnames";
import Button from "../../components/Button";
import { ButtonType } from "../../components/Button/Button";
import { Theme, useThemeContext } from "../../components/context/Theme/Context";
import { NavLink } from "react-router-dom";
import { RoutesList } from "../Router";


const SuccessPage = () => {
  const { theme } = useThemeContext();
  const isDark = theme === Theme.Dark;

  return (
    <div>
      <div
        className={classNames(styles.containerSuccess, {[styles.containerDark]: isDark,
        })}
      >
        <div
          className={classNames(styles.backBtnHome, {[styles.backHomeDark]: isDark,
          })}
        >
          Back to home
        </div>
        <div className={classNames(styles.titleSuccess)}>
          <Title title={"Success"} />
        </div>
        <div className={styles.wrapperSuccess}>
          <div
            className={classNames(styles.emailText, { [styles.emailTextDark]: isDark,
            })}
          >

            <div>Email confirmed.</div>
            Your registration is now completed
            <div className={styles.button}>
              <Button
                title={"Sign In"} onClick={() => {}} type={ButtonType.Primary}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;