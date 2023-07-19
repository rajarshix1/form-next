import { useEffect } from 'react';
import Link from 'next/link';

export default function User() {

//   useEffect(() => {
//      const cookies = document.cookie;
//     console.log(cookies);
//   }, []);

  return (
   <>
    <div className='flex justify-evenly '>
      <Link href={'/create'}>
      Create
      </Link>
      <br/>
      <Link href={'/forms'}>
      Forms
      </Link>
   
    </div>
      
    </>
  );
}
