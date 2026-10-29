import { Typography, Row, Col, Card } from "antd";

const { Title, Paragraph } = Typography;

const WhyAanandha = () => {
  return (
    <div style={{ padding: "60px 20px", backgroundColor: "#f7fafa" }}>
      <Title level={2} style={{ textAlign: "center", marginBottom: 40 }}>
        Why <span style={{ color: "#329290" }}>Aanandha</span>?
      </Title>

      <Row gutter={[24, 24]} justify="center">
        <Col xs={24} md={12} lg={8}>
          <Card hoverable style={styles.card}>
            <Title level={4} style={styles.title}>Transparent</Title>
            <Paragraph>Clear process, honest communication, and no hidden costs.</Paragraph>
          </Card>
        </Col>

        <Col xs={24} md={12} lg={8}>
          <Card hoverable style={styles.card}>
            <Title level={4} style={styles.title}>Ethical</Title>
            <Paragraph>Medical guidance rooted in integrity and patient-first care.</Paragraph>
          </Card>
        </Col>

        <Col xs={24} md={12} lg={8}>
          <Card hoverable style={styles.card}>
            <Title level={4} style={styles.title}>Affordable</Title>
            <Paragraph>Reasonable pricing with free fertility exercises and support.</Paragraph>
          </Card>
        </Col>

        <Col xs={24} md={12} lg={8}>
          <Card hoverable style={styles.card}>
            <Title level={4} style={styles.title}>Supportive</Title>
            <Paragraph>Positive reinforcement, guidance, and emotional well-being.</Paragraph>
          </Card>
        </Col>

        <Col xs={24} md={12} lg={8}>
          <Card hoverable style={styles.card}>
            <Title level={4} style={styles.title}>Faster Results</Title>
            <Paragraph>Our methods are focused on reducing time to pregnancy.</Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

const styles = {
  card: {
    borderRadius: 12,
    textAlign: "center",
    padding: 20,
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
    minHeight:210
  },
  title: {
    color: "#329290",
  },
};

export default WhyAanandha;
