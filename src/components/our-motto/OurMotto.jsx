import { HeartOutlined, SafetyOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { Col, Image, Row } from 'antd';

const image1 = require("../../assets/hope-care.jpg");
const image2 = require("../../assets/expert.jpg");
const image3 = require("../../assets/advance-care.jpg");
const image4 = require("../../assets/happy-fam.jpg");

const OurMotto = () => {
  return (
    <>
      <Row
        style={{ background: "#E0F2F1", padding: 60 }}
        gutter={[24, 24]}
      >
        {/* Text block on the left */}
        <Col xs={24} md={12} style={{ paddingRight: 40 }}>
          <h2 style={{ fontSize: 32, color: "#329290", marginBottom: 24 }}>
            Our Motto
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.8, color: "#329290" }}>
            At our fertility center, we bridge care and excellence. Whether it’s expert consultation,
            compassionate service, or personalized treatment — our mission is to serve with heart
            and hope, guiding every family toward their dreams.
          </p>
        </Col>

        {/* Image collage on the right */}
        <Col xs={24} md={12}>
          <div
            style={{
              display: "grid",
              gap: 16,
              justifyContent: "center",
              alignItems: "center",
              // Responsive grid columns:
              gridTemplateColumns: "repeat(1, 1fr)", // default mobile: 1 column
            }}
            className="image-grid"
          >
            <Image
              src={image1}
              alt="Compassionate care"
              width="100%"
              height={160}
              preview={false}
              style={{
                objectFit: "cover",
                borderRadius: 12,
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              }}
            />
            <Image
              src={image2}
              alt="Expert doctors"
              width="100%"
              height={160}
              preview={false}
              style={{
                objectFit: "cover",
                borderRadius: 12,
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              }}
            />
            <Image
              src={image3}
              alt="Modern technology"
              width="100%"
              height={160}
              preview={false}
              style={{
                objectFit: "cover",
                borderRadius: 12,
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              }}
            />
            <Image
              src={image4}
              alt="Happy families"
              width="100%"
              height={160}
              preview={false}
              style={{
                objectFit: "cover",
                borderRadius: 12,
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              }}
            />
          </div>
        </Col>

      </Row>

      {/* Add CSS for responsive grid */}
      <style jsx>{`
        @media (min-width: 768px) {
          .image-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </>
  );
};

export default OurMotto;
