import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const UserInfo = () => {

const navigate = useNavigate();

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('')

const handleSubmit = (e) => {
  e.preventDefault();
  navigate('/welcome', {state : {name : name, email : email}})
} 
  return (
    <>
    <h1>userInfo</h1>

    <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type = 'text' value={name} onChange={(e) => setName(e.target.value)} required/>
        </div>

        <div>
          <label>Email</label>
          <input type ='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>


        {/* password will take 8 characters (uppercase, lowercase and numbers) */}
        <div>
          <label>Password</label>
          <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} 
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
          required/>
        </div>

        <div>
          <button type='submit'>Submit</button> 
        </div>

      </form>

    </>
  )
}

export default UserInfo