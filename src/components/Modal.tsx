import React, { ChangeEvent, useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { getRandomRGB } from "../help/rgbRandom";
import { todoAdded } from "../features/todos";
import { counterAddInc } from "../features/counterAdd";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "linear-gradient(120deg, #397ce7 0%, #0c3ca4 100%)",
    padding: "10px",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

const AddModal = () => {
  let subtitle: any;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");

  const submitTodoHandler = (e: any) => {
    e.preventDefault();
    // const date = new Date();
    dispatch(
      todoAdded({
        text: inputText,
        completed: false,
        id: Math.random() * 1000,
        createdAt: String(new Date()),
        background: `rgb(${getRandomRGB()}, ${getRandomRGB()}, ${getRandomRGB()})`,
      })
    );
    dispatch(counterAddInc(1));
    setInputText("");
    closeModal();
  };

  const inputTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#ffffff";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <button
        style={{
          color: "rgb(11, 212, 162)",
          cursor: "pointer",
          transition: "all 0.3s ease",
          padding: "0.5rem",
          fontSize: "1.5rem",
          border: "none",
          background: "none",
          borderRadius: "10px",
        }}
        onClick={openModal}
      >
        Add new task <i className="fas fa-plus-square"></i>
      </button>
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            style={{
              color: "white",
              background: "none",
              border: "none",
              margin: 0,
            }}
            onClick={closeModal}
          >
            X
          </button>
        </div>
        <div>Add new task</div>
        <form>
          <input value={inputText} onChange={inputTextHandler} autoFocus />
          <button
            typeof="submit"
            onClick={submitTodoHandler}
            style={{
              color: "rgb(11, 212, 162)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              padding: "0.5rem",
              fontSize: "1.5rem",
              border: "none",
              background: "white",
            }}
            type="submit"
          >
            <i className="fas fa-plus-square"></i>
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AddModal;
