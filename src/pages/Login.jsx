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

            </Form>
        </Container>
        </>
    )
}