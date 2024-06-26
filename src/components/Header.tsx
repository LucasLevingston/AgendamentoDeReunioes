import { Home } from 'lucide-react';

export default function Header() {
   return (
      <div className="flex h-20 w-full items-center justify-between px-2 sm:px-5">
         <button onClick={() => { window.location.href = "/" }}>

            <p className="font-saira-stencil text-[40px] text-mainColor">
               Agenda Fácil
            </p>
         </button>
         <div className="flex items-center space-x-5">
            <div className="flex h-0 w-0 items-center rounded-lg bg-[#F3F5F6] p-2 sm:h-10 sm:w-[352px] ">
               <input
                  type="text"
                  placeholder="Procurando por algo específico?"
                  className="w-full border-0 bg-[#F3F5F6] bg-transparent  px-2 py-1 outline-none ring-0 focus:ring-0"
               />
            </div>
            <button
               onClick={() => {
                  window.location.href = '/';
               }}
               className='flex'
            >
               <div className='bg-red-500 rounded-full size-6 items-center justify-center'>
                  <Home />
               </div>
            </button>
         </div>
      </div>
   )
}
