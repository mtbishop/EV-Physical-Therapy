import '../style/AboutUsStyle.css';
import BuildingPic from '../img/';

function AboutUs() {
  return (
    <>
      <h1>Enterprise Valley Physical Therapy</h1>
      <div id="sloganText">
        <tr>
          <th>
            <h3>Providing Pure Quality Care </h3>
          </th>
          <th>
            <h3 id="fromPWC"> from People Who Care</h3>
          </th>
        </tr>
      </div>
      <div>
        <img alt="building_picture" src="../img/gmaps building shot.png"></img>
      </div>
    </>
  );
}

export default AboutUs;
