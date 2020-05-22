import React, {useState} from 'react'

import axiosWithAuth from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const history= useHistory()
 
  const [credentials, setCredentials] = useState({
    username:'',
    password:''
  })
 
const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    })
  }
    

const login = e => {
  e.preventDefault()

  axiosWithAuth().post('/api/login', credentials)
  .then(res => {
    // console.log(res)
    //res.data.payload
    localStorage.setItem('token', res.data.payload)
    history.push("/protected")
  })
  .catch(err => console.log(err))
  setCredentials({
    username:'',
    password:''
  })
}


    
        return (
            <div className='baseContent'>
              <form onSubmit={login}>
                <div className="Login">Log In</div>
                  
                <div className="logForm">
                  <div className='logGroup'>
                    <label htmlFor='username'>User Name</label>
                      <input 
                      className='logInput'
                      type="text"
                       name="username" 
                       value={credentials.username}
                       onChange={handleChange}
                       placeholder='username'/>
                  </div>
                  <div className='logGroup'>
                    <label htmlFor='password'>Password</label>
                      <input 
                      className='logInput'
                       type="text"
                       name="password"
                       value={credentials.password}
                       onChange={handleChange}
                       placeholder='password'/>
                  </div>
                  
                    <button  type='submit'  className='btn'>submit</button>
                  
                </div>
              </form>
           </div>
        
        )
};

export default Login;
