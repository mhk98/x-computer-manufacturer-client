import { useEffect, useState } from "react";

const useBuyDetails = id =>{

    const [tool, setTool] = useState({})

    useEffect ( () =>{
        const url = `https://damp-falls-64903.herokuapp.com/tool/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setTool(data))
    }, [id]);
    return [tool]
}

export default useBuyDetails;