import React from 'react';
import Header from "../../app/components/Header.js"; // Adjusted import path
import "./style.css";
import Footer from '@/app/components/Footer.js';



export default function BlogIndex() {
    return(
    <div className='Blog'> 
    <>
    <Header/>
    
        <div className='BLOG-title'><ul className='hash'>#</ul>Blog</div>
        <div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="btn m-1">Sort</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Ratings</a></li>
    <li><a>Views</a></li>
    <li><a>Newest</a></li>
    <li><a>Oldest</a></li>
  </ul>
</div>
        <div className='Pages'>
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes"/></figure>
  <div className="card-body">
    <h2 className="card-title">
    Blog
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>BlogBlogBlogBlogBlogBlogBlogBlogBlogBlogBlog</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Blog</div> 
      <div className="badge badge-outline">Blog</div>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes"/></figure>
  <div className="card-body">
    <h2 className="card-title">
    Blog
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>BlogBlogBlogBlogBlogBlogBlogBlogBlogBlogBlog</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Blog</div> 
      <div className="badge badge-outline">Blog</div>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes"/></figure>
  <div className="card-body">
    <h2 className="card-title">
    Blog
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>BlogBlogBlogBlogBlogBlogBlogBlogBlogBlogBlog</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Blog</div> 
      <div className="badge badge-outline">Blog</div>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes"/></figure>
  <div className="card-body">
    <h2 className="card-title">
    Blog
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>BlogBlogBlogBlogBlogBlogBlogBlogBlogBlogBlog</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Blog</div> 
      <div className="badge badge-outline">Blog</div>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes"/></figure>
  <div className="card-body">
    <h2 className="card-title">
    Blog
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>BlogBlogBlogBlogBlogBlogBlogBlogBlogBlogBlog</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Blog</div> 
      <div className="badge badge-outline">Blog</div>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes"/></figure>
  <div className="card-body">
    <h2 className="card-title">
    Blog
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>BlogBlogBlogBlogBlogBlogBlogBlogBlogBlogBlog</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Blog</div> 
      <div className="badge badge-outline">Blog</div>
    </div>
  </div>
</div>
</div>
<div className='btnBlog'>
<button className="btn btn-neutral">Ratings</button>
<button className="btn btn-neutral">Views</button>
<button className="btn btn-neutral">Newest</button>
<button className="btn btn-neutral">Oldest</button>
    </div>
    <Footer/>
    </>
        </div>
);
}