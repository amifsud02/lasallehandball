import React from "react";

type Props = {
  title: string;
  index: number;
  setSelectedTab: (index: number) => void;
};

const TabTitle: React.FC<Props> = ({ title, setSelectedTab, index }) => {
  return (
    <button className="tablinks" onClick={() => setSelectedTab(index)}>{title}</button>
  );
};

export default TabTitle;
