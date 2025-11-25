import { useState } from 'react';
import { NextPage } from 'next';

const Misc: NextPage<unknown> = () => {
  const [loading, setLoading] = useState(false);

  return (
    <section className="grid gap-6" id="misc">
      <div className="w-full max-w-3xl mx-auto px-4 flex flex-col items-center md:items-start text-center md:text-left mt-12">
        <p className="text-gray-700 text-justify mb-6">
          You can download my CV here.
        </p>

        <a
          href="CV_Germani.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition mb-6"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Misc;

