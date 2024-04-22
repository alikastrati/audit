import { useState, useEffect } from 'react';
import AdminHeader from '@/components/AdminHeader';
import axios from 'axios';
import '@/styles/globalStyles.css';
import React from 'react';

export default function BlogDashboard() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('http://localhost:3001/admin/blog-dashboard');
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/blog/${id}`);
      setBlogs(blogs.filter(blog => blog._id !== id));
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  const handleUpdate = async (id, updatedBlog) => {
    try {
      await axios.put(`http://localhost:3000/blog/${id}`, updatedBlog);
      fetchBlogs();
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  return (
    <>
      <AdminHeader/>
      
      <div className="container mx-auto p-4">
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
                <td>{blog.Name}</td>
                <td>{blog.Title}</td>
                <td>
                  <button onClick={() => handleUpdate(blog._id, { Name: 'Updated Name', Title: 'Updated Title' })} className="btn btn-outline btn-square btn-xs btn-blue">Update</button>
                  <button onClick={() => handleDelete(blog._id)} className="btn btn-outline btn-square btn-xs btn-red">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
