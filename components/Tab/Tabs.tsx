import Link from "next/link";
import React, { ReactElement, useState } from "react";
import TabTitle from "./TabTitle";

type Props = {
  children: ReactElement[];
  redirect: string;
};

const Tabs: React.FC<Props> = ({ children, redirect }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    
     <>
      <div className="tabs__wrapper">
        <ul className="nav__tab">
          <div className="category">
            {children.map((item, index) => (
              <TabTitle
                key={index}
                title={item.props.title}
                index={index}
                setSelectedTab={setSelectedTab}
                isActive={selectedTab === index}
              />
            ))}
          </div>

          <Link href={redirect}>
              <a className="showAll">Show All</a>
          </Link>
        </ul>
      </div>

      <div>
        {children[selectedTab]}
      </div>
    </>
  );
};

export default Tabs;
