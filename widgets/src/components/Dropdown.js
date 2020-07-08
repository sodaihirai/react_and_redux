import React, { useState } from "react";

const Dropdown = ({ options }) => {
  const [selection, setSelection] = useState(null);
  const [visible, setVisible] = useState(false);

  const onMenuClick = () => {
    setVisible(!visible)
  }

  const onItemClick = (color) => {
    setSelection(color)
  }

  const visibleFlag = () => {
    return visible ? 'visible' : ''
  }

  const renderItems = options.map((option) => {
    return (
      <div
        style={{ pointerEvents: "all" }}
        role="option"
        aria-checked="false"
        aria-selected="true"
        className="selected item"
        onClick={() => onItemClick(option.value)}
      >
        <span class="text">{option.label}</span>
      </div>
    );
  });

  return (
    <div aria-expanded="false" className="ui search selection dropdown">
      <input
        type="text"
        aria-autocomplete="list"
        autocomplete="off"
        class="search"
        tabindex="0"
        value=""
      />
      <div
        className="default text"
        role="alert"
        aria-live="polite"
        aria-atomic="true"
      >
        State
      </div>
      <i aria-hidden="true" class="dropdown icon" onClick={() => onMenuClick()}></i>
      <div role="listbox" class={`menu ${visibleFlag()} transition`}>
        {renderItems}
      </div>
      <div>{selection}</div>
    </div>
  );
};

export default Dropdown;
