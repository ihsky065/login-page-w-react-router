import { Container, Card, Row, Col } from "react-bootstrap";

export default function Dashboard () {
    return(
        <>
        <Container>
            <h1 className="my-3">Dashboard</h1>
            <Row>
                <Col md={4}>
                <Card className="mx-5">
                    <Card.Body>
                    <h4>Sigma School Analytics</h4>
                    <p>People who graduate who get job: 80%</p>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
}