import { useState, useEffect, useRef } from "react"
export default function App() {
  const [mouseX, setMouseX] = useState("")
  const [mouseY, setMouseY] = useState("")

  useEffect(() => {
    const handleMouse = (e) => {
      setMouseX(e.clientX)
      console.log(e)
      setMouseY(e.clientY)
    }
    setTimeout(() => {
      window.addEventListener("mousemove", handleMouse)
    }, 3000)
  })

  return (
    <div style={{ padding: "40px" }}>
      <h1>{mouseX}</h1>
      <h1>{mouseY}</h1>
    </div>
  )
}
