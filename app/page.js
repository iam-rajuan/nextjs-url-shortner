import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="pt-16 bg-gradient-to-b from-purple-100 via-white to-purple-50 min-h-screen">
      <section className="grid md:grid-cols-2 items-center h-[85vh] max-w-6xl mx-auto px-6">
        <div className="flex flex-col gap-6">
          <h1
            className={`text-4xl md:text-5xl font-extrabold ${poppins.className} text-gray-900`}
          >
            The Best <span className="text-purple-700">URL Shortener</span> in
            the Market
          </h1>
          <p className="text-gray-700 leading-relaxed text-lg">
            Tired of complicated shorteners tracking your every click?{" "}
            <b>BitLinks</b> keeps it simple, fast, and private. No signups, no
            ads — just lightning-fast link shortening.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/shorten">
              <button className="bg-purple-700 hover:bg-purple-800 text-white rounded-md px-5 py-2 font-semibold shadow-md transition-all">
                Try Now
              </button>
            </Link>
            <Link href="https://github.com/yourusername/bitlinks" target="_blank">
              <button className="border border-purple-700 hover:bg-purple-700 hover:text-white text-purple-700 rounded-md px-5 py-2 font-semibold shadow-md transition-all">
                GitHub
              </button>
            </Link>
          </div>
        </div>

        <div className="relative h-[300px] md:h-[400px] w-full">
          <Image
            className="mix-blend-darken object-contain"
            alt="URL shortener illustration"
            src="/vector.jpg"
            fill
            priority
          />
        </div>
      </section>
    </main>
  );
}






















// import Image from "next/image";
// import Link from "next/link";
// import localFont from "next/font/local"

// const poppins = localFont({
//   src: "./fonts/Poppins-ExtraBold.ttf",
//   variable: "--font-poppins",
//   weight: "100 900",
// });

// export default function Home() {
//   return (
//     <main className="bg-purple-100">
//       <section className="grid grid-cols-2 h-[50vh]">
//         <div className="flex flex-col gap-4 items-center justify-center">
//           <p className={`text-3xl font-bold ${poppins.className}`}>
//             The best URL shortener in the Market
//           </p>
//           <p className="px-56 text-center">
//             We are the most straightfoward URL Shortener in the world. Most of the url shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener
//           </p>
//           <div className='flex gap-3 justify-start'>
//           <Link href="/shorten"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>Try Now</button></Link>
//           <Link href="/github"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>GitHub</button></Link>
//         </div>
//         </div>
//         <div className=" flex justify-start relative">
//           <Image className="mix-blend-darken" alt="an Image of a vector" src={"/vector.jpg"} fill={true}    />
//         </div>

//       </section>
//     </main>
//   );
// }
