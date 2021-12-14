import '../components/assets/style/AdminComp.css';
import Header from './Header';
import AboutUs from './AboutUs';
import HoursAndContact from './HoursAndContact';
import EmployeeCard from './EmployeeCard';
import GMaps from './GMaps';
import Footer from './Footer';

function AdminComp() {
  return (
    <>
      <Header />
      <div id="jumbotron1">
        <AboutUs />
        <HoursAndContact />
        <EmployeeCard />
        <GMaps />
      </div>
      <Footer />
    </>
  );
}

export default AdminComp;
