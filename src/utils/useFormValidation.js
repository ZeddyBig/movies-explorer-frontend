import React, { useState } from "react";

//хук управления формой и валидации формы
export function useFormValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  const [formParams, setFormParams] = useState({
    name: '',
    email: '',
    password: '',
  });

  const params = {
    email: formParams.email,
  }

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    let value = target.value;
    if (name === "name") {
      value = value.replace(/[^a-zA-Zа-яА-ЯёЁ -]/ig,'');
    }
    if (name === "email") {
      value = value.toLowerCase();
      params.email = value;
    }
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    if (name === "email") {
      if ((params.email.match(/\w+@\w+\.[a-zа-яё]{2,5}$/)) === null) {
        setErrors({...errors, [name]: "Неправильный формат почты"});
      } 
    }

    setIsValid((target.closest("form").checkValidity()) && ((params.email.match(/\w+@\w+\.[a-zа-яё]{2,5}$/)) !== null));

    setFormParams((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return { values, handleChange, errors, formParams, isValid };
}