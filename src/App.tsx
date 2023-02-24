import React, {useState} from "react";
import './App.css';
import Button from './components/Button';
import { ButtonType } from './components/Button/Button';
import Title from './components/Title';
import UserName from './components/UserName';
import Tabs from './components/Tabs';
import BurgerBtn from './components/BurgerButton/BurgerButton';
import Card from "./components/Card";
import {CardSize} from "./components/Card/types";
import styles from "./App.module.scss";
import TextInput from './components/Placeholder/Placeholder';
import { Value } from "sass";
  
const MOCK_CARD = {
  id: 0,
  image: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
  text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
  date: '12-10-2023',
  lesson_num: 12,
  title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...',
  description: 'Описание поста',
  author: 10,
};
const App=()=> {
  const[text,setText]=useState("");

const onChange=(value:string)=>{
  setText(value)
};

  return (
    
    <div>
        <Button title= {"Primary"} type={ButtonType.Primary} onClick={()=>{}}/>
        <Button title= {"Secondary"} type={ButtonType.Secondary} onClick={()=>{}}/>
        <Button title= {"Error"} type={ButtonType.Error} onClick={()=>{}}/>
        <BurgerBtn />
        <Title title={"Blog"}/>
        <UserName userName={"Veronika Volkova"}/>
        <Tabs/>
        <TextInput value={text} onChange={onChange} title="Title" placeholder="placeholder" errorText={"Error text"}/>
    <div style={{background:"black"}}>
        
    </div>
    <Card card={MOCK_CARD} size={CardSize.Large} />
      <Card card={MOCK_CARD} size={CardSize.Medium} />
      <Card card={MOCK_CARD} size={CardSize.Small} />
    </div>
  );
}

export default App;
