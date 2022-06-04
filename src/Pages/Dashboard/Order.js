import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import OrderDetails from './OrderDetails';

const Order = () => {

    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([])
  console.log('user', user)

    useEffect ( () =>{
        if(user){
            fetch(`http://localhost:5000/order?email=${user.email}`, {
              method: 'GET',
              headers:{
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
              }
            })
            .then(res => {
              if(res.status === 401 || res.status===403){
                // signOut(auth);
                // localStorage.removeItem('accessToken');
                // navigate('/');
              }
            return res.json()
            
            })
            .then(data =>{
              console.log('my orders',data)
              setOrders(data);
            });
        }
    }, [user]);
    
    return (
        <div>

            <div class="overflow-x-auto">
  <table class="table w-full">
    
    <thead>
      <tr>
        <th>No</th>
        {/* <th>Name</th> */}
        <th>Email</th>
        <th>Address</th>
        <th>Price</th>
        <th>Order Status</th>
        <th>Payment Status</th>

      </tr>
    </thead>
    <tbody>


                    {
                      orders.map((order, index) => <OrderDetails key={order._id} order={order} index={index}></OrderDetails>



                      )
                    }
      
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Order;