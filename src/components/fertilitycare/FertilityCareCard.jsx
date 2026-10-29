import { Card, Typography, Button } from "antd";
import { HeartTwoTone } from "@ant-design/icons";

const { Title, Paragraph } = Typography;
const excercice = require('../../assets/excercice.jpg');
const meditation = require('../../assets/meditation.jpg');
const position = require('../../assets/positioning mental health.jpg');
const maleCare = require('../../assets/man_health_set_flat-02.jpg');

const treatments = [
  {
    title: "Exercise",
    img: `${excercice}`,
  },
  {
    title: "Positive Mental Health",
    img: `${position}`,
  },
  {
    title: "Meditation",
    img: `${meditation}`,
  },
  // {
  //   title: "Positioning",
  //   img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=80&q=80",
  // },

  {
    title: "Male Fertility Care",
    img: `${maleCare}`,
  },
];

const FertilityCareCard = () => {
  return (
    <div style={styles.container}>
      <div style={{height:50}}>
         <HeartTwoTone twoToneColor="#329290" style={styles.icon} />
      </div>

      <Title level={3} style={styles.title}>
        Comprehensive Fertility Care
      </Title>
      <Paragraph style={styles.description}>
        Supporting your journey with holistic care, personalized to your unique needs.
      </Paragraph>

      <div style={styles.scrollContainer}>
        {treatments.map(({ title, img }) => (
          <Card
            key={title}
            size="small"
            hoverable={false}
            style={styles.treatmentCard}
            cover={<img alt={title} src={img} style={styles.treatmentImage} />}
          >
            <Card.Meta
              title={title}
              style={{ textAlign: "center", color: "#329290", fontWeight: "600" }}
            />
          </Card>
        ))}
      </div>

      {/* <Button type="primary" size="large" style={styles.button} block>
        Book a Consultation
      </Button> */}
    </div>
  );
};

const styles = {
  container: {
    // maxWidth: 1200,
    // margin: "24px auto",
    padding: "0 16px",
    background: "#fff",
    borderRadius: 16,
    boxShadow: "0 8px 30px rgba(0,0,0,0.05)",
    textAlign: "center",
  },
  icon: {
    fontSize: 32,
    margin: 0,
    // marginBottom: 12,
  },
  title: {
    color: "#329290",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginBottom: 24,
  },
  scrollContainer: {
    display: "flex",
    overflowX: "auto",
    paddingBottom: 16,
    // gap: 16,
    justifyContent:'space-evenly',
    scrollbarWidth: 'none'
  },
  treatmentCard: {
    minWidth: 140,
    flexShrink: 0,
    borderRadius: 12,
  },
  treatmentImage: {
    borderRadius: "12px 12px 0 0",
    height: 200,
    objectFit: "cover",
  },
//   button: {
//     marginBottom: 24,
//     backgroundColor: "#329290",
//     borderColor: "#329290",
//   },
};

export default FertilityCareCard;
