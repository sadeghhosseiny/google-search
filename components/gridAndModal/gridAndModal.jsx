import { ViewGridIcon } from "@heroicons/react/outline";
import AppsModal from "../appsModal/appsModal";

function GridAndModal({ setHandleShowModalForHeader, handleShowModalForHeader }) {


  return (
    <div className="group">
      <button onClick={() => setHandleShowModalForHeader(!handleShowModalForHeader)} className="icon">
        <ViewGridIcon className='h-6' />
      </button>
      {
        (handleShowModalForHeader) &&
        <div>
          <AppsModal />
        </div>
      }
    </div>
  );
}

export default GridAndModal;
