import React from 'react';
import { Card, Col, Row, Collapse, Button, Form, Input, DatePicker } from 'antd';
import { TwitterOutlined, FacebookOutlined, InstagramOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const styles = {
    sectionTitle: {
        textAlign: 'center',
        fontSize: '36px',
        fontWeight: '600',
        marginBottom: '40px',
        color: '#333',
        borderBottom: '5px solid #FFD700', // Gold color accent
        display: 'inline-block',
        paddingBottom: '10px',
      },
      successCard: {
        marginBottom: '30px',
        borderRadius: '20px',
        boxShadow: '0 12px 24px rgba(0, 0, 0, 0.05)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: '0 20px 30px rgba(0, 0, 0, 0.1)',
        },
      },
      successImage: {
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
        height: '200px',
        objectFit: 'cover',
      },
  faqPanel: {
    marginBottom: '20px',
    background: '#FFCCCB', // Light coral
    borderRadius: '10px',
    border: '1px solid #f0f0f0',
    transition: 'background-color 0.3s',
    '&:hover': {
      backgroundColor: '#FFB6C1', // Light pink hover
    },
  },
  blogCard: {
    marginBottom: '30px',
    borderRadius: '20px',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
      transform: 'translateY(-10px)',
      boxShadow: '0 20px 30px rgba(0, 0, 0, 0.15)',
    },
  },
  blogImage: {
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
    height: '200px',
    objectFit: 'cover',
  },
  contactButton: {
    backgroundColor: '#FF6347', // Tomato red for a pop of color
    color: 'white',
    borderRadius: '8px',
    width: '100%',
    fontSize: '18px',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: '#FF4500', // Darker tomato on hover
    },
  },

};

const SuccessStories = () => (
    <div style={{ padding: '5px 20px', background: '#fff' }}> {/* Soft light gradient background */}
      <h2 style={styles.sectionTitle}>Success Stories</h2>
      <Row gutter={[24, 24]}>
        {[1, 2, 3].map((_, index) => (
          <Col span={8} key={index}>
            <Card
              style={{
                ...styles.successCard,
                background: index % 2 === 0
                  ? 'linear-gradient(to right, #E1F5FE, #BBDEFB)' // Soft baby blue gradient
                  : 'linear-gradient(to right, #F1F8E9,rgb(255, 219, 219))', // Soft green to light lavender gradient
              }}
              cover={<img alt="Success Story" src="https://via.placeholder.com/400" style={styles.successImage} />}
              title="Patient Name"
            >
              <p>Short success story description with a motivational quote or story excerpt...</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );

const FAQs = () => (
  <div style={{ padding: '80px 20px', backgroundColor: '#F5F5F5' }}> {/* Light gray background */}
    <h2 style={styles.sectionTitle}>FAQs</h2>
    <Collapse accordion>
      {[1, 2, 3].map((_, index) => (
        <Panel header={`Question ${index + 1}`} key={index + 1} style={styles.faqPanel}>
          <p>Answer to the question...</p>
        </Panel>
      ))}
    </Collapse>
  </div>
);

const Blog = () => (
  <div style={{ padding: '80px 20px', backgroundColor: '#FFFAF0' }}> {/* Floral white background */}
    <h2 style={styles.sectionTitle}>Blog</h2>
    <Row gutter={[24, 24]}>
      {[1, 2, 3].map((_, index) => (
        <Col span={8} key={index}>
          <Card
            style={{ ...styles.blogCard, backgroundColor: index % 2 === 0 ? '#90EE90' : '#D3D3D3' }} // Light green or light gray
            cover={<img alt="Blog" src="https://via.placeholder.com/400" style={styles.blogImage} />}
            title={`Blog Title ${index + 1}`}
          >
            <p>Short description of the blog post...</p>
            <Button type="link">Read More</Button>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);

const Contact = () => (
  <div style={{ padding: '80px 20px', backgroundColor: '#FFECB3' }}> {/* Light yellow background */}
    <h2 style={styles.sectionTitle}>Contact / Book Appointment</h2>
    <div style={styles.formContainer}>
      <Form layout="vertical">
        <Form.Item label="Name" style={styles.formItem}>
          <Input placeholder="Your name" />
        </Form.Item>
        <Form.Item label="Email" style={styles.formItem}>
          <Input placeholder="Your email" />
        </Form.Item>
        <Form.Item label="Message" style={styles.formItem}>
          <Input.TextArea placeholder="Your message" rows={4} />
        </Form.Item>
        <Form.Item label="Appointment Date" style={styles.formItem}>
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" style={styles.contactButton}>Book Appointment</Button>
        </Form.Item>
      </Form>
    </div>
  </div>
);

const App = () => (
  <div>
    <SuccessStories />
    <FAQs />
    <Blog />
    {/* <Contact /> */}
  </div>
);

export default App;
