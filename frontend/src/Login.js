import React from 'react'
import { Form, Button } from 'react-bootstrap'

export default function Register() {
    return (
        <>
            <h2>Login</h2>
            <Form>
                {/*email*/}
                <Form.Group controlId={"formBasicEmail"}>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type={"email"} />
                </Form.Group>

                {/*password*/}
                <Form.Group controlId={"formBasicPassword"}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type={"password"} placeholder={"Password"} />
                </Form.Group>

                {/*Submit button*/}
                <Button variant={"primary"} type={"submit"}>Submit</Button>
            </Form>
        </>
    )
}