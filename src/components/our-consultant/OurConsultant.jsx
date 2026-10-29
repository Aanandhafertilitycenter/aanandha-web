import React from "react";
import { Card, Typography, Avatar, Image, Row, Col } from "antd";
import './consultant.css';

const { Title, Paragraph } = Typography;

const profile = require("../../assets/profile-doc.jpg");

const achievements = [
  "MBBS, MS(OG), MRCOG (UK), Fellowship in Reproductive Medicine",
  "University Gold Medalist in MBBS",
  "University Gold Medalist in Post Graduation",
  "Best Outgoing Student in Post Graduation",
  "Proud Alumni of Madurai Medical College",
  "Prof Dharani Srinivas Gold Medal",
  "Dr. Meera Sengupta Gold Medal",
  "Kulkarni Award from Tamil Nadu Dr. MGR University",
  "Dr. Kuldeep Jain Gold Medal from Indian Fertility Society",
  "Best Research Paper Award from Indian Fertility Society and FOGSI",
  "Papers Published in National and International Journals",
];

const AboutConsultantSide = () => {
  return (
    <Card
      style={{
        margin: "40px auto",
        borderRadius: 16,
        boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
        overflow: "hidden",
      }}
      bodyStyle={{ padding: 0 }}
    >
      <Row gutter={[0, 0]} wrap>
        {/* Left side image */}
        {/* <Col
          xs={24}
          md={10}
          style={{
            background: "linear-gradient(90deg, #329290 0%, #6FDAC1 100%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 24,
          }}
        >
          <Avatar
            size={450}
            src={
              <Image
                src={profile}
                preview={false}
                style={{
                  width: "100%",
                  maxWidth: 440,
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            }
            style={{
              border: "8px solid white",
              backgroundColor: "transparent",
            }}
          />
        </Col> */}

<Col
  xs={24}
  md={10}
  style={{
    background: "linear-gradient(90deg, #329290 0%, #6FDAC1 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    minHeight: 300,
  }}
>
  <div className="responsive-avatar" style={{ backgroundImage: `url(${profile})` }} />
</Col>




        {/* Right side content */}
        <Col xs={24} md={14} style={{ padding: 32 }}>
          <Title level={2} style={{ color: "#329290", marginBottom: 8 }}>
            Dr. Janani
          </Title>
          <Paragraph style={{ paddingTop: 5, color: "#c1c1c1", fontWeight: 500 }}>
            MBBS, MS(OG), MRCOG (UK), Fellowship in Reproductive Medicine
          </Paragraph>
          <div style={{ marginTop: 24 }}>
            {achievements.map((item, index) => (
              <Paragraph
                key={index}
                style={{ fontSize: 15, color: "#333", marginBottom: 10 }}
              >
                • {item}
              </Paragraph>
            ))}
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default AboutConsultantSide;
