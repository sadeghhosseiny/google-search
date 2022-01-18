import Image from "next/image";

function App({ item }) {
  return (
    <div className="inline-block w-[90px] h-[94px] first:ml-2 text-center cursor-pointer hover:bg-blue-100 rounded-xl">
      <Image src={item.icon.src} width={54} height={54} objectFit="contain" />
      {item.title}
    </div>
  );
}

export default App;
