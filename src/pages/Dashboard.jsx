import { Container, Card, Row, Col } from "react-bootstrap";

export default function Dashboard () {
    return(
        <>
        <Container>
            <h1 className="my-3">Dashboard</h1>
            <Row>
                <Col md={4}>
                <Card body className="mx-5">
                    <h4>Sigma School Analytics</h4>
                    <p>People who graduate who get job: 80%</p>
                </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
}