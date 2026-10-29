import Banner from './Banner';
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const VideoBanner = () => {
 const path = require('../../assets/banner.mp4')
  return (
    <div style={{ paddingTop: 0, marginTop: 0 }}>
      <video
        autoPlay
        loop
        muted
        controls={false}
        playsInline
        disablePictureInPicture
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      >
        <source src={path} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
          
      {/* <div style={styles.overlay}>
        <div style={styles.textBox}>
          <Title level={2} style={styles.title}>
            Kuzhandhai Perin Aanandham Arambam
          </Title>
          <Paragraph style={styles.subtitle}>
            We aim to offer the best available evidence-based services for the couple to get pregnant faster at an affordable cost!
          </Paragraph> */}
          {/* <Button type="primary" size="large" style={styles.button}>
            Book Appointment
          </Button> */}
        {/* </div>
      </div> */}

    </div>
  );
};

const styles = {
  bannerContainer: {
    position: "relative",
    width: "100%",
    height: "500px",
    overflow: "hidden",
    marginBottom: "40px", // Adds spacing from the next section
  },
  video: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "20px",
  },
  textBox: {
    maxWidth: 800,
    padding: "20px",
  },
  title: {
    color: "#fff",
    fontWeight: 600,
  },
  subtitle: {
    color: "#f0f0f0",
    fontSize: 16,
    marginTop: 10,
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#329290",
    borderColor: "#329290",
  },
};

export default VideoBanner;