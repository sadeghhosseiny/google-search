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
    <div className="flex flex-grow mt-6 space-x-6 text-gray-400 max-w-[820px] mobile:pb-4 mobile:overflow-x-auto 1.5lg:max-w-[645px] justify-between 1.5lg:ml-5 
    1.5xl:ml-[calc((100vw-1065px)/2-180px)]">
      <div className="1.5lg:ml-0 ml-[170px] flex space-x-6">
        {
          tabs.map((item, i) => (
            <Tabs key={i} item={item} />
          ))
        }
      </div>
      <div>
        <span className="cursor-pointer">
          Tools
        </span>
      </div>
    </div>
  );
}

export default HeaderTabs;
