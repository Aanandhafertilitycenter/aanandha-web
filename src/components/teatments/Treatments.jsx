import React from 'react';
import { Avatar, Typography, Col, Row } from "antd";
import { useInView } from 'react-intersection-observer';

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
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
           <Col xs={24} sm={24} md={12} lg={12} style={{ paddingBottom: 15 }} key={index}>
                 <div
                   ref={ref}
                   className={`service-card ${inView ? 'animate' : ''}`}
                   style={{
                     ...styles.cover,
                     background: 'linear-gradient(90deg, rgba(50,146,144,0.8) 0%, rgba(50,146,144,1) 100%)'
                   }}
                 >
                 <Avatar
                   size={80}
                   style={{
                     ...styles.avatar,
                     position: window.innerWidth < 768 ? 'absolute' : 'absolute',
                     top: window.innerWidth < 768 ? 0 : -10,
                     left: window.innerWidth < 768 ? 0 : -10,
                     marginBottom: window.innerWidth < 768 ? 15 : 0,
                   }}
                   icon={<span role="img" aria-label="icon">🌿</span>}
                 />
      
              <div style={styles.cardContent}>
                <Title level={4} style={{ color: '#fff' }}>
                  {service.title}
                </Title>
                <Paragraph style={{ color: '#f0f0f0' }}>
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
      <div style={{ paddingBottom: 20 }}>
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
    paddingTop: 15,
    paddingBottom: 15,
    width: '100%',
    backgroundColor: '#f8f8f8',
  },
cover: {
  height: 'auto', // allow content height to grow on small screens
  borderTopRightRadius: 10,
  borderBottomRightRadius: 10,
  borderTopLeftRadius: 50,
  borderBottomLeftRadius: 50,
  position: 'relative',
  padding: '20px 15px', // better padding for small screens
  display: 'flex',
  alignItems: 'center',
  opacity: 0,
  transform: 'translateY(30px)',
  transition: 'opacity 1s ease, transform 1s ease',
  flexWrap: 'wrap', // ensure content wraps if needed
},
  avatar: {
    position: 'absolute',
    top: -10,
    left: -10,
    border: '8px solid white',
    backgroundColor: '#329290',
    padding: 10,
  },
cardContent: {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
  paddingLeft: 100, // Leave space for avatar in desktop
},
};

const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  .service-card.animate {
    opacity: 1 !important;
    transform: translateY(0) !important;
    transition: opacity 1s ease, transform 1s ease;
  }
`, styleSheet.cssRules.length);

export default Services;
