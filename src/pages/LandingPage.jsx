import styled from "styled-components"
import { Link } from "react-router-dom"

function LandingPage() {
  return (
    <>
      <Logo>
        <h4>Blockers</h4>
      </Logo>
      <Hero>
        Do you have blockers that you'd like to save for a quick reference in the 
        future? Or some other important code snippets you use often but can't seem
        to remember the exact commands?
        <p>
          We've got you. No need to keep going through search results again looking for a specific
          result. Signup with us and we'll help you save them conveniently.
        </p>
      </Hero>
      <Btn>
        <AddBtn to='/login'>LOG IN</AddBtn>
        <AddBtn to='/signup'>SIGN UP</AddBtn>
      </Btn>
      
    </>

  )
}

const Logo = styled.div`
  h4 {
    font-family: 'Dancing Script', cursive;
    font-weight: 900;
    font-size: 2.5em;
    letter-spacing: 0.3em;
    margin-top: 1rem;
  }
`

const Hero = styled.div`
  margin-top: 8%;
  font-size: 1.5em;
  letter-spacing: .1rem;
  font-weight: 400;
  background-color: #778472;
  padding: 1rem;
  border-radius: .8rem;
  color: #fff;
  font-family: 'Tiro Bangla', serif;

  p {
    background-color: #F4F4ED;
    margin-top: .4rem;
    color: #778472;
    padding: 1rem;
    border-radius: .8rem;
    font-family: 'Tiro Bangla', serif;
  }
`

const AddBtn = styled(Link)`
  text-decoration: none;
  background-color: #778472;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  padding: 1rem .8rem;
  letter-spacing: .1rem;
  border-radius: .5rem;

  &:hover {
    background-color: #F4F4ED;
    color: #778472;
  }
`

const Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  margin: 2rem auto;
  gap: 2rem;
`
export default LandingPage