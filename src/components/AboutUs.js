import '../components/assets/style/AboutUsStyle.css';
import BuildingPic from '../components/assets/img/gmaps_building_shot.PNG';

function AboutUs() {
  return (
    <>
      <h1>Enterprise Valley Physical Therapy</h1>
      <table>
        <tbody id="sloganText">
          <tr>
            <th>
              <h3>Providing Pure Quality Care </h3>
            </th>
            <th>
              <h3 id="fromPWC"> from People Who Care</h3>
            </th>
          </tr>
        </tbody>
      </table>
      <div>
        <img id="buildingPic" alt="building_picture" src={BuildingPic}></img>
      </div>
    </>
  );
}

export default AboutUs;
