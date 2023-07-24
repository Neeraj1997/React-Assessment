import React from "react";

function ButtonComponent({ myButtons, onClickHandler }) {
  return (
    <div className="grid grid-cols-2 gap-3 mt-3">
      {myButtons.map((button) => (
        <>
          <button
            onClick={() => onClickHandler(button.action)}
            className={`rounded bg-slate-200 shadow p-3 ${button.backgroundColor} transition ease-in`}
          >
            {button.label}
          </button>
        </>
      ))}
    </div>
  );
}

export default ButtonComponent;
