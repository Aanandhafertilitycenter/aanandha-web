import React from 'react';
import { Avatar, Typography, Col, Row } from "antd";
import { useInView } from 'react-intersection-observer';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';

const { Title, Paragraph } = Typography;

const servicesData = [
  { title: "Fertility Enhancing Exercises", description: "Physical activities that support reproductive health." },
  { title: "Building Positive Mindset", description: "Mental well-being strategies to boost fertility outcomes." },
  { title: "Strategies to Increase Chances of Pregnancy", description: "Practical and medical guidance for conception." },
  { title: "Sexual Dysfunction", description: "Treatment for sexual issues impacting fertility." },
  { title: "Male Fertility Issues (Urologist Available)", description: "Specialist consultation and treatment for men." },
  { title: "Psychological Disorders", description: "Mental health support in fertility journeys." },
  { title: "Tubal Patency Tests - SSG", description: "Testing to ensure open fallopian tubes." },
  { title: "IUI", description: "Intrauterine insemination – simple and effective fertility solution." },
  { title: "IVF", description: "In-vitro fertilization for advanced fertility treatment." },
  { title: "ICSI", description: "Intracytoplasmic sperm injection for male infertility." },
  { title: "IMSI", description: "High-magnification sperm selection for improved success." },
  { title: "TESA", description: "Sperm retrieval directly from the testes." },
  { title: "PESA", description: "Percutaneous epididymal sperm aspiration for obstruction issues." },
  { title: "Micro TESE", description: "Microsurgical sperm extraction technique." },
  { title: "Advanced Sperm Selection Techniques", description: "Cutting-edge methods to choose best sperm." },
  { title: "High-End Embryology Lab", description: "State-of-the-art lab for embryo development." },
  { title: "Highly Experienced Embryologist and Andrologist", description: "Top professionals guiding your fertility care." },
];

const ServiceCard = ({ service, index }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  return (
    <Col xs={24} sm={24} md={12} lg={12} style={{ paddingBottom: 20 }} key={index}>
      <div
        ref={ref}
        className={`service-card ${inView ? 'animate' : ''}`}
        style={{
          ...styles.cover,
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'flex-start' : 'center',
          padding: isMobile ? '15px 20px' : '10px 30px',
        }}
      >
        <Avatar
          size={isMobile ? 60 : 80}
          style={{
            ...styles.avatar,
            position: 'relative',
            top: 0,
            left: 0,
            marginBottom: isMobile ? 10 : 0,
          }}
          icon={<span role="img" aria-label="icon">🌿</span>}
        />
        <div style={styles.cardContent}>
          <Title level={5} style={{ color: '#fff', marginBottom: 5 }}>
            {service.title}
          </Title>
          <Paragraph style={{ color: '#f0f0f0', fontSize: isMobile ? 13 : 14 }}>
            {service.description}
          </Paragraph>
        </div>
      </div>
    </Col>
  );
};

const Services = () => {
  return (
    <div style={styles.container}>
      <div style={{ paddingBottom: 20, textAlign: 'center' }}>
        <Title level={3}>Our Services</Title>
      </div>
      <Row gutter={[24, 24]}>
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </Row>
    </div>
  );
};

const styles = {
  container: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 15,
    paddingRight: 15,
    width: '100%',
    backgroundColor: '#f8f8f8',
  },
  cover: {
    minHeight: 120,
    borderRadius: 12,
    background: 'linear-gradient(90deg, rgba(50,146,144,0.8) 0%, rgba(50,146,144,1) 100%)',
    display: 'flex',
    gap: 15,
    opacity: 0,
    transform: 'translateY(30px)',
    transition: 'opacity 1s ease, transform 1s ease',
  },
  avatar: {
    border: '6px solid white',
    backgroundColor: '#329290',
  },
  cardContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
};

// Add animation rule
if (typeof window !== 'undefined') {
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(`
    .service-card.animate {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `, styleSheet.cssRules.length);
}

export default Services;
