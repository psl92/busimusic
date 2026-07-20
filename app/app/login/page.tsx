'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Login() {
  const router = useRouter()
  const [name, setName] = useState('')

  const login = () => {
    if(!name) return alert('请输入昵称')
    localStorage.setItem('username', name)
    localStorage.setItem('userType', 'user')
    router.push('/')
  }

  return (
    <div style={{maxWidth:'500px',margin:'60px auto',padding:'20px'}}>
      <h1>波斯斯音乐 - 登录</h1>
      <input
        placeholder="输入你的昵称"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        style={{width:'100%',padding:'10px',margin:'15px 0'}}
      />
      <button onClick={login} style={{padding:'10px 30px'}}>进入音乐大厅</button>
    </div>
  )
}
