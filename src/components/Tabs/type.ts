export enum TabsNames {
    ALL,
    FAVORITES,
    POPULAR,
  }
  
  export type TabsType = {
    title: string;
    disabled: boolean;
    key: number;
  };
  
  export type TabsProps = {
    tabsList: TabsType[];
    onClick: (key: TabsNames) => void;
    activeTab: number;
  };