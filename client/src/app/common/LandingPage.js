import React from 'react';


function LandingPage() {
  return (
    <>
      <div className="hero min-h-screen bg-main">

        <div className="hero-overlay bg-main bg-opacity-60"></div>
        <div className="hero-content text-center">
          <div className="max-w-5xl">
            <h1 className="text-8xl font-bold">Stay Safe with Audit</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

            <div className='items-center'>

              <div className='flex justify-center mb-3 gap-10 no-underline '>
                <button type='button' className='btn'>URL</button>
                <button type='button' className='btn'>FILE</button>
              </div>

              <input type="text" placeholder="Scan an URL e.g https:google.com" className="input input-bordered w-full max-w-xs placeholder:truncate placeholder:opacity-25" />
              <button type='submit' className='btn bg-action ml-2'>Scan</button>
              <h5 className='text-sm mt-3'>By submitting data above,
                you are agreeing to our Terms of Service and Privacy Notice, and
                to the sharing of your URL submission with the security community.
                Please do not submit any personal information; VirusTotal is not
                responsible for the contents of your submission.
                <b className='text-green-500'>Learn More</b></h5>

            </div>
          </div>
        </div>
      </div>



    </>
  );
}

export default LandingPage;
