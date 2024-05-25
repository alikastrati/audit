import '@/styles/globalStyles.css'; 
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ScanResults() {
  const router = useRouter();
  const [analysisData, setAnalysisData] = useState(null);

  useEffect(() => {
    if (router.query.data) {
      try {
        const decodedData = decodeURIComponent(router.query.data);
        const parsedData = JSON.parse(decodedData);
        setAnalysisData(parsedData);
      } catch (error) {
        console.error('Error parsing analysis data:', error);
      }
    }
  }, [router.query.data]);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-main hero">
        <div className="hero-content text-center">
          <div className="max-w-5xl">
            <h1 className="text-8xl font-bold">Scan Results</h1>
            {analysisData ? (
              <div className="py-6">
                <h2 className="text-4xl">Analysis Report</h2>
                <ul className="text-left bg-gray-200 p-4 rounded">
                  {analysisData.map(({ engine, result }, index) => (
                    <li key={index} className="py-1">
                      <b>{engine}</b>: {result}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>No analysis data available</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
