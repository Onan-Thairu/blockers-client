import { useEffect, useState } from "react"
import Description from "./Description"
import Filter from "./Filter"

function Blockers() {

  const [ blockers, setBlockers ] = useState([])

  useEffect(() => {
    getBlockers()
  }, [])

  const getBlockers = async () => {
    const currentUser = localStorage.getItem("currentUser")
    const api = await fetch(`http://localhost:9292/blockers-list/${currentUser}`)
    const data = await api.json()
    setBlockers(data)
  }

  const handleFilter = (selectedTag) => {
    const currentUser = localStorage.getItem("currentUser")
    if (selectedTag === "all") {
      getBlockers()
    } else {
      fetch(`http://localhost:9292/blockers/${currentUser}/${selectedTag}`)
      .then(response => response.json())
      .then(data => {
        setBlockers(data)
      })
    }

  }

  const handleDelete = (id) => {
    const currentUser = localStorage.getItem("currentUser")
    fetch(`http://localhost:9292/blockers/${currentUser}/${id}`, {
      method: "DELETE",
    })
    .then((response) => response.json())
    .then(() => {
      getBlockers()
    })
  }

  return (
    <>
      <Filter handleFilter={ handleFilter }/>

      {
        blockers.map((blocker) => {
          return (
            <Description key={ blocker.id } blocker={ blocker } handleDelete={ handleDelete } />
          )
        })
      }

    </>
  )
}

export default Blockers