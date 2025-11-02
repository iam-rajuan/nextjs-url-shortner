"use client";
import React, { useState } from "react";
import Link from "next/link";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    if (!url || !shortUrl) {
      alert("Please enter both URL and short text!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, shorturl: shortUrl }),
      });

      const result = await response.json();

      if (response.ok) {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
        setUrl("");
        setShortUrl("");
        alert(result.message || "Short link created successfully!");
      } else {
        alert(result.message || "Failed to generate short URL.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-purple-50 to-white flex justify-center items-start">
      <div className="bg-white border border-purple-200 rounded-2xl shadow-lg p-8 max-w-lg w-full my-10">
        <h1 className="font-bold text-2xl text-purple-700 mb-4">
          Generate Your Short URL
        </h1>

        <div className="flex flex-col gap-3">
          <input
            type="text"
            value={url}
            className="px-4 py-2 border border-purple-300 focus:outline-purple-600 rounded-md text-gray-700"
            placeholder="Enter your full URL (e.g. https://example.com)"
            onChange={(e) => setUrl(e.target.value)}
          />

          <input
            type="text"
            value={shortUrl}
            className="px-4 py-2 border border-purple-300 focus:outline-purple-600 rounded-md text-gray-700"
            placeholder="Enter your preferred short text (e.g. my-link)"
            onChange={(e) => setShortUrl(e.target.value)}
          />

          <button
            onClick={generate}
            disabled={loading}
            className={`${
              loading ? "bg-purple-400" : "bg-purple-600 hover:bg-purple-700"
            } rounded-lg shadow-md p-3 py-2 my-3 font-semibold text-white transition-all`}
          >
            {loading ? "Generating..." : "Generate"}
          </button>
        </div>

        {generated && (
          <div className="mt-5">
            <p className="font-bold text-lg text-gray-800 mb-1">Your Link:</p>
            <code className="text-purple-700 break-all">
              <Link target="_blank" href={generated}>
                {generated}
              </Link>
            </code>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shorten;




















// "use client"
// import Link from 'next/link'
// import React, { useState } from 'react'

// const Shorten = () => {
//     const [url, seturl] = useState("")
//     const [shorturl, setshorturl] = useState("")
//     const [generated, setGenerated] = useState("")

//     const generate = () => {
//         const myHeaders = new Headers();
//         myHeaders.append("Content-Type", "application/json");

//         const raw = JSON.stringify({
//             "url": url,
//             "shorturl": shorturl
//         });

//         const requestOptions = {
//             method: "POST",
//             headers: myHeaders,
//             body: raw,
//             redirect: "follow"
//         };

//         fetch("/api/generate", requestOptions)
//             .then((response) => response.json())
//             .then((result) => {
//                 setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
//                 seturl("")   
//                 setshorturl("")
//                 console.log(result)
//                 alert(result.message)
            
//             })
//             .catch((error) => console.error(error));
//     }


//     return (
//         <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
//             <h1 className='font-bold text-2xl'>Generate your short URLs</h1>
//             <div className='flex flex-col gap-2'>
//                 <input type="text"
//                     value={url}
//                     className='px-4 py-2 focus:outline-purple-600 rounded-md'
//                     placeholder='Enter your URL'
//                     onChange={e => { seturl(e.target.value) }} />

//                 <input type="text"
//                     value={shorturl}
//                     className='px-4 py-2 focus:outline-purple-600 rounded-md'
//                     placeholder='Enter your preferred short URL text'
//                     onChange={e => { setshorturl(e.target.value) }} />
//                 <button onClick={generate} className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 my-3 font-bold text-white'>Generate</button>
//             </div>

//             {generated && <> <span className='font-bold text-lg'>Your Link </span><code><Link target="_blank" href={generated}>{generated}</Link> 
//                 </code></>}
//         </div>
//     )
// }

// export default Shorten