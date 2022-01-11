import { UserIcon } from "@heroicons/react/outline";
import { useRef, useState } from "react";

function Avatar() {

  const imagePickerRef = useRef(null);
  const [image, setImage] = useState(null);

  const addImage = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImage(readerEvent.target.result);
    };
  };

  return (
    <div className='icon relative' onClick={() => imagePickerRef.current.click()}>
      {
        image ?
          <Image className='rounded-full' src={image} objectFit='cover' layout='fill' /> :
          <UserIcon className='rounded-full h-6 items-center justify-center' />
      }
      <input type="file" onChange={addImage} hidden ref={imagePickerRef} />
    </div>
  );
}

export default Avatar;
