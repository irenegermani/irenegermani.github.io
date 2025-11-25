import { useState } from 'react';
import { NextPage } from 'next';

const Misc: NextPage<unknown> = () => {
  const [loading, setLoading] = useState(false);
  
  return (
    <section className="w-full" id="misc">
      <div className="mt-12">
        <p className="text-gray-700 leading-relaxed mb-6">
          You can download my CV here.
        </p>
        
          href="CV_Germani.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Misc;

