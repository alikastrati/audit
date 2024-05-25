import { useState, useEffect } from 'react';
import AdminHeader from '@/components/AdminHeader';
import axios from 'axios';
import '@/styles/globalStyles.css';
import React from 'react';
import CreateBlog from '@/components/CreateBlog';

export default function BlogDashboard() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('http://localhost:3001/blog');
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };
  
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/blog/${id}`);
      setBlogs(blogs.filter(blog => blog.id !== id));
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };
  
  return (
    <>
      <AdminHeader/>
      
      <div className="container mx-auto p-4 h-screen bg-main">
      <div id='top-button'>
          <button className="btn btn-primary mt-6 mb-6" onClick={()=>document.getElementById('my_modal_1').showModal()}>Create a new Blog</button>
              <dialog id="my_modal_1" className="modal">
               <div className="modal-box">
               <CreateBlog />
                 <div className="modal-action">
                   <form method="dialog">
                     <button className="btn">Close</button>
                   </form>
                 </div>
               </div>
              </dialog> 
          </div>
        
        <h1 className="text-3xl font-bold mb-4">Blog List</h1>

        <table className="table w-full mt-8">
          <thead>
            <tr>
              <th>Name</th>
              <th>Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map(blog => (
              <tr key={blog._id}>
                <td>{blog.id}</td>
                <td>{blog.blogTitle}</td>
                <td className='truncate w-11'>{blog.blogText}</td>
                <td>
                  <div id='buttons' className='flex gap-5'>
                  <button onClick={() => handleDelete(blog.id)} className="btn btn-error btn-xs btn-red">Delete</button>
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
