import { useEffect } from 'react';
import FormModal from '@/components/modal';
import Link from 'next/link';

export default function Home() {

  // useEffect(() => {
  // }, []);

  return (
   <>
    <div className='flex justify-evenly '>
      <Link href={'/login'}>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
      </Link>
      <Link href={'/register'}>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Register</button>
      </Link>
   
    </div>
      
    </>
  );
}
