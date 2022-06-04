import { useEffect, useState } from "react";

const useOrderDetails = () =>{
    const [orders, setOrders] = useState([])
    

    useEffect ( () =>{
        const url = ' https://damp-falls-64903.herokuapp.com/order/'
        fetch(url)
        .then(res => res.json())
        .then(data =>setOrders(data))
    }, []);

    return [orders, setOrders]
    
}

export default useOrderDetails;