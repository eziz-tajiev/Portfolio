
// export const ContactSection = () => {
//   return(
//     <div className="py-16">
//       <div className="container">
//         <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl flex md:flex-row gap-8 flex-col">
//           <div className="flex flex-col justify-start h-fit gap-4 m-auto ml-0">
//             <h2 className="font-serif text-2xl">Let's create something amazing together</h2>
//             <h2 className="font-serif text-2xl">+99361965538</h2>
//             <h2 className="font-serif text-2xl">eziztajiev@gmail.com</h2>
//           </div>
//           <div className="flex flex-col md:flex-1">
//               <div className="mt-2 text-sm flex flex-row">
//                 <div className="flex flex-col gap-2 w-full">
//                   <input type="text" placeholder="Full Name" className="rounded-md px-2 py-1 bg-gray-950" />
//                   <input type="text" placeholder="How to contact you" className="rounded-md px-2 py-1 bg-gray-950"/>
//                   <textarea rows={6} placeholder="Description" className="rounded-md px-2 py-1 bg-gray-950" />
//                 </div>
//               </div>
//             <button className="bg-white text-gray-900 px-6 h-10 font-semibold rounded-xl mt-8 ">Send</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
    
// };


import Call from "@/assets/icons/call.svg"
import Email from "@/assets/icons/sms.svg"
import WhatsApp from '@/assets/icons/whatsApp.svg'
import GitHub from '@/assets/icons/Github - Negative.svg'
import Telegram from "@/assets/icons/Telegram - Negative.svg"
import { title } from "process"
const contacts = [
  {
    icon: <Call />,
    title: '+993 61 965538',
    href: '#',
  },
  {
    icon: <Email />,
    title: 'eziztajiev@gmail.com',
    href: '#',
  }
]
const socialMedia = [
  {
    icon: <WhatsApp className='size-5' />,
    title: 'WhatsApp',
    href: '#',
  },
  {
    icon: <GitHub />,
    title: 'GitHub',
    href: '#',
  },
  {
    icon: <Telegram />,
    title: 'Telegram',
    href: '#',
  },
]


export const ContactSection = () => {
  return(
      <div className="pt-8 pb-0">
        <div className="relative overflow-x-clip z-10">
        <div className="absolute h-[400px] w-[1600px] bottom-0 bg-emerald-300/30 left-1/2 -translate-x-1/2 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
        <div className="bg-black/15">
          <div className="container">
            <div className="md:flex flex-col flex gap-12">
              {/* 1 element */}
              <div>
                <div className="flex justify-center py-10">
                  <h2 className="text-2xl w-[274px] text-center font-semibold uppercase bg-clip-text 
                  bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent">Let's create something amazing together</h2>
                </div>
                <div className="">
                  <div className="flex justify-center">
                    <div className="flex flex-col items-center justify-center text-[18px] leading-[21.78px] gap-3 w-[230px]">
                      {contacts.map(contact=>(
                      <a href={contact.href} className="inline-flex gap-2 items-center">
                        <span>{contact.icon}</span>
                        <span>{contact.title}</span>
                      </a>
                      ))}  
                    </div>
                  </div>

                  <div className="flex justify-around pt-7">
                      {socialMedia.map(media=>(
                        <a href={media.href}>
                          <span className="flex justify-center">{media.icon}</span>
                          <span className="text-[14px] leading-[16.94px]">{media.title}</span>
                        </a>
                      ))}
                  </div>
                </div>
              </div>
                <div>
                  {/* 2 element */}
                  <div className="flex flex-col gap-4 pb-10">
                    <input type="text" placeholder="Full name" className="contact-input"/>
                    <input type="text" placeholder="How to contact you" className="contact-input"/>
                    <textarea placeholder="Description" className="contact-input resize-none h-[150px]"></textarea>
                    <button className="text-base font-bold py-3 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-xl text-gray-950">Send</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
  );
}
