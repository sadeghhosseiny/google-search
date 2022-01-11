function Tabs({ item }) {
  return (
    <div className="flex items-center">
      <span className="h-4 w-4">
        {item.icon}
      </span>
      {item.text}
    </div>
  );
}

export default Tabs;
