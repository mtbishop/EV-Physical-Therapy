import { Card } from 'react-bootstrap';
import DefaultUserPic from '../components/assets/img/default-image.jpg';

function EmployeeCard() {
  return (
    <>
      <div>
        <h3 id="providers">Providers</h3>
        <div className="empCard">
          <Card style={{ width: '18rem' }}>
            <Card.Img
              className="defaultUserPic"
              variant="top"
              style={{ height: '10rem', width: '10rem' }}
              src={DefaultUserPic}
            />
            <Card.Body>
              <Card.Title>Wyatt Banks</Card.Title>
              <Card.Text>Physical Theripist/Owner</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="empCard">
          <Card style={{ width: '18rem' }}>
            <Card.Img
              className="defaultUserPic"
              variant="top"
              style={{ height: '10rem', width: '10rem' }}
              src={DefaultUserPic}
            />
            <Card.Body>
              <Card.Title>Misty A Gardener</Card.Title>
              <Card.Text>PTA</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="empCard">
          <Card style={{ width: '18rem' }}>
            <Card.Img
              className="defaultUserPic"
              variant="top"
              style={{ height: '10rem', width: '10rem' }}
              src={DefaultUserPic}
            />
            <Card.Body>
              <Card.Title>Shawnise Banks</Card.Title>
              <Card.Text>LMT, BCTMB</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default EmployeeCard;
