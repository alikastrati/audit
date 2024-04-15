'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import Header from "../../components/Header.js";
import '@/styles/globalStyles.css'; // Import globalStyles.css
import Footer from '@/components/Footer.js';
import CreateBlog from '@/components/CreateBlog.js';



export default function BlogIndex() {
  
  const [blogs, setBlogs ] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/blog").then((response) =>{
            setBlogs(response.data);
        })
        .catch(error => {
            console.error("Error fetching the blogs: ", error);
        });
    }, []);
  
  return(
     
    <div className='bg-main'> 
    <Header/>

        <div className='flex justify-center mt-3'>
            <div className='flex justify-start w-2/4 p-6 bg-dimmed text-white font-bold text-4xl rounded-md'><ul className='text-action'>#</ul>Blog</div>
        </div>

        <div className='flex justify-start p-6 gap-6'>
            
            <div className="dropdown flex justify-start">
              <div tabIndex={0} role="button" className="btn ml-36">Sort By</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a>New</a></li>
                  <li><a>Rating</a></li>
                  <li><a>Views</a></li>
                </ul>


            </div>



                <div className='flex justify-start'>
                        <button className="btn bg-action text-main font-semibold hover:bg-dimmed" onClick={()=>document.getElementById('my_modal_5').showModal()}>Create Blog Post</button>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                  <div className="modal-box">

                    <CreateBlog />
                    
                    
                    <div className="modal-action">


                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
        </div>

       




        <div className='flex flex-wrap-reverse flex-row p-10 gap-8 justify-center'>
          {blogs.map(blog => (
             <div key={blog.id} className="card flex-col cursor-pointer rounded-md w-96 bg-base-100 shadow-xl gap-4">

             <figure><img src={blog.blogImage} alt={blog.blogTitle}/></figure>
               <div className="card-body">
                 <div className='font-light opacity-40'>
                   <h1>{blog.createdAt}</h1>
 
                 </div>
 
                 <h2 className="card-title truncate" id='blog-title'>
                 {blog.blogTitle}
                 </h2>
 
                 <div className='flex'>
                   <div className="flex avatar size-8">
                       <div className="w-24 rounded-full">
                         <img id='blog-image' src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                       </div>
                   </div>
 
                   <div className='text-sm ml-1 font-semibold flex align-middle'>
                     <h1 id='username'>{blog.username}</h1>
                   </div>
                 </div>
 
 
                 <div id='blog-text' className='h-10 truncate'>
                   <p>{blog.blogText}</p>
 
                 </div>
 
                 <div className="card-actions justify-end">
 
                   <div className="badge badge-outline">Blog</div> 
                   <div className="badge badge-outline">Blog</div>
                 </div>
                </div>
 
 
           </div>
          ))}
         



</div>

        </div>
);
}