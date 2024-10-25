import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = ({ handleSaveProject, handleCancelProject }) => {
  const Title = useRef();
  const Description = useRef();
  const Date = useRef();

  const modal = useRef();

  function handleSave() {
    const enteredTitle = Title.current.value;
    const enteredDescription = Description.current.value;
    const enteredDate = Date.current.value;

    //Validating the inputs
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDate.trim() === ""
    ) {
      //Show the error modal
      modal.current.open();
      return;
    }

    handleSaveProject({
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate,
    });
  }

  return (
    <>
      <Modal ref={modal}>
        <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
        <p className="text-stone-400 mb-4">You forget to enter some valid</p>
      </Modal>
      <div className="w-[35rem] mt-16 ">
        <menu className="flex items-center justify-end gap-4 my-14">
          <li>
            <button
              className="text-stone-300 hover:text-stone-950"
              onClick={handleCancelProject}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-4 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={Title} label="Title" />
          <Input ref={Description} label="Description" isTextarea={true} />
          <Input ref={Date} label="Due Date" inType="date" />
        </div>
      </div>
    </>
  );
};

export default NewProject;
