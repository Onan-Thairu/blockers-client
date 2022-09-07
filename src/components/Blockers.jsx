import { useEffect, useState } from "react"
import Description from "./Description"
import Filter from "./Filter"

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
      <Filter/>
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
      <Description />
    </>
  )
}

export default Blockers