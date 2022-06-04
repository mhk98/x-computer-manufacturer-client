import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] =useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
  <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
   {/* <label for="dashboard-sidebar" class="btn btn-primary drawer-button lg:hidden">Welcome to your Dashboard</label> */}

   <h2 className='text-3xl font-bold text-purple-500 my-4'>Welcome to your Dashboard</h2>
   <Outlet></Outlet>
  
  </div> 
  <div class="drawer-side">
    <label for="dashboard-sidebar" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

    <li><Link to='/dashboard'>My Profile</Link></li>
                    {!admin &&<> 
                           <li><Link to="/dashboard/order">My Orders</Link></li>
                           <li><Link to="/dashboard/review">Add Review</Link></li>
                           </>
                       }

                        {admin && <>
                            <li><Link to="/dashboard/manageOrder">Manage All Order</Link></li>
                            <li><Link to="/dashboard/product">Add a Product</Link></li>
                            <li><Link to="/dashboard/makeadmin">Make Admin</Link></li>
                            <li><Link to="/dashboard/manageProducts">Manage Products</Link></li>
                        </>
                        }
      

    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;