import React, { useState } from "react";
import styles from './SingUpPage.module.scss';
import Title from "../../components/Title";
import TextInput from "../../components/Placeholder";
import classNames from "classnames";
import Button from "../../components/Button";
import { ButtonType } from "../../components/Button/Button";
import { Theme, useThemeContext } from "../../components/context/Theme/Context";
import { NavLink } from "react-router-dom";
import { RoutesList } from "../Router";

const SingUpPage= () => {
    const { theme } = useThemeContext();
    const isDark = theme === Theme.Dark;

    const [name, setName] = useState("");
    const onChangeName = (value: string) => {
      setName(value)
    };

    const [email, setEmail] = useState("");
    const onChangeEmail = (value: string) => {
      setEmail(value)
    };
    const [password, setPassword] = useState("");
    const onChangePassword = (value: string) => {
      setPassword(value);
    };

    const [confirmPassword, setConfirmPW] = useState("");
    const onChangeConfirmPW = (value: string) => {
      setConfirmPW(value);
    };
    return(
    <div>
      <div
        className={classNames(styles.containerSingUp, {[styles.containerDark]: isDark,
        })}
      >
        <div
          className={classNames(styles.backBtnHome, {[styles.backHomeDark]: isDark,
          })}
        >  Back to home
        </div>
        <div className={classNames(styles.titleSuccess)}>
          <Title title={"Sign Up"} />
        </div>
         <div className={styles.wrapperSingUp}>
            <div
            className={classNames(styles.inputContainer, {
              [styles.inputContainerDark]: isDark,})}>
            
            <TextInput
              value={name}
              onChange={onChangeName}
              type={"text"}
              title="Name"
              placeholder="Your name" 
                />
            <TextInput
              value={email}
              onChange={onChangeEmail}
              type={"text"}
              title="Email"
              placeholder="Your email"
            />
            <TextInput
              value={password}
              onChange={onChangePassword}
              type={"password"}
              title="Password"
              placeholder="Your password"
            />
            <TextInput
              value={confirmPassword}
              onChange={onChangeConfirmPW}
              type={"password"}
              title="Confirm Password"
              placeholder="Confirm Password"
            />
               <div className={styles.button}>
               <Button
                title={"Sign Up"}
                onClick={() => {}}
                type={ButtonType.Primary}
               />
            </div>
            <div
              className={classNames(styles.singUp, {
                [styles.darkSingUp]: isDark,})} >
              Already have an account? <span>  Sign In </span>
            </div>
            </div>
         </div>
      </div>
     </div>
    );
};

export default SingUpPage;