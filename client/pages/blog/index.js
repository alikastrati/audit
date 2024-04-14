import React from 'react';
import Header from "../../app/components/Header.js"; // Adjusted import path
import "./style.css";
import Footer from '@/app/components/Footer.js';



export default function BlogIndex() {
    return(
    <>
    <Header/>
    
    <div>
        <h1>This is Blog</h1>
    </div>
    
    
    <Footer/>
    </>);
}