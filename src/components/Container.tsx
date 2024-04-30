import React from 'react';
import { Button } from './ui/button';
import { Toaster } from 'sonner';

export default function Home({ children }: { children: React.ReactNode }) {
   return (
      <div className='h-screen w-screen flex justify-center items-center'>
         <div className='border w-[90%] h-[90%] rounded p-5'>
            <Button onClick={() => { window.location.href = "/" }} variant="outline">Voltar</Button>
            <div className='w-full min-h-full'>
               {children}
               <Toaster position="bottom-right" richColors />
            </div>
         </div>
      </div>
   );
}
