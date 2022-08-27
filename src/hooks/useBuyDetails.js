import { useEffect, useState } from "react";

const useBuyDetails = id =>{

    const [tool, setTool] = useState({})

    useEffect ( () =>{
        const url = `https://secret-river-57828.herokuapp.com/tool/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setTool(data))
    }, [id]);
    return [tool]
}

export default useBuyDetails;