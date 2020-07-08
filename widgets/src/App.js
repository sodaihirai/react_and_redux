import React from "react";
import Dropdown from "./components/Dropdown";
// import Accordion from "./components/Accordion";
// import Search from "./components/Search";

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework'
  },
  {
    title: "Why use React?",
    content: "React is a favorite js library among engineers"
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components"
  }
]

const options = [
  {
    label: "Red",
    value: "red"
  },
  {
    label: "Green",
    value: "green"
  },
  {
    label: "Blue",
    value: "blue"
  }
]

export default () => {
  return (
    <div>
      {/* <Accordion items={items}/> */}
      {/* <Search /> */}
      <Dropdown options={options}/>
    </div>
  );
};
