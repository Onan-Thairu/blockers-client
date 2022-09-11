import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {
  let navigate = useNavigate()

  fetch(`http://localhost:9292/logout`)
  .then((res) => {
    localStorage.clear()
    navigate("/login")
  })

  return (
    <div>You are being logged out.</div>
  )
}

export default Logout