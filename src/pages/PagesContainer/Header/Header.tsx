import React, { useMemo, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import Button from "../../../components/Button";
import { ButtonType } from "../../../components/Button/Button";
import { CloseIcon, OpenedMenu } from "../../../assets/icons";
import BurgerBtn from "../../../components/BurgerButton/BurgerButton";
import UserName from "../../../components/UserName";
import ThemeSwitcher from "../../../components/ThemeSwitcher";
import { RoutesList } from "../../Router";
import styles from "./Header.module.scss";
import classNames from "classnames";

const Header = () => {
  const [isOpened, setOpened] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const onClickBurgerBtn = () => {
    setOpened(!isOpened);
  };

  const onAuthButtonClick = () => {
    navigate(RoutesList.SignIn);
  };

  const navButtonsList = useMemo(
    () => [
      {
        title: "Home",
        key: RoutesList.Home,
      },
      {
        title: "Add Post",
        key: RoutesList.AddPost,
      },
    ],
    []
  );

  return (
    <>
      <div className={styles.container}>
        <Button
          title={isOpened ? <CloseIcon /> : <OpenedMenu />}
          onClick={onClickBurgerBtn}
          type={ButtonType.Primary}
          className={styles.BurgerBtn}
        />
        <UserName userName={"Artem Malkin"} />
      </div>
      {isOpened && (
        <div className={styles.menuContainer}>
          <div className={styles.actionsContainer}>
            <UserName userName={"Artem Malkin"} />
            {navButtonsList.map(({ key, title }) => {
              return (
                <NavLink
                  to={key}
                  key={key}
                  className={classNames(styles.navButton, {
                    [styles.activeNavButton]: location.pathname === key,
                  })}
                >
                  {title}
                </NavLink>
              );
            })}
          </div>
          <div>
            <ThemeSwitcher />
            <Button
              title={"Sign In"}
              onClick={onAuthButtonClick}
              type={ButtonType.Secondary}
              className={styles.authButton}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;