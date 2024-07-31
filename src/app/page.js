import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Navbar';
import Side from './Side';
import Overview from './Overview';
import Serviceoffering from './Serviceoffering';
import Marketdomains from './Marketdomains';
import Team from './Team';
import Contactus from './Contactus'
import Footer from './Footer';


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Side/>
      <Overview/>
      <Serviceoffering/>
      <Marketdomains/>
      <Team/>
      <Contactus/>
      <Footer/>
    </div>
  );
}
