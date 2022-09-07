import styled from "styled-components"

function Description() {
  return (
    <Container>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
      numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
      optio, eaque rerum!
      </p>
    </Container>
  )
}

const Container = styled.div`
  background-color: #778472;
  padding: 2rem;
  border-radius: .5rem;
  color: #fff;
  margin-top: 1.2rem;
  line-height: 1.6rem;
`

export default Description