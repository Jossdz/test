import { loginProcess, signupProcess } from './services/auth'
import useInput from './hooks/useInput'
import { useState } from 'react'

function App() {
  const [emailBind, email] = useInput()
  const [passwordBind, password] = useInput()
  const [user, setUser] = useState(null)

  const signup = async () => {
    const { data: user } = await signupProcess({ email, password })
    console.log(user)
  }
  const login = async () => {
    const { data: user } = await loginProcess({ email, password })
    setUser(user)
  }
  return (
    <div>
      <div>
        <input type='text' placeholder='email' {...emailBind} />
        <input type='password' placeholder='password' {...passwordBind} />
        <button onClick={signup}>Signup</button>
        <button onClick={login}>Login</button>
        <hr />
        <code>{JSON.stringify(user, null, 2)}</code>
      </div>
    </div>
  )
}

export default App
