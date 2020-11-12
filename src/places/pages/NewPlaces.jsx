import React from 'react'
import "./NewPlaces.css"
import Input from "../../shared/Component/FormElement/Input"
const NewPlace = () => {
  return (
    <form className="place-form">
      <Input element="input" type="text" label="Title" />
    </form>
  );
};

export default NewPlace;