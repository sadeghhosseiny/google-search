function Tabs({ item }) {
  return (
    <div className="flex items-center">
      <span className="h-4 w-4 mr-2 mobile:hidden">
        {item.icon}
      </span>
      {item.text}
    </div>
  );
}

export default Tabs;
