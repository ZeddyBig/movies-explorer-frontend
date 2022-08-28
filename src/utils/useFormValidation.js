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

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    let value = target.value;
    if (name === "name") {
      value = value.replace(/[^a-zA-Zа-яА-ЯёЁ -]/ig,'');
    }
    if (name === "email") {
      value = value.toLowerCase();
    }
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
    setFormParams((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return { values, handleChange, errors, formParams, isValid };
}