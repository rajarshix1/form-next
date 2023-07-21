import { useContext, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import FormModal from '@/components/modal';
import { AppContext } from '@/context/appcontext';
import 'bootstrap/dist/css/bootstrap.css';
import 'formiojs/dist/formio.full.min.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const DynamicForm = dynamic(() => import('@formio/react').then((module) => module.FormBuilder), {
  ssr: false,
});

export default function CreateForm() {
  const handleSubmit = async () =>{
    if(formName.length<1){
      toast.error('Form name should not be blank')
    }
    else{
      console.log('abc', formData);
      const data = await axios.post('/api/form/create',{
        title: formName,
        components: formData})
        console.log(data);
        if(data.data.status==0){
          toast.error(data.data.message)
        }else{
          toast.success(data.data.message)
        }
    }
  }
  const handleShow = async () =>{
    setShowModal(true)
  }
  const [isClient, setIsClient] = useState(false);
  const [formName, setFormName] = useState('');
  const { showModal, setShowModal, formData, setFormData } = useContext(AppContext);


  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
   <>
   <h1> CREATE YOUR FORM</h1>
   <div className='flex'>
   <h3>Name of your form: </h3> <input className='bg-gray-300' type="text" value={formName} onChange={(e)=>setFormName(e.target.value)} />
   </div>

   {showModal &&<FormModal />}
    <div>
      {isClient && (
        <DynamicForm form={[]} onChange={(schema) => setFormData(schema.components)} />
      )}
    </div>
    <div className='flex justify-center '>
    <button className='bg-red-500 text-xl m-2  p-2 rounded-full	' onClick={handleShow}>Preview Form</button>
    <button className='bg-red-500 text-xl m-2 p-2 rounded-full	' onClick={handleSubmit}>Save form</button>
    </div>
      
    </>
  );
}
