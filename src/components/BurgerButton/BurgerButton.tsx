import React,{FC,useState,ReactNode} from "react";
import classNames from "classnames";
import {OpenedMenu, CloseIcon} from "../../assets/icons";
import styles from "./BurgerButton.module.scss";
import Button from "../Button";

enum ButtonType{
    Primary="primary",
   }

 enum BurgerButtonState{
    IsActive="isActive",
    NotActive="notActive",
 }  
   
   type ButtonProps={
       title:string | ReactNode;
       onClick:()=>void;
       type:ButtonType;
       disabled?:boolean;
       className?:string;
   }
   const btnSlyles={
    [ButtonType.Primary]:styles.primaryButton,
  }

  const BurgerBtn = ()=>{
    const [isActiveBtn,setIsActiveBtn]=useState (
        BurgerButtonState.IsActive
    );
    const onClickBurgerBtn =()=>{
    return isActiveBtn===BurgerButtonState.IsActive?setIsActiveBtn(BurgerButtonState.NotActive)
    :setIsActiveBtn(BurgerButtonState.IsActive)
  };
  return(
    <Button
    className={styles.BurgerBtn}
    onClick={onClickBurgerBtn}
    type={ButtonType.Primary}
    title={isActiveBtn === BurgerButtonState.IsActive?(
        <OpenedMenu/> ):(<CloseIcon/>)
    }

    
    />
  );
  };
export default BurgerBtn;