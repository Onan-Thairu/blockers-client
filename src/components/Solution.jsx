import styled from "styled-components"

function Solution({solution}) {
  return (
    <Sol>
      <p>
        {solution}
      </p>
    </Sol>
  )
}

const Sol = styled.div`
  background-color: #F4F4ED;
  color: #2F2F30;
  margin: .5rem 1rem;
  padding: .3rem .4rem;
  border-radius: .5rem;
  font-size: .8rem;
  font-weight: 500;
`
export default Solution