import React,{FC,useState} from "react";
import styles from "./Placeholder.module.scss";
import classNames from "classnames";


type InputProps={
    value:string;
    onChange:(value:string)=>void;
    title:string;
    placeholder:string;
    disabled?:boolean;
    errorText?:string;
}
const TextInput:FC<InputProps>=({value,onChange,title,placeholder,disabled,errorText})=>{


const onChangeText = (e: React.ChangeEvent<HTMLInputElement>)=>{
    onChange(e.target.value);
};
    return(
      <div className={styles.container}>
        <div className={styles.title}>{title}</div>
        <input
        value={value}
        className={classNames(styles.input,{
            [styles.disabled]:disabled,
            [styles.valid]:errorText,}
            )
}
        placeholder={placeholder}
        onChange={onChangeText}
        disabled={disabled}
        />
        {errorText &&<div className={styles.validText}>{errorText}</div>}
      </div>  
    );
    };
export default TextInput;