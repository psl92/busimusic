'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const [playCount, setPlayCount] = useState(0)
  const [username, setUsername] = useState('')
  const [userType, setUserType] = useState('')

  useEffect(() => {
    const name = localStorage.getItem('username')
    const type = localStorage.getItem('userType')
    if (!name || !type) {
      router.push('/login')
      return
    }
    setUsername(name)
    setUserType(type)
  }, [router])

  const handlePlay = () => setPlayCount(playCount + 1)

  return (
    <div style={{maxWidth:'700px',margin:'48px auto',padding:'28px'}}>
      <h1>busimusic 波斯斯音乐</h1>
      <p>当前用户: {username} ({userType === 'guest' ? '游客' : '注册用户'})</p>
      <p>全站播放次数: {playCount}</p>

      <div style={{margin:'30px 0'}}>
        <h3>歌曲播放器</h3>
        <audio controls onPlay={handlePlay}>
          <source src="" type="audio/mpeg"/>
          浏览器不支持音频
        
      </div>

      <p>功能: 在线播放音乐、歌词展示、播放量统计</p>
    </div>
  )
}
