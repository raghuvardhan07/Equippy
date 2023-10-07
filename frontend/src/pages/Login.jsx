import { useRef } from 'react';
import Cookie from 'js-cookie'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const emailRef = useRef()
  const navigate = useNavigate()
  const passRef = useRef()
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const {data} = await axios.post('http://localhost:8000/login',{
      email:emailRef.current.value,
      password:passRef.current.value
    })
    console.log(data);
    if(data.success){
      navigate('/')
      Cookie.set("token", data.authtoken)
    }
    else{
      alert(data.message)
    }
  }
  return (
    <div className='body'>
    <div className="container">
      <h2 className='title'>Equippy</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" placeholder="Email" ref={emailRef}/>
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" ref={passRef}/>
        </div>
        <div className="form-group">
          <button onSubmit={handleSubmit}>Login</button>
        </div>
        <p>Dont have an account <Link to='/register'>Register</Link></p>
      </form>
    </div>
    </div>
  );
};

export default Login;
