import React, {useState} from "react";
import './App.css';

import BurgerBtn from './components/BurgerButton/BurgerButton';

import styles from "./App.module.scss";
import TextInput from './components/Placeholder/Placeholder';
import Home from "./pages/Home";

import ThemeProvider from "./components/context/Theme/Provider";
import { Theme } from "./components/context/Theme/Context";
 
const App=()=> {
  const [theme, setTheme] = useState(Theme.Dark)
  const onChangeTheme=(value:Theme)=>{
    setTheme(value)
  }
  const[text,setText]=useState("");

const onChange=(value:string)=>{
  setText(value)
};

  return (
   
    <div className={styles.container}>
    
      <ThemeProvider theme={theme} onChangeTheme={onChangeTheme}>
    <div className={styles.container}>
      <Home />
      </div>
      </ThemeProvider>
      
      </div>
    
  );
}

export default App;
