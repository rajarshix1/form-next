import { useContext, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import FormModal from '@/components/modal';
import { AppContext } from '@/context/appcontext';
// import '@/styles/formio.css'

const DynamicForm = dynamic(() => import('@formio/react').then((module) => module.FormBuilder), {
  ssr: false,
});

// form={{
//   display: 'form',
//   components: [
//   {
//     "label": "Email",
//     "tableView": true,
//     "key": "email",
//     "type": "email",
//     "input": true
//   },
//   {
//     "label": "Password",
//     "tableView": false,
//     "key": "password",
//     "type": "password",
//     "input": true,
//     "protected": true
//   },
//   ]
//   }}
export default function Home() {
  const handleSubmit = async () =>{
    console.log('abc', formData);
  }
  const handleShow = async () =>{
    setShowModal(true)
  }
  const [isClient, setIsClient] = useState(false);
  const { showModal, setShowModal, formData, setFormData } = useContext(AppContext);


  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
   <>
   {showModal &&<FormModal />}
    <div>
      {isClient && (
        <DynamicForm form={[]} onChange={(schema) => setFormData(schema.components)} />
      )}
    </div>
    <div className='flex justify-center '>
    <button className='bg-red-500 text-2xl m-2  p-4 rounded-full	' onClick={handleShow}>Preview Form</button>
    <button className='bg-red-500 text-2xl m-2 p-4 rounded-full	' onClick={handleSubmit}>Save form</button>
    </div>
      
    </>
  );
}
