import React, { useContext, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

const Login = () => {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  })
  const [err, setError] = useState(null)

  const navigate = useNavigate()

  const { currentUser, login } = useContext(AuthContext)
  console.log('currentUser: ', currentUser)

  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    console.log('handleSubmit!', inputs)
    try {
      // await axios.post('api/auth/login',inputs)
      await login(inputs)
      navigate('/')
    } catch (err) {
      setError(err.response.data)
    }
  }
  return (
    <div className='auth'>
      <h1>登录</h1>
      <form>
        <input required type='text' placeholder='用户名' name='username' onChange={handleChange} />
        <input required type='password' placeholder='密码' name='password' onChange={handleChange} />
        <button onClick={handleSubmit}>登录</button>
        {err && <p>{err}</p>}
        <span>
          您还没有账户? <Link to='/register'>点此注册</Link>
        </span>
      </form>
    </div>
  )
}

export default Login
