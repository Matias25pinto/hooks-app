import { useEffect, useState } from "react"
import PropTypes from "prop-types";

export const Message = ({title})=>{

    const [coords, setCoords] = useState({x:0, y:0});
    //Como trabajar con eventListener en useEffect

    useEffect(()=>{
        const onMouseMove = ({x,y}) => {
            setCoords({x,y});
        }
        window.addEventListener('mousemove', onMouseMove);
        // console.log('Message Mounted');

        return () =>{
            window.removeEventListener('mousemove', onMouseMove);
            // console.log('Message Unmounted')
        }
    }, []);
    return <>
        <h3>{title}</h3>
        <p>{JSON.stringify(coords)}</p>
    </>
}

Message.propTypes = {
    title: PropTypes.string.isRequired
}