import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import AdminHeader from '@/components/AdminHeader';
import '@/styles/globalStyles.css';
import CreatePass from '@/components/CreatePass';

function PasswordManager() {
  const [passwords, setPasswords] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPasswords();
  }, []);

  const fetchPasswords = async () => {
    try {
      const response = await axios.get('http://localhost:3001/password');
      setPasswords(response.data);
    } catch (error) {
      if (error.response) {
       
        console.error('Error fetching passwords:', error.response.data);
        setError(`Error: ${error.response.data.message}`);
      } else if (error.request) {
    
        console.error('Error fetching passwords:', error.request);
        setError('Error: No response received from server');
      } else {
    
        console.error('Error fetching passwords:', error.message);
        setError(`Error: ${error.message}`);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/password/${id}`);
      setPasswords(passwords.filter(password => password._id !== id));
    } catch (error) {
      if (error.response) {
        console.error('Error deleting password:', error.response.data);
        setError(`Error: ${error.response.data.message}`);
      } else if (error.request) {
        console.error('Error deleting password:', error.request);
        setError('Error: No response received from server');
      } else {
        console.error('Error deleting password:', error.message);
        setError(`Error: ${error.message}`);
      }
    }
  };

  return (
          <>
          <AdminHeader/>
        
    <div className="container mx-auto p-4 h-screen bg-main">
      <div id="top-button">
        <button className="btn btn-active btn-neutral" onClick={() => document.getElementById('my_modal_1').showModal()}>Create a Password</button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <CreatePass/>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>

      <h1 className="text-3xl font-bold mb-4">Password List</h1>
      {error && <div role="alert" className="alert alert-danger text-white">{error}</div>}

      <table className="table w-full mt-8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {passwords.map(password => (
            <tr key={password._id}>
              <td>{password._id}</td>
              <td>{password.passwordTitle}</td>
              <td className='truncate w-11'>{password.passwordText}</td>
              <td>
                <div id='buttons' className='flex gap-5'>
                  <button onClick={() => handleDelete(password._id)} className="btn btn-error btn-xs btn-red">Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default PasswordManager;
