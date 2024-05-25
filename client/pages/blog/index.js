'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import Header from "../../components/Header.js";
import '@/styles/globalStyles.css'; // Import globalStyles.css
import Footer from '@/components/Footer.js';
import BlogsSection from '@/components/BlogsSection.js';


export default function BlogIndex() {


  return (
    

    <div className='bg-main'>
      <Header />




    <BlogsSection />


     

















    </div>
  );
}
