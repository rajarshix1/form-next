import { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

export default function Forms() {
const [userforms, setUserforms] = useState()
    const getForms = async () =>{
        const forms = await axios.get('/api/form')
        console.log(forms.data);
        setUserforms(forms.data)
    }
  useEffect(() => {
    getForms()
  }, []);

  return (
   <>
    <div  className='flex '>
      <ul>
      {userforms && userforms.map(e=>(
        <li>
            <Link href={`/forms/${e._id}`}>{e.title}</Link>
        </li>
      ))}
      </ul>
   
    </div>
      
    </>
  );
}
