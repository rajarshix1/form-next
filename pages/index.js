import { useEffect } from 'react';
import FormModal from '@/components/modal';
import Link from 'next/link';

export default function Home() {

  // useEffect(() => {
  // }, []);

  return (
   <>
    <div className='flex justify-center '>
      <Link href={'/login'}>
      Login
      </Link>
      <Link href={'/register'}>
      Register
      </Link>
   
    </div>
      
    </>
  );
}
