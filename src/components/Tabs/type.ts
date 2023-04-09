export enum TabsNames {
  All,
  MyPosts,
  Popular,
  Favourites,
  }
  
  export type TabsType = {
    title: string;
    disabled: boolean;
    key: number;
  };
  
  export type TabsProps = {
    tabsList: TabsType[];
    onClick: (key: TabsNames) => () => void;
    activeTab: TabsNames;
  };