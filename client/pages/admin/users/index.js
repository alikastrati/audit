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
  
  return (
     <div>
      <AdminHeader />
      <div className="p-4 bg-main">
        <h2 className="text-2xl font-bold mb-4">Users Dashboard</h2>
        <div className="overflow-x-auto">

          <div id='top-button'>
          <button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_1').showModal()}>Create User</button>
              <dialog id="my_modal_1" className="modal">
               <div className="modal-box">
               <CreateUser />
                 <div className="modal-action">
                   <form method="dialog">
                     {/* if there is a button in form, it will close the modal */}
                     <button className="btn">Close</button>
                   </form>
                 </div>
               </div>
              </dialog> 
          </div>
          
          <table className="table w-full">
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                {/* Add more table headers if needed */}
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  {/* */}
                  {/* Render more user data in additional columns */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
