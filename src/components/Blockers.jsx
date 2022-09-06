import { useEffect, useState } from "react"

function Blockers() {

  // const [ blockers, setBlockers ] = useState()

  // useEffect(() => {
  //   getBlockers()
  // }, [])

  // const getBlockers = async () => {
  //   const api = await fetch(`http://localhost:9292/blockers`)
  //   const data = await api.json()
  //   console.log(data)
  //   setBlockers(data)
  // }

  return (
    <>
      <p>Blockers list</p>
      
        {/* {
          blockers.map((blocker) => {
            return (
              <div>
                <p>{ blocker.description }</p>
                <p>{ blocker.solution }</p>
              </div>
            )
          })
        } */}
      
    </>
  )
}

export default Blockers