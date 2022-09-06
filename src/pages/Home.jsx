import Blockers from "../components/Blockers"
import styled from "styled-components"
import { Link } from "react-router-dom"

function Home() {
  return (
    <>
      <div>
        <Header>
          <h4>Blockers</h4>
          <Add to='/'>ADD BLOCKER</Add>
        </Header>
        <Blockers />
      </div>
    </>
  )
}

const Header = styled.div`
  display: flex;
  gap: 60%;
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 2rem;
  text-align: center;

  h4 {
    font-family: 'Dancing Script', cursive;
    font-weight: 900;
    font-size: 1.5em;
    letter-spacing: 0.3em;
  }

`
const Add = styled(Link)`
  text-decoration: none;
  background-color: #778472;
  color: #fff;
  font-size: 0.7em;
  font-weight: 600;
  padding: .8rem 1rem;
  letter-spacing: .1rem;
  border-radius: .5rem;
`

export default Home