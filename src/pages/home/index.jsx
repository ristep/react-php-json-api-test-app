import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";

export const useForm = (options) => {
  const [data, setData] = useState((options?.initialValues || {}));
  const [errors, setErrors] = useState({});

  const handleChange = (key, sanitizeFn) => (
    e,
  ) => {
    const value = sanitizeFn ? sanitizeFn(e.target.value) : e.target.value;
    setData({
      ...data,
      [key]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validations = options?.validations;
    if (validations) {
      let valid = true;
      const newErrors = {};
      for (const key in validations) {
        const value = data[key];
        const validation = validations[key];
        if (validation?.required?.value && !value) {
          valid = false;
          newErrors[key] = validation?.required?.message;
        }

        const pattern = validation?.pattern;
        if (pattern?.value && !RegExp(pattern.value).test(value)) {
          valid = false;
          newErrors[key] = pattern.message;
        }

        const custom = validation?.custom;
        if (custom?.isValid && !custom.isValid(value)) {
          valid = false;
          newErrors[key] = custom.message;
        }
      }

      if (!valid) {
        setErrors(newErrors);
        return;
      }
    }

    setErrors({});

    if (options?.onSubmit) {
      options.onSubmit();
    }
  };

  return {
    data,
    handleChange,
    handleSubmit,
    errors,
  };
};

const Home = (props) => {
  const { setTheme } = props;

  const them = (theme) => ("./styles/" + theme + "/main.css" );

  return (
    <Container>
      <h2>Home page</h2>
      <h3>Choose Botswatch theme</h3>
      <Button style={{backgroundColor:"rgb(217, 227, 241)"}} onClick={()=>setTheme(them("Morph"))}>Morph</Button>
      <Button style={{backgroundColor:"rgb(120, 194, 173)"}} onClick={()=>setTheme(them("Minty"))}>Minty</Button>
      <Button style={{backgroundColor:"rgb(44, 62, 80)"}}    onClick={()=>setTheme(them("Flatly"))}>Flatly</Button>
      <Button style={{backgroundColor:"rgb(47, 164, 231)"}}  onClick={()=>setTheme(them("Cerulean"))}>Cerulean</Button>
      <Button style={{backgroundColor:"rgb(69, 130, 236)"}}  onClick={()=>setTheme(them("Litera"))}>Litera</Button>
   </Container>
  );

}

export default Home;