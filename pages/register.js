import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';

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
    const registerdata = await axios.post('/api/user/register', {
        email:email, password: password
    })
    console.log(registerdata.data);
    if (registerdata.data.status==1) {
        window.alert('Registration successful. Login now?')
        setTimeout(() => {
            router.push('/login')
        }, 1000);
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
