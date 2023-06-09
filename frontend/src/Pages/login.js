import {React,useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [response, setResponse] = useState(null);
  
  
    const postData = (e) => {
      e.preventDefault();
      axios.post('http://127.0.0.1:8000/user/register/', {
        email,
        password
      })
      .then(res => {console.log('posting data', res);
      // setResponse(res.data);
    })
      .catch(err => console.error(err));
    };
    return (

      <div className='signUpPage'>
      <h1>Login In</h1>
      <form onSubmit={postData} className='signUp'>
  
        <div>
          <label>Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit"><Link to="/userDashboard">Login</Link></button>
      </form>
      </div>
    );
}

export default Login