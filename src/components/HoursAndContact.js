import { Card } from 'react-bootstrap';
import '../style/HoursAndContact.css';

function HoursandContact() {
  return (
    <>
      <div id="hoursAndContact">
        <h4>Address</h4>
        <Card>
          <Card.Body className="hAndC">660 E Main St</Card.Body>
          <Card.Body className="hAndC">Enterprise, UT 84725</Card.Body>
          <Card.Body className="hAndC">Phone: 435-878-2722</Card.Body>
          <Card.Body className="hAndC">Fax: 435-878-2723</Card.Body>
          <Card.Body className="hAndCa">
            Email: wb.enterprisept@gmail.com
          </Card.Body>
        </Card>

        <h4>Hours of Operation</h4>
        <Card>
          <div id="hOOContents">
            <Card.Body className="dayOpen">Monday: 8:00am - 5:00pm</Card.Body>
            <Card.Body className="dayOpen">Tuesday: 8:00am - 5:00pm</Card.Body>
            <Card.Body className="dayOpen">
              Wednesday: 8:00am - 5:00pm
            </Card.Body>
            <Card.Body className="dayOpen">Thursday: 8:00am - 5:00pm</Card.Body>
            <Card.Body className="dayOpen">Friday: 8:00am - 5:00pm</Card.Body>
            <Card.Body className="dayClosed">Saturday: Closed</Card.Body>
            <Card.Body className="dayClosed">Sunday: Closed</Card.Body>
          </div>
        </Card>
      </div>
    </>
  );
}

export default HoursandContact;
