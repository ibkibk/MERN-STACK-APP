import React from 'react'
import "./NewPlaces.css"
import Input from "../../shared/Component/FormElement/Input"
const NewPlace = () => {
  return (
    <form className="place-form">
      <Input element="input" type="text" label="Title" validators={[]} errorText="Please enter a valid title"/>
    </form>
  );
};

export default NewPlace;