import { Container, Button, Form } from "react-bootstrap";
import { useState } from "react";

export default function Login() {
    const [emailInput, setEmail] = useState('');
    const [passInput, setPassword] = useState('');

    return(
        <>
        <Container>
            <h1 className="my-3">Login into your account</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={emailInput}
                    onChange={(e) => setEmail(e.target.value)}>
                    </Form.Control>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPass">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    type="password"
                    placeholder="Password"
                    value={passInput}
                    onChange={(e) => setPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Button variant="primary">Login</Button>
            </Form>
        </Container>
        </>
    )
}