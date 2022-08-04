type Props = {
  title: string;
  children: React.ReactNode;
};

const Tab: React.FC<Props> = ({ children }) => {
  return <div className="tab-header">{ children }</div>;
};

export default Tab;
