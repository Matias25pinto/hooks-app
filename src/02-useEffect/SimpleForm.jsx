import { useEffect } from "react";
import { useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

  const [formState, setFormState] = useState({username:'Matias', email:'matias@gmail.com'});
  const {username, email} = formState;

  const onChange = ({target}) => {
    const {value, name} = target;
    setFormState({...formState, [name]: value});
  }

  useEffect(()=>{
    // console.log('Se cargo por primera vez la página');
  }, []);

  useEffect(()=>{
    // console.log('Se cambio un valor del formulario');
  }, [formState]);

  useEffect(() => {
    // console.log('Se cambio el valor del input email');
  },[email]);
  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />

        <input type="text"
               className="form-control"
               placeholder="User Name"
               name="username" 
               value={username}
               onChange={onChange}/>

        {('matias' === username)&& <Message title="El usuario ya existe" />}

        <input type="email"
               className="form-control mt-2"
               placeholder="Example@email.com"
               name="email" 
               value={email}
               onChange={onChange}/>

    </>
  )
}
