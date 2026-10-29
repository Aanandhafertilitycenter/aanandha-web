import React, { useEffect, useRef, useState } from "react";
import { Card, Typography, Drawer, Button, Avatar, Image } from "antd";
import './Doctors.css';

const { Meta } = Card;
const { Title } = Typography;

const profile = require("../../assets/profile-removebg-preview.png");

const doctorList = [
  {
    name: "Dr. Ananya Rao",
    specialty: "IVF Specialist",
    image: profile,
    link: "https://www.instagram.com/drananyarao",
    bio: "With over 10 years of experience in IVF treatment, Dr. Rao is known for compassionate care and high success rates."
  },
  {
    name: "Dr. Karthik Iyer",
    specialty: "Gynecologist",
    image: profile,
    link: "https://www.instagram.com/drkarthikiyer",
    bio: "A leading gynecologist with expertise in advanced fertility diagnostics and minimally invasive procedures."
  },
  {
    name: "Dr. Karthik Iyer",
    specialty: "Gynecologist",
    image: profile,
    link: "https://www.instagram.com/drkarthikiyer",
    bio: "A leading gynecologist with expertise in advanced fertility diagnostics and minimally invasive procedures."
  },
  {
    name: "Dr. Karthik Iyer",
    specialty: "Gynecologist",
    image: profile,
    link: "https://www.instagram.com/drkarthikiyer",
    bio: "A leading gynecologist with expertise in advanced fertility diagnostics and minimally invasive procedures."
  },
  {
    name: "Dr. Karthik Iyer",
    specialty: "Gynecologist",
    image: profile,
    link: "https://www.instagram.com/drkarthikiyer",
    bio: "A leading gynecologist with expertise in advanced fertility diagnostics and minimally invasive procedures."
  },
];

const Doctors = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const currentSection = sectionRef.current;

    if (currentSection) observer.observe(currentSection);

    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  const handleCardClick = (doctor) => {
    setSelectedDoctor(doctor);
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setSelectedDoctor(null);
  };

  return (
    <div ref={sectionRef} className="doctors-section">
      <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: 20, padding: 20 }}>
        <Title level={3}>Meet Our Specialists</Title>
      </div>
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: 25,
          paddingBottom: 20,
          scrollbarWidth: "none",
        }}
      >
        {doctorList.map((doctor, index) => (
          <Card
            key={index}
            hoverable
            className={`card-animate ${visible ? "card-visible" : ""}`}
            style={{
              minWidth: 280,
              animationDelay: `${index * 0.5}s`,
            }}
            cover={<img alt={doctor.name} src={doctor.image} />}
            onClick={() => handleCardClick(doctor)}
          >
            <Meta
              title={<div style={{ color: "#329290" }}>{doctor.name}</div>}
              description={doctor.specialty}
            />
          </Card>
        ))}
      </div>

      <Drawer
        title={selectedDoctor?.name}
        placement="right"
        onClose={closeDrawer}
        open={drawerOpen}
        width={500}
        bodyStyle={{ padding: 20 }}
        mask={true}
      >
        {selectedDoctor && (
          <>
            {/* <img
              src={selectedDoctor.image}
              alt={selectedDoctor.name}
              style={{ width: "100%", borderRadius: 8, marginBottom: 20 }}
            />
            <Typography.Title level={5} style={{ color: "#329290" }}>
              {selectedDoctor.specialty}
            </Typography.Title>
            <Typography.Paragraph>{selectedDoctor.bio}</Typography.Paragraph> */}
            {/* <Button type="primary" onClick={() => window.open(selectedDoctor.link, "_blank")}>
              View Instagram
            </Button> */}
                  <div
        style={{
          ...styles.cover,
          background: styles.gradient,
        }}
      >
        <Avatar
          size={145}
          style={styles.avatar}
          src={<Image src={selectedDoctor.image} preview={false} />}
        />
        <div style={styles.cardContent}>
          <Title level={4} style={{ color: '#fff' }}>
            {selectedDoctor.specialty}
          </Title>
        </div>
      </div>
          </>
        )}
      </Drawer>
    </div>
  );
};

const styles={
    avatar: {
    position: 'absolute',
    top: -18,
    left: -10,
    border: '10px solid white',
    backgroundColor: '#2f77b0',
    padding: 10,
  },
    cover: {
    height: 110,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    position: 'relative',
    paddingBottom: 15,
    display: 'flex',
    alignItems: 'center',
    opacity: 0, // Initially hidden for animation
    transform: 'translateY(30px)', // Initially, the card is below the normal position
    transition: 'opacity 1s ease, transform 1s ease', // Smooth transition for opacity and transform
  },
}

export default Doctors;
