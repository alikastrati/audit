import '@/styles/globalStyles.css'; // Import globalStyles.css
import React, { Component } from 'react';
import Chart from '../../../components/Chart';
import Blogchart from '../../../components/BlogChart';
import AdminHeader from '@/components/AdminHeader';



export default function Dashboard() {
    const optionsBlog = {
        chart: {
          type: 'line'
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        }
      };
      
      const seriesBlog = [{
        name: 'Blogs',
        data: [30, 20, 35, 44, 49, 30, 50, 31, 49]
      }];
    
    
    
    const options = {
        chart: {
          type: 'bar'
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        }
      };
      
      const series = [{
        name: 'Users',
        data: [30, 20, 35, 44, 49, 30, 50, 31, 49]
      }];
    
    
    return (
        <>
        <AdminHeader className='z-1'/>
        <div className='min-h-screen bg-main'>
            <div className='flex justify-center'> 
                <div>
                <div id='top-side' className='mb-8 flex justify-center gap-5 p-3'>
                        <button className="btn">
                            Active Users
                            <div className="badge">+14</div>
                        </button>

                        <button className="btn">
                            New Blogs
                            <div className="badge">+99</div>
                        </button>


                        <button className="btn">
                            API Request
                            <div className="badge">TRUE</div>
                        </button>
                    </div>

                    <div id='bottom-side' className='flex flex-wrap'>
                    <div className='flex justify-end p-3'>
                            <div className='flex'>

                                    <div className="card w-96 bg-action text-primary-content z-9999">
                                    <div className="card-body" >
                                     <h2 className="card-title font-bold text-2xl">Blog Activity</h2>
                                      <Blogchart options={optionsBlog} series={seriesBlog}  />
                                     </div>
                                    </div>
                                 </div>

                        </div>


                        <div className='flex justify-end p-3'>
                            <div className='flex'>

                                    <div className="card w-96 bg-action text-primary-content z-9999">
                                    <div className="card-body" >
                                     <h2 className="card-title font-bold text-2xl">New Users</h2>
                                      <Chart options={options} series={series}  />
                                     </div>
                                    </div>
                                 </div>

                        </div>
                    </div>
                </div>
                   
            </div>
            
        </div>
        
      
      
      
        </>
        
    );
  
}
