// export const ContactSection = () => {
//   return(
//     <div className="py-16">
//       <div className="container">
//         <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl flex flex-row">
//           <div className="flex flex-row">
//               <h2 className="font-serif text-2xl flex-1">Let's create something amazing together</h2>
//               <div className="mt-2 text-sm flex flex-col justify-center flex-1">
//                 <div className="flex flex-col gap-2">
//                   <input type="text" placeholder="Full Name" className="rounded-md px-2 py-1 bg-gray-950" />
//                   <input type="text" placeholder="How to contact you" className="rounded-md px-2 py-1 bg-gray-950"/>
//                   <input type="text" placeholder="Description" className="rounded-md px-2 py-1 bg-gray-950 h-20" />
//                 </div>
//               </div>
//           </div>
//             <button className="text-white bg-gray-900 px-6 h-10 font-semibold rounded-xl mt-8">Send</button>
//         </div>
//       </div>
//     </div>
//   );  
// };
export const ContactSection = () => {
  return(
    <div className="py-16">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl flex md:flex-row gap-8 flex-col">
          <div className="flex flex-col justify-start h-fit gap-4 m-auto ml-0">
            <h2 className="font-serif text-2xl">Let's create something amazing together</h2>
            <h2 className="font-serif text-2xl">+99361965538</h2>
            <h2 className="font-serif text-2xl">eziztajiev@gmail.com</h2>
          </div>
          <div className="flex flex-col md:flex-1">
              <div className="mt-2 text-sm flex flex-row">
                <div className="flex flex-col gap-2 w-full">
                  <input type="text" placeholder="Full Name" className="rounded-md px-2 py-1 bg-gray-950" />
                  <input type="text" placeholder="How to contact you" className="rounded-md px-2 py-1 bg-gray-950"/>
                  <textarea rows={6} placeholder="Description" className="rounded-md px-2 py-1 bg-gray-950" />
                </div>
              </div>
            <button className="bg-white text-gray-900 px-6 h-10 font-semibold rounded-xl mt-8 ">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
    
};
