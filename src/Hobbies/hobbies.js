import React from 'react';
import { 
  Card,
  CardBody,
  Container,
  Row,
  Col
} from 'reactstrap';
import './hobbies.css';

export default class Hobbies extends React.Component {
  
  render() {
    return (
      <section id="hobbies">
        <Container >
          <div className="text-center">
            <h2>Interests</h2>
          </div>
          <Row className="mt32 mb32">
            <Col md="3">
              <Card className="text-center hobby">
                <CardBody>
                  <i className="material-icons">fitness_center</i>
                  <h4>Gym</h4>
                </CardBody>
              </Card>
            </Col>
            <Col md="3">
              <Card className="text-center hobby">
                <CardBody>
                  <i className="material-icons">search</i>
                  <h4>Badminton</h4>
                </CardBody>
              </Card>
            </Col>
            <Col md="3">
              <Card className="text-center hobby">
                <CardBody>
                  <i className="material-icons">ac_unit</i>
                  <h4>Ice hockey</h4>
                </CardBody>
              </Card>
            </Col>
            <Col md="3">
              <Card className="text-center hobby">
                <CardBody>
                  <i className="material-icons">flight</i>
                  <h4>Trips</h4>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt32 mb32">
            <Col md="3">
              <Card className="text-center hobby">
                <CardBody>
                  <i className="material-icons">restaurant</i>
                  <h4>Cooking</h4>
                </CardBody>
              </Card>
            </Col>
            <Col md="3">
              <Card className="text-center hobby">
                <CardBody>
                  <i className="material-icons">build</i>
                  <h4>Computers</h4>
                </CardBody>
              </Card>
            </Col>
            <Col md="3">
              <Card className="text-center hobby">
                <CardBody>
                  <i className="material-icons">games</i>
                  <h4>Games</h4>
                </CardBody>
              </Card>
            </Col>
            <Col md="3">
              <Card className="text-center hobby">
                <CardBody>
                  <i className="material-icons">waves</i>
                  <h4>Fishing</h4>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
