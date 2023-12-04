import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
  })
  const [err, setError] = useState(null)

  const navigate = useNavigate()

  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await axios.post('/api/auth/register', inputs)
      navigate('/login')
    } catch (err) {
      setError(err.response.data)
    }
  }

  return (
    <div className='auth'>
      <h1>注册</h1>
      <form>
        <input required type='text' placeholder='username' name='username' onChange={handleChange} />
        <input required type='email' placeholder='email' name='email' onChange={handleChange} />
        <input required type='password' placeholder='password' name='password' onChange={handleChange} />
        <button onClick={handleSubmit}>注册</button>
        {err && <p>{err}</p>}
        <span>
          已有账户? <Link to='/login'>点此登录</Link>
        </span>
      </form>
    </div>
  )
}

export default Register
