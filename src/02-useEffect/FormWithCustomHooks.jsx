import { useEffect } from "react";
import { useForm } from "../hooks/useForm";


export const FormWithCustomHook = () => {
  const { formState, onChange } = useForm({
                                            username:'', 
                                            email:'',
                                            password:''});

  const {username, email, password} = formState;

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
        <h1>Formulario Custom Hook</h1>
        <hr />

        <input type="text"
               className="form-control"
               placeholder="User Name"
               name="username" 
               value={username}
               onChange={onChange}/>

        <input type="email"
               className="form-control mt-2"
               placeholder="Example@email.com"
               name="email" 
               value={email}
               onChange={onChange}/>


        <input type="password"
               className="form-control mt-2"
               placeholder="Contraseña"
               name="password" 
               value={password}
               onChange={onChange}/>

    </>
  )
}
