import Blockers from "../components/Blockers"
import styled from "styled-components"
import { Link } from "react-router-dom"

function Home() {
  return (
    <>
      <div>
        <Header>
          <h4>Blockers</h4>
          <AddBtn to='/create-blocker'>ADD BLOCKER</AddBtn>
        </Header>
        {
          localStorage.getItem('currentUser').length = 1 ? <a href="/logout">Logout</a> : <a href="/signup">Signup</a>
        }
        <Blockers />
      </div>
    </>
  )
}

const Header = styled.div`
  display: flex;
  gap: 50%;
  flex-wrap: wrap;
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: .8rem;
  text-align: center;

  h4 {
    font-family: 'Dancing Script', cursive;
    font-weight: 900;
    font-size: 1.5em;
    letter-spacing: 0.3em;
  }

`
const AddBtn = styled(Link)`
  text-decoration: none;
  background-color: #778472;
  color: #fff;
  font-size: 0.7rem;
  font-weight: 600;
  padding: .7rem .8rem;
  letter-spacing: .1rem;
  border-radius: .5rem;
`

export default Home