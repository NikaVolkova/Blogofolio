import React, {useEffect, useState,} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Title from "../../components/Title";
import Tabs from "../../components/Tabs";
import CardsList from "../../components/CardsList";


import { TabsNames } from "../../components/Tabs/type";
import {Theme, useThemeContext} from "../../components/context/Theme/Context";
import ThemeSwitcher from "../../components/ThemeSwitcher";
import { getAllPosts, PostSelectors } from "../../redux/reducers/postSlice";
import SelectedPostModal from "./SelectedPostModal";

const TABS_LIST = [
  {
    title: "All",
    disabled: false,
    key: TabsNames.ALL,
  },
  {
    title: "My favorites",
    disabled: true,
    key: TabsNames.FAVORITES,
  },
  {
    title: "Popular",
    disabled: false,
    key: TabsNames.POPULAR,
  },
];


export const MOCK_CARD2 = {
  id: 0,
  image: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
  text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.\n" +
  "During the final days of Alice Neel’s blockbuster solo show at the Metropolitan Museum of Art this summer, the line into the exhibition spanned the length of the museum’s European paintings corridor, and the wait was over half an hour. Titled “People Come First,” the show featured more than 100 gritty cityscapes, domestic interiors, and stripped-down portraits of Neel’s neighbors, friends, and fellow artists in the largest-ever showing of her work in her hometown of New York City.\n" +
  "The stories tracked Hambling’s trailblazing career while focusing on her current and upcoming projects. The artist’s installation Relic (2021), produced alongside sound recordist Chris Watson, was recently on view at Snape Maltings in London. Meanwhile, this October, portraits by Hambling will be presented at the Italian gallery Thomas Brambilla. The artist’s “Wave Series” is also currently being exhibited in the group show “Summer Exhibition” at Marlborough London, which runs through September 10th.\n" +
  "The excitement surrounding this exhibition delighted longtime fans of the expressive painter while inspiring a legion of new devotees—a trend matched by Neel’s strengthening position in the art market, especially in the past year. In May, Neel’s 1966 canvas Dr. Finger’s Waiting Room roused a flurry of bids from the United States, Asia, and Europe at Christie’s New York, where it ultimately sold for just over $3 million, breaking both its high estimate and the artist’s auction record. Just hours earlier at Sotheby’s New York, Neel’s double portrait Henry and Sally Hope (1977), depicting an art historian and his wife, sold for just under $1.6 million, notching her third-highest auction result.\n" +
  "The demand for Maggi Hambling’s evocative portraits and exuberant depictions of seascapes and landscapes surged this past week, when the number of collectors inquiring on her work increased more than tenfold from the week before. The British artist, esteemed for her whirling, gestural paintings and bold public sculptures, has seen a consistent wave of interest in her work that has accelerated in the past few years. This recent uptick in interest is consistent with Hambling’s career trajectory, which has been punctuated by a flurry of public commissions, institutional recognition, and secondary-market demand.\n" +
  "Add to favorites",
  date: '12-10-2023',
  lesson_num: 12,
  title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...',
  description: 'Описание поста',
  author: 10,
};

const Home = () => {
 
  const {theme} =useThemeContext();
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(TabsNames.ALL);
  const onTabClick = (key: TabsNames) => setActiveTab(key);


  //TODO remove on next lesson
  const params = useParams();
  console.log("Id from url", params?.id);

  const postsList = useSelector(PostSelectors.getAllPosts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  return (
    <div>

      <Title title={"Blog"} />
      <Tabs tabsList={TABS_LIST} activeTab={activeTab} onClick={onTabClick}/>
      <CardsList cardsList={postsList} />
      <SelectedPostModal/>
    </div>
  );
};

export default Home;