import { BookmarkIcon, DotsVerticalIcon, NewspaperIcon, PhotographIcon, PlayIcon, SearchIcon } from "@heroicons/react/outline";
import Tabs from "../tabs/tabs";

function HeaderTabs() {
  const tabs = [
    {
      icon: <SearchIcon />,
      text: 'All'
    },
    {
      icon: <PhotographIcon />,
      text: 'Images'
    },
    {
      icon: <PlayIcon />,
      text: 'Videos'
    },
    {
      icon: <BookmarkIcon />,
      text: 'Books'
    },
    {
      icon: <NewspaperIcon />,
      text: 'News'
    },
    {
      icon: <DotsVerticalIcon />,
      text: 'More'
    },
  ];

  return (
    <div className="flex w-full flex-grow mt-6 space-x-6 text-gray-400 max-w-[820px] justify-between">
      <div className="ml-[170px] flex space-x-6">
        {
          tabs.map((item, i) => (
            <Tabs key={i} item={item} />
          ))
        }
      </div>
      <div>
        <span>
          Tools
        </span>
      </div>
    </div>
  );
}

export default HeaderTabs;
