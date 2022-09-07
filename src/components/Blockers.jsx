import { useEffect, useState } from "react"
import Description from "./Description"
import Filter from "./Filter"

function Blockers() {

  const [ blockers, setBlockers ] = useState([])

  useEffect(() => {
    getBlockers()
  }, [])

  const getBlockers = async () => {
    const api = await fetch(`http://localhost:9292/blockers`)
    const data = await api.json()
    setBlockers(data)
  }

  return (
    <>
      <Filter/>

      {
        blockers.map((blocker) => {
          return (
            <Description key={ blocker.id } blocker={ blocker } />
          )
        })
      }

    </>
  )
}

export default Blockers