import g from '../../public/apps icons/g.png';
import gMaps from '../../public/apps icons/gMaps.png';
import gMail from '../../public/apps icons/gMail.png';
import gNews from '../../public/apps icons/gNews.png';
import gDrive from '../../public/apps icons/gDrive.png';
import gYoutube from '../../public/apps icons/gYoutube.png';
import gMeet from '../../public/apps icons/gMeet.png';
import gPhoto from '../../public/apps icons/gPhoto.png';
import App from '../app/app';

function AppsModal() {
  const apps = [
    {
      icon: g,
      title: 'Search'
    },
    {
      icon: gMaps,
      title: 'Maps'
    },
    {
      icon: gYoutube,
      title: 'YouTube'
    },
    {
      icon: gDrive,
      title: 'Drive'
    },
    {
      icon: gNews,
      title: 'News'
    },
    {
      icon: gMail,
      title: 'Gmail'
    },
    {
      icon: gMeet,
      title: 'Meet'
    },
    {
      icon: gPhoto,
      title: 'Photos'
    },
  ];

  return (
    <div className={`fixed w-[300px] space-x-2 space-y-2 py-2 z-40 top-20 right-4 shadow-[0_4px_8px_-2px_rgba(-34,-21,-13,1.3)] rounded-lg bg-white`}>
      {apps.map((item, i) => (
        <App item={item} key={i} />
      ))}
    </div>
  );
}

export default AppsModal;
