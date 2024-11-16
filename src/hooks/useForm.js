import { useState } from "react";

export const useForm = ( initialForm = {} ) => {

  const [formState, setFormState] = useState(initialForm);

    const onChange = ({target}) => {

        const {value, name} = target;
        setFormState({...formState, [name]: value});

    }

  return {
    formState,
    onChange,
  }
}