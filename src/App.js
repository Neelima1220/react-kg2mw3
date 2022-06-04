import React from 'react';
import { cloneDeep } from 'lodash';
import Accordion from './compoents/accordian';
import './style.css';

const accData = [
  {
    title: 'First Accordion',
    content: 'First Accordion content',
    isOpen: false,
  },
  {
    title: 'Second Accordion',
    content: 'Second Accordion content',
    isOpen: false,
  },
  {
    title: 'Third Accordion',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    isOpen: false,
  },
];

export default function App() {
  const [data, setData] = React.useState(accData);
  const [selected, setSelected] = React.useState(false);

  const handleAcc = (i) => {
    const tempAcc = cloneDeep(accData);
    console.log(tempAcc, tempAcc[i].isOpen);

    if (tempAcc[i].isOpen === true) {
      tempAcc[i].isOpen = false;
    } else {
      tempAcc[i].isOpen = true;
    }
    setData(tempAcc);
  };
  return data.map((item, index) => {
    return (
      <Accordion
        item={item}
        index={index}
        onClick={() => handleAcc(index)}
        isOpen={item.isOpen}
      />
    );
  });
}
