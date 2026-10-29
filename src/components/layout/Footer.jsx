import {
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined,
  MobileOutlined,
} from '@ant-design/icons';
import { Col, Image, Row, Typography,Grid } from 'antd';

const icon = require('../../assets/aanandha-logo-removebg-icon.png');
const location = require('../../assets/location.png');
const textLogo = require('../../assets/logo-font.png');
const { Text, Paragraph } = Typography;
const {useBreakpoint} = Grid;

const Footer = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  return (
    <>
      {/* Footer Main Section */}
      <div style={styles.footer}>
        <Row gutter={[32, 32]} justify="space-between" align="top">
          {/* Logo and Contact */}
          <Col
            xs={24}
            sm={12}
            md={6}
            style={{
              display: 'flex',
              justifyContent: 'center', // center horizontally on all screens
              alignItems: 'center',
              height: '119px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <img src={icon} alt="logo" style={styles.logo} />
              {/* <Text strong style={styles.logoText}>Aanandha Fertility Clinic</Text> */}
               <Image
              src={textLogo}
              alt="logo"
              preview={false}
              style={{ maxWidth: '100%', height: 'auto',paddingTop:8 }}
            />
            </div>
          </Col>


          <Col
            xs={24}
            sm={12}
            md={4}
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              // gap: 8,
              textAlign: 'center',
              alignSelf:'center'
            }}
          >
            <div style={{display:'flex'}}>
              <MobileOutlined style={{ fontSize: 16, color: '#329290', marginRight: 8 }} />
              <Text>90438 27694</Text>
            </div>
            <div style={{display:'flex'}}>
              <MobileOutlined style={{ fontSize: 16, color: '#329290', marginRight: 8 }} />
              <Text>63854 03427</Text>
            </div>
          </Col>

          {/* Social Media Icons */}
          <Col
            xs={24}
            sm={12}
            md={4}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div style={styles.socialWrapper}>
              <div style={styles.socialIcons}>
                <a href="#" aria-label="Twitter">
                  <TwitterOutlined style={styles.footerIcon} />
                </a>
                <a href="#" aria-label="Facebook">
                  <FacebookOutlined style={styles.footerIcon} />
                </a>
                <a href="#" aria-label="Instagram">
                  <InstagramOutlined style={styles.footerIcon} />
                </a>
              </div>
            </div>
          </Col>

          {/* Address */}
          <Col
            xs={24}
            sm={24}
            md={6}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              alignSelf:'center',
            }}
          >
            <Paragraph style={{ color: '#666', lineHeight: 1.7, fontSize: '16px', margin: 0 }}>
              Ward-D, Block No.50,Jewellery Upstairs, Opp. New Bus Stand, <br />
              Salem-4, Tamil Nadu 636004
            </Paragraph>
          </Col>

          {/* Map View */}
          <Col
            xs={24}
            sm={24}
            md={4}
            style={{
              display: 'flex',
              justifyContent: 'center', // center horizontally on all screens
              alignItems: 'center',
              width: '100%',
              height: '100px',
              padding: 20,
              position: 'relative', // needed for absolute child div
            }}
          >
          <div
            style={{
              position: isMobile ? 'relative' : 'absolute',
              bottom: isMobile ? 'auto' : -70,
              right: isMobile ? 'auto' : 10,
              maxWidth: 200,
              width: '100%',
              margin: isMobile ? '0 auto' : '0',
              paddingLeft:5
            }}
          >

              <a
                href="https://maps.app.goo.gl/vuN2zppUrUfpDCrV6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={location}
                  alt="Map preview"
                  style={{
                    width: '100%',
                    borderRadius: 8,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    cursor: 'pointer',
                  }}
                />
              </a>
            </div>
          </Col>
        </Row>
      </div>

      {/* Footer Bottom Bar */}
      <div style={styles.bottomBar}>
        <Text style={{ fontSize: 14,display:'flex',flexWrap:'wrap',justifyContent:'center',paddingBottom:20,paddingTop:20 }}>
          © 2025 Aanandha Fertility Clinic. All Rights Reserved.
        </Text>
      </div>
    </>
  );
};

const styles = {
  footer: {
    backgroundColor: '#fef6f9', // Soft light pink
    color: '#333',
    paddingBottom: 0,
    paddingLeft: 0,
  },
  bottomBar: {
    backgroundColor: '#f8f8f8',
    textAlign: 'center',
    padding: '0px 0',
    height: 5,
    borderTop: '1px solid #eee',
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '10px',
    justifyContent: 'center',
    height: '100%',
  },
  logo: {
    height: 40,
    width: 40,
    borderRadius: 8,
    backgroundColor: '#329290',
    padding: 6,
  },
  logoText: {
    fontSize: 18,
    color: '#329290',
    paddingLeft: 8,
  },
  contactInfo: {
    marginTop: 10,
    display: 'flex',
    alignItems: 'center',
  },
  socialWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 10,
  },
  socialIcons: {
    display: 'flex',
    gap: '20px',
  },
  footerIcon: {
    fontSize: 24,
    color: '#32CD32',
    transition: 'color 0.3s',
    cursor: 'pointer',
  },
};

export default Footer;
