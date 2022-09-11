import styled from "styled-components"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login() {
  let navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    const form = e.target.elements

    const data = {
      email: form.email.value,
      password: form.password.value,
    }

    fetch(`http://localhost:9292/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem("currentUser", data.user_id)
      navigate("/blockers-list")
    })
  }

  return (
    <Wrapper>
      <Link to={"/blockers-list"}>Home</Link>
      <h4>Login</h4>
      <div>
        <Form onSubmit={ handleLogin }>
          <div>
            <label htmlFor="email">Enter Email</label>
            <input type="email" name="email" />
          </div>
          <div>
            <label htmlFor="password">Enter Password</label>
            <input type="password" name="password" />
          </div>
          <button>SUBMIT</button>
          <p>Don't have an account? <Link to={"/signup"} id="signup" >Signup</Link></p>
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
  #signup {
    display: inline-block;
    text-decoration: underline;
    color: #005b96;
    font-size: .8rem;
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
  input, {
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
export default Login