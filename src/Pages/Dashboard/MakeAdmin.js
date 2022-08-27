import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AdminRow from './AdminRow';

const MakeAdmin = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch(' https://secret-river-57828.herokuapp.com/user',{

        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='mt-3'>
            <h1 className='text-center text-2xl'>All User and Admin</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Admin/User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <AdminRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                                index={index}
                            ></AdminRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;