import styled from "styled-components"

function Solution() {
  return (
    <Sol>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua.
      </p>
    </Sol>
  )
}

const Sol = styled.div`
  background-color: #F4F4ED;
  color: #2F2F30;
  margin: .5rem 1rem;
  padding: .3rem;
  border-radius: .5rem;
  font-size: .8rem;
  font-weight: 500;
`
export default Solution