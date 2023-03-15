import React, { useEffect, useRef } from 'react';

export const CheckBoxComponent = () =>  {
  const divEl = useRef();
  useEffect(() => {
    const Kuc = Kucs["1.9.0"];
    const checkbox = new Kuc.Checkbox({
      className: "cus-checkbox",
      value: ["Orange"],
      items: [
        {
          label: "orange",
          value: "Orange"
        },
        {
          label: "apple",
          value: "Apple"
        }
      ]
    });
    divEl.current.appendChild(checkbox)
  }, [])
  return (
    <div className="sample-container" id="checkbox">
      <div id="sample-container__components" ref={divEl}></div>
    </div>
  );
};