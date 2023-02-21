import React, { useEffect, useRef } from 'react';

export const ButtonComponent = () =>  {
  const divEl = useRef();
  useEffect(() => {
    const Kuc = Kucs["1.9.0"];
    const buttonNormal = new Kuc.Button({
      text: "Normal",
      type: "normal",
      className: "kuc_normal_button",
    });
    divEl.current.appendChild(buttonNormal)
  }, [])
  return (
    <div className="sample-container" id="button">
      <div id="sample-container__components" ref={divEl}></div>
    </div>
  );
};