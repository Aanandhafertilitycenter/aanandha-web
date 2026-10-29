import { Col, Image, Row, Typography } from "antd";
import { useEffect, useState } from "react";

const doctor = require('../../assets/building.jpg');
const { Title, Paragraph } = Typography;

const AboutUs = () => {
  const [isInView, setIsInView] = useState(false);

useEffect(() => {
  const section = document.getElementById("about-us-section");

  if (!section) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsInView(entry.isIntersecting);
    },
    {
      threshold: 0.2, // Show effect when 20% visible
    }
  );

  observer.observe(section);

  return () => observer.unobserve(section);
}, []);


  return (
    <Row 
      id="about-us-section"
      style={{ 
        padding: '40px', 
        paddingTop: '20px', 
        paddingBottom: '20px',
        backgroundColor: '#fffff', 
        borderRadius: '10px',
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(40px)',
        transition: 'all 1s ease-out',
      }} 
      gutter={[32, 32]}
    >
      {/* Image Section */}
      <Col xs={24} sm={24} md={12} lg={8}>
        <Image 
          src={doctor} 
          preview={false} 
          style={{ 
            borderRadius: '10px', 
            boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)' 
          }} 
          alt="Doctor at Bloom Fertility Center" 
          height={240} 
          // width="100%" 
        />
      </Col>

      {/* Text Section */}
      <Col xs={24} sm={24} md={12} lg={16}>
        <div
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 1s ease-out',
          }}
        >
          <Title level={3} style={{ color: '#3f4b61', fontWeight: 600 }}>About Our Hospital</Title>
          <Paragraph style={{ color: '#666', lineHeight: 1.7, fontSize: '16px' }}>
            At Aanandha Fertility Center, we believe every family deserves the chance to grow. With over 15 years of experience and a compassionate, expert team, we’ve helped thousands of couples achieve their dreams of parenthood. Our mission is to provide ethical, effective, and affordable fertility care with utmost sensitivity and discretion.
          </Paragraph>
        </div>
      </Col>
    </Row>
  );
};

export default AboutUs;
