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

  const handleFilter = (selectedValue) => {
    if (selectedValue === "all") {
      getBlockers()
    } else {
      fetch(`http://localhost:9292/blockers/${selectedValue}`)
      .then(response => response.json())
      .then(data => {
        setBlockers(data)
      })
    }

  }

  return (
    <>
      <Filter handleFilter={ handleFilter }/>

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