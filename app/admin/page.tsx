'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminUpload() {
  const router = useRouter()
  const [adminPwd, setAdminPwd] = useState('')
  const [file, setFile] = useState(null)
  // 修改管理员密码为 bu4321
  const ADMIN_PASSWORD = 'bu4321'

  const loginAdmin = () => {
    if (adminPwd !== ADMIN_PASSWORD) return alert('管理员密码错误')
    localStorage.setItem('isAdmin', 'true')
    alert('管理员登录成功，可上传音乐')
  }

  const uploadMusic = (e) => {
    setFile(e.target.files[0])
    if (!localStorage.getItem('isAdmin')) {
      alert('请先登录管理员账号')
      return
    }
    alert(`已选中歌曲：${e.target.files[0].name}，后端存储功能需要额外云存储配置`)
  }

  return (
    <div style={{maxWidth:600,margin:'50px auto',padding:20}}>
      <h2>波斯斯音乐 - 管理员后台</h2>
      <div style={{margin:'20px 0'}}>
        <p>管理员登录</p>
        <input
          type="password"
          placeholder="输入管理员密码"
          value={adminPwd}
          onChange={(e)=>setAdminPwd(e.target.value)}
          style={{width:'100%',padding:10}}
        />
        <button onClick={loginAdmin} style={{marginTop:10,padding:'8px 20px'}}>登录后台</button>
      </div>

      <div style={{border:'1px solid #ccc',padding:20}}>
        <h3>上传音乐文件</h3>
        <input type="file" accept="audio/*" onChange={uploadMusic}/>
        {file && <p>待上传：{file.name}</p>}
      </div>
      <button onClick={()=>router.push('/')} style={{marginTop:20}}>返回播放器首页</button>
    </div>
  )
}
