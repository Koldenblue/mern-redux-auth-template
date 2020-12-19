import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AlertBox from './AlertBox';
import axios from 'axios';
import { Redirect } from "react-router-dom"
import { useHistory } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import WatercolorBackground from "./WatercolorBackground";
import LoginJumbotron from './LoginJumbotron';

function Signup({ loading, user }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();

  let handleSubmit = (event) => {
    event.preventDefault();

    if (username === '' || password === '') {
      setMessage("Neither username nor password may be blank.")
    }
    else {
      let user = {
        username: username,
        password: password
      }

      axios.post('api/users', user).then(data => {
        if (data.data === "That username already exists!") {
          setMessage(data.data);
        }
        else if (data.data === "Password must be at least 6 characters.") {
          setMessage(data.data);
        }
        else {
          // window.location.href = '/login';
          history.push('/login');
        }
      })
    }
  }

  let goToLogin = (event) => {
    event.preventDefault();
    // window.location.replace("/login")
    history.push('/login');
  }

  // sets alert box message back to blank whenever username or password fields are edited
  useEffect(() => {
    if (message !== "") {
      setMessage("");
    }
    // dependency should not include message, otherwise it would always be set to blank
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username, password])

  return ((user && !loading) ? <Redirect to="/home" /> :
    <>
      <LoginJumbotron />
      <WatercolorBackground />
      <Container className='loginSignupContainer'>

        <Form>
          <Form.Row>
            <Col></Col>
            <Col>
              <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  name='username'
                  onChange={(event) => setUsername(event.target.value)}
                  type="text"
                  placeholder=""
                />
              </Form.Group>
            </Col>
            <Col></Col>
          </Form.Row>


          <Form.Row>
            <Col></Col>
            <Col>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  placeholder="password"
                  name='password'
                />
              </Form.Group>
            </Col>
            <Col></Col>
          </Form.Row>

          <Form.Row>
            <Col></Col>
            <Col>
              <Button className='signupLoginBtns' onClick={handleSubmit} variant="danger" type="submit">
                Sign up
        </Button>
            </Col>
            <Col></Col>
          </Form.Row>

          <Form.Row>
            <Col></Col>
            <Col>
              <Button className='signupLoginBtns' onClick={goToLogin} variant="primary" type="submit">
                Go to Log In Form
        </Button>
            </Col>
            <Col></Col>
          </Form.Row>

          <Form.Row>
            <Col></Col>
            <Col>
              <AlertBox
                message={message}
              />
            </Col>
            <Col></Col>
          </Form.Row>

        </Form>
      </Container>
    </>
  )
}

export default Signup;