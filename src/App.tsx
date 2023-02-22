import React from 'react';
import './App.css';
import Button from './components/Button';
import { ButtonType } from './components/Button/Button';
import Title from './components/Title';
import UserName from './components/UserName';
import Tabs from './components/Tabs';
import BurgerBtn from './components/BurgerButton/BurgerButton';
  
const App=()=> {

  return (
    
    <div>
        <Button title= {"Primary"} type={ButtonType.Primary} onClick={()=>{}}/>
        <Button title= {"Secondary"} type={ButtonType.Secondary} onClick={()=>{}}/>
        <Button title= {"Error"} type={ButtonType.Error} onClick={()=>{}}/>
        <BurgerBtn />
        <Title title={"Blog"}/>
        <UserName userName={"Veronika Volkova"}/>
        <Tabs/>
    <div style={{background:"black"}}>
        
    </div>
    </div>
  );
}

export default App;
