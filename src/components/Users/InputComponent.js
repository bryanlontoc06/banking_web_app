import React from "react";

function InputComponent({
  inputType,
  inputClass,
  inputID,
  placeholderTitle,
  handleOnChange,
  inputValue,
  label,
  isReadOnly, 
}) {
  return (
    <>
      <input
        type={inputType}
        className={inputClass}
        id={inputID}
        placeholder={placeholderTitle}
        readOnly={isReadOnly && true}
        onChange={(e) => handleOnChange(e.target.value)}
        value={inputValue}         
      />
      {label ? <label>{label}</label> : ""}
    </>
  );
}

export default InputComponent;
