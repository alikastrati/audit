import '@/styles/globalStyles.css'; // Import globalStyles.css
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AdminHeader from '@/components/AdminHeader';
import CreateUser from '@/components/CreateUser';

export default function UsersDashboard() {
  const [users, setUsers] = useState([]);

  useEffect (() => {
    axios.get('http://localhost:3001/auth').then(response => {
      setUsers(response.data);
    }).catch(error => {
      console.error('Error fetching data ', error);
    });

  }, []);


  const handleDeleteUser = async(userId) => {
    try {
      await axios.delete(`http://localhost:3001/auth/user/${userId}`);
      setUsers(users.filter(user => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user from the database", error);
    }
  } 
  
  return (
     <div>
      <AdminHeader />
      <div className="p-4 bg-main h-screen">
        <h2 className="text-2xl font-bold mb-4 ">Users Dashboard</h2>
        <div className="overflow-x-auto flex flex-col justify-center border-solid ">

          <div id='top-button'>
          <button className="btn btn-primary mt-6 mb-6" onClick={()=>document.getElementById('my_modal_1').showModal()}>Create User</button>
              <dialog id="my_modal_1" className="modal">
               <div className="modal-box">
               <CreateUser />
                 <div className="modal-action">
                   <form method="dialog">
                     <button className="btn">Close</button>
                   </form>
                 </div>
               </div>
              </dialog> 
          </div>
          
          <table className="table w-full gap-3">
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Actions</th>
                
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  {/* */}
                <div id='buttons'>
                  <button type='submit' className='btn btn-error' onClick={() => handleDeleteUser(user.id)}>Delete</button>
                </div>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
