import styled from "styled-components"

function CreateBlocker() {
  return (
    <Wrapper>
      <h4>CreateBlocker</h4>
      <Form>
        <label htmlFor="username">USERNAME</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="blocker">BLOCKER</label>
        <textarea name="blocker" id="blocker" cols="30" rows="10"></textarea>

        <label htmlFor="tags">TAG</label>
        <select id="tags" name="tags">
          <option value="react">React</option>
          <option value="ruby">Ruby</option>
          <option value="javascript">Javascript</option>
        </select>
      </Form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: blue;
  text-align: center;
`

const Form = styled.form`
  display: block;
`
export default CreateBlocker