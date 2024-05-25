import { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Home() {
  const [inputUrl, setInputUrl] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const encodedUrl = encodeURIComponent(inputUrl);

      const response = await axios.post('https://www.virustotal.com/api/v3/urls', `url=${encodedUrl}`, {
        headers: {
          'x-apikey': 'key',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      const scanId = response.data.data.id;

      const analysisResponse = await axios.get(`https://www.virustotal.com/api/v3/analyses/${scanId}`, {
        headers: {
          'x-apikey': 'key'
        }
      });

      const analysisData = analysisResponse.data.data.attributes.results;
      const filteredResults = Object.entries(analysisData).map(([engine, { result }]) => ({
        engine,
        result
      }));

      console.log(filteredResults);


      router.push(`/scan-results?data=${encodeURIComponent(JSON.stringify(filteredResults))}`);
    } catch (error) {
      console.error('Error scanning the URL', error);
    }
  };

  return (
    <>
      <Header />
      <div className="bg-main hero min-h-screen">
        <div className="bg-main hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center">
          <div className="max-w-5xl">
            <h1 className="text-8xl font-bold">Stay Safe with <i className='text-warning'><b>Audit</b></i></h1>
            <p className="py-6">
              Scan a file or a URL that you do not trust and get instant results from multiple vendors detailing the properties of the URL/File
            </p>
            <form className='items-center' onSubmit={handleSubmit}>
              <div className='flex justify-center mb-3 gap-10 no-underline '>
                <button type='button' className='btn'>URL</button>
                <button type='button' className='btn'>FILE</button>
              </div>
              <input
                type="text"
                name="inputurl"
                placeholder="Scan an URL e.g https://google.com"
                className="input input-bordered w-full max-w-xs placeholder:truncate placeholder:opacity-25"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
              />
              <button type='submit' className='btn btn-active btn-warning ml-2'>
                <h1 className='text-grey'>Scan</h1>
              </button>
              <h5 className='mt-3 text-xs'>
                By submitting data above, you are agreeing to our Terms of Service and Privacy Notice, and to the sharing of your URL submission with the security community. Please do not submit any personal information; VirusTotal is not responsible for the contents of your submission. <b className='text-green-500'>Learn More</b>
              </h5>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
