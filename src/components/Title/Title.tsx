import React,{FC,ReactNode} from "react";
import  styles from "./Title.module.scss";

type TitleProps = {
    title:string | ReactNode;
  };
  
  const Title: FC<TitleProps> = (props:any) => {
    return <h1 className={styles.title}>{props.title}</h1>
  };
  
  
  export default Title;
  