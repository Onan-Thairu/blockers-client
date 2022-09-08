import styled from "styled-components"

function CreateBlocker() {
  return (
    <Wrapper>
      <h4>Create Blocker</h4>
      <div>
        <Form>
          <div>
            <label htmlFor="username">USERNAME</label>
            <input type="text" id="username" name="username" />
          </div>
          <div>
            <label htmlFor="blocker">BLOCKER</label>
            <textarea name="blocker" id="blocker" cols="30" rows="5"></textarea>
          </div>
          <div>
            <label htmlFor="tags">TAG</label>
            <select id="tags" name="tags">
              <option value="react">React</option>
              <option value="ruby">Ruby</option>
              <option value="javascript">Javascript</option>
            </select>
          </div>
          <div>
            <label htmlFor="solution">SOLUTION</label>
            <textarea name="solution" id="solution" cols="30" rows="5"></textarea>
          </div>
          <button>SUBMIT</button>
        </Form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  h4 {
    margin: 1rem .2rem;
    font-weight: 900;
  }
`

const Form = styled.form`
  background-color: #F4F4ED;
  line-height: 2;
  width: 30em;
  margin: 0 auto;
  padding: 1rem;
  border-radius: .5rem;

  div {
    margin-top: .2rem;
  }

  label {
    color: #778472;
    font-weight: 900;
    margin: .5rem;
  }
  input, textarea {
    padding: 0.4rem;
    width: 90%;
  }

  button {
    background-color: #778472;
    border: none;
    border-radius: .5rem;
    color: #fff;
    margin-top: 2rem;
    padding: 0.5rem 1rem;
    font-weight: 900;
  }

  box-shadow: 0px 1px 5px 2px rgba(194,194,194,0.75);
  -webkit-box-shadow: 0px 1px 5px 2px rgba(194,194,194,0.75);
  -moz-box-shadow: 0px 1px 5px 2px rgba(194,194,194,0.75);

`
export default CreateBlocker