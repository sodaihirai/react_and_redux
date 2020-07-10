import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  console.log(selected)

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    }
    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick)
    }
  }, []);

  const renderItems = options.map((option) => {
    if (option === selected) {
      return null;
    } else {
      return (
        <div
          style={{ pointerEvents: "all" }}
          key={option.value}
          role="option"
          aria-checked="false"
          aria-selected="true"
          className="selected item"
          onClick={() => onSelectedChange(option)}
        >
          <span className="text">{option.label}</span>
        </div>
      );
    }
  });

  return (
    <div
      aria-expanded="false"
      className="ui search selection dropdown"
      onClick={() => setOpen(!open)}
      ref={ref}
    >
      <div
        className="default text"
        role="alert"
        aria-live="polite"
        aria-atomic="true"
      >
        {selected.label}
      </div>
      <div>
        <i aria-hidden="true" className="dropdown icon"></i>
        <div
          role="listbox"
          className={`menu ${open ? "visible transition" : ""}`}
        >
          {renderItems}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
