import { useState } from "react";

const useValiHook = (props) => {
  const { valSchema, formData } = props; 
  const [ errors, setErrors ] = useState({});
  
  const onBlur = (ev) =>{
    valSchema.validateAt( [ev.target.name],{ [ev.target.name]:ev.target.value } )
      .then( () => {
        const { [ev.target.name]:_, ...rest } = errors;
        setErrors(rest);
      }).catch( (err) => {
        setErrors({ ...errors, [ev.target.name]:err.message });
      }); 
    };

  const validate =  () =>{
    valSchema.validate(formData, { abortEarly: false } )
      .catch( (err) =>{
        err.inner.forEach( (err) => {
          if(err.inner.path!==undefined) 
            setErrors({ ...errors, [err.inner.path]:err.inner.message });
        });
      }); 
    };
   
  return({ onBlur, validate, errors });
};

export default useValiHook;