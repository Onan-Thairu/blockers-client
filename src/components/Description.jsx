import styled from "styled-components"
import Solution from "./Solution"
import { AiOutlineDelete } from 'react-icons/ai'

function Description({blocker}) {
  return (
    <>
      <Container>
        <h2><AiOutlineDelete /></h2>
        <p>{blocker.description}</p>
        <Solution solution={ blocker.solution} />
      </Container>
    </>
  )
}

const Container = styled.div`
  background-color: #778472;
  padding: .5rem;
  border-radius: .5rem;
  color: #fff;
  margin-bottom: 1.2rem;
  line-height: 1.6rem;
  font-size: .9rem;

  h6 {
    margin: 0;
    padding: 0;
    color: black;
  }

  h2 {
    display: flex;
    float: right;
  }

  box-shadow: 3px 4px 5px -3px rgba(107,101,101,0.75);
  -webkit-box-shadow: 3px 4px 5px -3px rgba(107,101,101,0.75);
  -moz-box-shadow: 3px 4px 5px -3px rgba(107,101,101,0.75);

`

export default Description