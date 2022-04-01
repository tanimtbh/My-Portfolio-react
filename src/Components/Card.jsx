//Project files
import Modal from "./Modal";
//NPM packages
import { useState } from "react";
import ModalChild from "./ModalChild";

export default function Card({ item }) {
  const { photo, title, github } = item;

  //local state
  const [modal, setModal] = useState(false);

  //method
  function onToggleModal() {
    setModal(!modal);
  }
  const viewCard = github ? (
    <button className="details-btn" onClick={() => onToggleModal()}>View Details</button>
  ) : (
    <p>Comming Soon</p>
  );

  
  return (
    <div className="container">
      <img src={photo} alt="Avatar" className="image" />
      <p>{title}</p>
      <div className="overlay">
        <div className="text">
          {viewCard}
          <Modal show={modal} close={onToggleModal} title={title}>
            <ModalChild item={item} />
          </Modal>
        </div>
      </div>
    
    </div>
  );
}
