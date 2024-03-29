import { useEffect, useState } from "react";

const useTools = () =>{

    const [tools, setTools] = useState([])
    useEffect( () =>{
        fetch('https://secret-river-57828.herokuapp.com/tool')
        .then(res => res.json())
        .then(data =>setTools(data))
    }, [])

    return [tools]
}

export default useTools;