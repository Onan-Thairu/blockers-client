import styled from "styled-components"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function CreateBlocker() {
  let navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target.elements
    const currentUser = localStorage.getItem("currentUser")

    const data = {
      description: form.description.value,
      tag: form.tags.value,
      solution: form.solution.value,
      user_id: currentUser
    }

    fetch(`https://blockers-server.herokuapp.com/blockers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then((response) => {
      if (response.status === 200) {
        navigate("/blockers-list")
      }
    })
  }

  return (
    <Wrapper>
      <Link to={"/blockers-list"}>Home</Link>
      <h4>Create Blocker</h4>
      <div>
        <Form onSubmit={ handleSubmit }>
          <div>
            <label htmlFor="description">BLOCKER</label>
            <textarea name="description" id="description" cols="30" rows="5" required ></textarea>
          </div>
          <div>
            <label htmlFor="tags">TAG</label>
            <select id="tags" name="tags" required >
              <option value=""></option>
              <option value="react">React</option>
              <option value="ruby">Ruby</option>
              <option value="javascript">Javascript</option>
            </select>
          </div>
          <div>
            <label htmlFor="solution">SOLUTION</label>
            <textarea name="solution" id="solution" cols="30" rows="5" required ></textarea>
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
  a {
    display: flex;
    width: 5rem;
    margin: 1rem 0;
    text-decoration: none;
    font-weight: 600;
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

    &:hover {
      background-color: #A8C79C;
    }
  }

  box-shadow: 0px 1px 5px 2px rgba(194,194,194,0.75);
  -webkit-box-shadow: 0px 1px 5px 2px rgba(194,194,194,0.75);
  -moz-box-shadow: 0px 1px 5px 2px rgba(194,194,194,0.75);

`
export default CreateBlocker