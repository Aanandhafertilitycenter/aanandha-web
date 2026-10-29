import { Col, Row, Typography, Button, Drawer, Image } from "antd";
import { useEffect, useState } from "react";
import { MenuOutlined, PhoneOutlined } from '@ant-design/icons';
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";

const icon = require('../../assets/aanandha-logo-removebg-icon.png');
const textLogo = require('../../assets/logo-font.png');
const { Text } = Typography;

const Header = () => {
  const [menus, setMenu] = useState([]);
  const [activeMenu, setActiveMenu] = useState('home');
  const [drawerVisible, setDrawerVisible] = useState(false);
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  useEffect(() => {
    setMenu([
      { dataValue: 'home', displayValue: 'Home' },
      { dataValue: 'about_us', displayValue: 'About Us' },
      { dataValue: 'treatments', displayValue: 'Treatments' },
      { dataValue: 'consultant', displayValue: 'Consultant' },
      { dataValue: 'motto', displayValue: 'Our Motto' },
      { dataValue: 'fertilitycare', displayValue: 'Fertility Care' },
      { dataValue: 'whyAanandha', displayValue: 'Why Aanandha' },
    ]);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActiveMenu(id);
    setDrawerVisible(false);
  };

  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 1200 }}>


      {/* 🔹 Main Header */}
      <Row style={Styles.container} align="middle" justify="space-between" wrap>        
        {/* Logo Section */}
        <Col xs={22} md={7}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Button
              icon={<img src={icon} alt="logo" style={{ height: '100%', width: '100%' }} />}
              style={{ backgroundColor: '#329290', height: 40, width: 40, padding: 8 }}
            />
            <div style={{ width: isMobile ? '70%' : '80%' }}>
              <Image
                src={textLogo}
                alt="logo"
                preview={false}
                style={{ maxWidth: '100%', height: 'auto',paddingTop:8 }}
              />
            </div>
          </div>
        </Col>

        {/* Desktop Menu */}
        {!isMobile && (
          <Col md={12}>
            <div style={{ display: 'flex', gap: 24, justifyContent: 'flex-start',overflow:'auto',scrollbarWidth: 'none' }}>
              {menus.map((item) => (
                <div
                  key={item.dataValue}
                  onClick={() => scrollToSection(item.dataValue)}
                  style={{
                    cursor: 'pointer',
                    fontWeight: activeMenu === item.dataValue ? 'bold' : 'normal',
                    color: activeMenu === item.dataValue ? '#329290' : '#333',
                    borderBottom: activeMenu === item.dataValue ? '2px solid #329290' : '2px solid transparent',
                    transition: 'all 0.3s',
                    lineHeight: '60px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.displayValue}
                </div>
              ))}
            </div>
          </Col>
        )}

        {/* Desktop Button */}
        {!isMobile && (
          <Col md={5} style={{ textAlign: 'right' }}>
            <Button
              type="primary"
              style={Styles.bookButton}
              onClick={() => scrollToSection('book_appointment')}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Book an Appointment
            </Button>
          </Col>
        )}

        {/* Mobile Menu Icon */}
        {isMobile && (
          <Col xs={2} style={{ textAlign: 'right' }}>
            <MenuOutlined onClick={() => setDrawerVisible(true)} style={{ fontSize: 22, color: '#329290' }} />
          </Col>
        )}

        {/* Drawer for Mobile */}
        <Drawer
          title="Menu"
          placement="right"
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
        >
          {menus.map((item) => (
            <div
              key={item.dataValue}
              onClick={() => scrollToSection(item.dataValue)}
              style={{
                marginBottom: 15,
                fontWeight: activeMenu === item.dataValue ? 'bold' : 'normal',
                color: activeMenu === item.dataValue ? '#329290' : '#333',
                cursor: 'pointer',
              }}
            >
              {item.displayValue}
            </div>
          ))}
          <Button
            type="primary"
            block
            style={{ marginTop: 20 }}
            onClick={() => scrollToSection('book_appointment')}
          >
            Book an Appointment
          </Button>
        </Drawer>
      </Row>
      {/* 🔹 Top Notification Bar */}
      <div style={Styles.topBar}>
        <PhoneOutlined style={{ color: '#fff', marginRight: 8 }} />
        <Text style={{ color: '#fff', fontSize: 14 }}>
          Call us: <strong>+91 90438 27694</strong> &nbsp; | &nbsp; <strong>+91 63854 03427</strong>
        </Text>
      </div>
    </div>
  );
};

const Styles = {
  topBar: {
    backgroundColor: '#329290',
    color: '#fff',
    padding: '5px 15px',
    display: 'flex',
    alignItems: 'center',
    fontSize: 14,
    height: 35,
  },
  container: {
    height: 'auto',
    minHeight: '70px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    padding: '10px 15px',
    position: 'relative',
    zIndex: 1000,
  },
  bookButton: {
    background: 'linear-gradient(90deg, #329290 0%, #1e88e5 100%)',
    border: 'none',
    color: '#fff',
    padding: '8px 20px',
    borderRadius: '8px',
    transition: 'all 0.3s',
  },
};

export default Header;
