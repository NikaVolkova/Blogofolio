import React, { FC, MouseEventHandler, useState,useMemo } from "react";
import classNames from "classnames";
import styles from './Tabs.module.scss';
import {TabsNames, TabsProps} from "./type";
import {Theme, useThemeContext} from "../../components/context/Theme/Context";
import { useSelector } from "react-redux";
import { AuthSelectors } from "src/redux/reducers/authSlice";

const Tabs: FC<TabsProps> = ({ tabsList, activeTab, onClick }) => {
    const onTabClick = (key: TabsNames) => () => onClick(key);
  const {theme} =useThemeContext();
  const isLoggedIn = useSelector(AuthSelectors.getLoggedIn);

  const TABS_LIST = useMemo(
    () => [
      {
        title: "All",
        disabled: false,
        key: TabsNames.All,
      },
      {
        title: "My Posts",
        disabled: !isLoggedIn,
        key: TabsNames.MyPosts,
      },
      {
        title: "Popular",
        disabled: false,
        key: TabsNames.Popular,
      },
      {
        title: "Favourites",
        disabled: false,
        key: TabsNames.Favourites,
      },
    ],
    [isLoggedIn]
  );

  
return (
    <div className={classNames(styles.container, {
        [styles.darkContainer]: theme === Theme.Dark })}>
        {tabsList.map((tab) => {
    return <div 
    key={tab.key} 
    className={classNames(styles.tab,{
        [styles.activeTab]:activeTab===tab.key,
        [styles.disabled]:tab.disabled,
    })}
        onClick={tab.disabled?undefined: onTabClick(tab.key)}
        >{tab.title}</div>;
     })}
    </div>
   ); 
};

export default Tabs;