import Banner from "../banner/Banner";
import AboutUs from "../aboutUs/AboutUs";
import Treatments from "../teatments/Treatments";
import Footer from "../layout/Footer";
import BookAppoinmnet from "../bookappoinment/BookAppoinmnet";
import AppointmentCard from "../appointment-card/AppointmentCard";
import FertilityCareCard from "../fertilitycare/FertilityCareCard";
import AboutConsultantSide from "../our-consultant/OurConsultant";
import OurMotto from "../our-motto/OurMotto";
import VideoBanner from "../banner/VideoBanner";
import WhyAanandha from "../why-aanandha/WhyAanandha";
import GoogleReviewButton from "../GoogleReviewButton";
import { Grid } from 'antd';
const { useBreakpoint } = Grid;

const Home = () => {
  const screen = useBreakpoint();
  const mobile = !screen.md
  return (
    <div style={{ display: 'flex', flexDirection: 'column',overflow:'auto', padding: mobile ? 2:30,paddingTop:0,scrollbarWidth:'none' }}>
      {/* <Banner /> */}
          <div id="home" style={{ padding: 20, paddingLeft: 15, paddingRight: 15, margin: 0, backgroundColor: 'white' }}>
            <VideoBanner />
          </div>
          <div id="about_us" style={{ padding: 20, paddingLeft: 15, paddingRight: 15, margin: 0, backgroundColor: 'white' }}>
            <AboutUs />
          </div>
          
          <div id="treatments" style={{ margin: 0, backgroundColor: 'white' }}>
            <Treatments />
          </div>
          
          <div id="consultant" style={{ padding: 20, paddingLeft: 15, paddingRight: 15, margin: 0, backgroundColor: 'white' }}>
            <AboutConsultantSide />
          </div>
          
          <div id="motto" style={{ padding: 20, paddingLeft: 15, paddingRight: 15, margin: 0, backgroundColor: 'white' }}>
            <OurMotto />
          </div>
          
          <div id="fertilitycare" style={{ padding: 20, paddingLeft: 15, paddingRight: 15, margin: 0, backgroundColor: 'white' }}>
            <FertilityCareCard />
          </div>

          <div id="whyAanandha" style={{ padding: 20, paddingLeft: 15, paddingRight: 15, margin: 0, backgroundColor: 'white' }}>
            <WhyAanandha />
          </div>
          
          <div id="book_appointment" style={{ margin: 0, background: 'rgba(0,255,0,0.08)' }}>
            <BookAppoinmnet />
          </div>
          
          <div id="appointment_card" style={{ margin: 0, background: 'rgba(0,255,0,0.08)' }}>
            <AppointmentCard />
          </div>
          
          <div id="footer">
            <Footer />
          </div>
          <div>
             <GoogleReviewButton />
          </div>
    </div>
  );
};


export default Home;