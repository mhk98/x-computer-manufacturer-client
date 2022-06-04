import { Link } from 'react-router-dom';
import useOrderDetails from '../../hooks/useOrderDetails';


const OrderDetails = ({order, index}) => {
    const {_id, name, paid, address, price} = order;

    const [orders, setOrders]= useOrderDetails()
    

    const handleDelete = id =>{
        const proceed = window.confirm('Are sure you want to delete')
        if(proceed){
            const url= (`http://localhost:5000/order/${id}`)
            fetch(url,{
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data =>{
                const remaining= orders.filter(order => order._id !== id)
                window.location.reload()
                setOrders(remaining)

            })
        }
    }
    return (
        <tr>
            <td>{index+1}</td>
            <td>{name}</td>
            <td>{address}</td>
            <td>{price}</td>
            <td><button onClick={ () => handleDelete(order._id)} class="btn btn-xs">Delete</button></td>
            <td>
            {(price && !paid) &&<Link to={`/dashboard/payment/${_id}`}><button class="btn btn-xs btn-success">Pay</button></Link>}
            {(price && paid) &&<span className="text-success">Paid</span>}
            </td>
        </tr>
    );
};


export default OrderDetails;