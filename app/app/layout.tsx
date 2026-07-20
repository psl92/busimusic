import './globals.css'
export const metadata = {
  title: '波斯斯音乐',
  description: '在线音乐播放器',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
