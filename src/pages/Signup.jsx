import styled from "styled-components"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Signup() {
  let navigate = useNavigate()

  const handleSignup = (e) => {
    e.preventDefault()
    const form = e.target.elements

    const data = {
      username: form.username.value,
      email: form.email.value,
      password: form.password.value,
    }

    const onlogin = document.getElementById("onlogin")

    fetch(`https://blockers-server.herokuapp.com/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    .then((response) => {
      onlogin.textContent = "User created successfully. Click on login to log in to your account."
      if (response) {
        e.target.reset()
        navigate('/login')
      }
      // e.target.reset()
      // alert("New user created. You can now Log in.")
    })
  }

  return (
    <Wrapper>
      <Link to={"/"}>Home</Link>
      <h4>Signup</h4>
      <div>
        <Form onSubmit={ handleSignup }>
          <div>
            <label htmlFor="username">Enter Username</label>
            <input type="text" name="username" />
          </div>
          <div>
            <label htmlFor="email">Enter Email</label>
            <input type="email" name="email" />
          </div>
          <div>
            <label htmlFor="password">Enter Password</label>
            <input type="password" name="password" />
          </div>
          <button>SUBMIT</button>
          <p>Already have an account? <Link to={"/login"} id="login">Login</Link></p>
          <p id="onlogin"></p>
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
  #login {
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
export default Signup