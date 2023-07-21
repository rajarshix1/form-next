import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const RegisterPage = () => {
    const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(email.length<3 && password.length<6){
      toast.error('Password must be at least 6 characters long')
    }else{
      const registerdata = await axios.post('/api/user/register', {
        email:email, password: password
    })
    console.log(registerdata.data);
    if (registerdata.data.status==1) {
        toast.success('Registration successful')
        setTimeout(() => {
            router.push('/login')
        }, 2000);
    }else{
      toast.error(registerdata.data.message)
    }
    }
   
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input className='' type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input className='' type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"  type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
