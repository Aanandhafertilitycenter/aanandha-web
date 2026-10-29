import {
  Button,
  Card,
  Col,
  Form,
  Image,
  Input,
  Modal,
  Row,
  Typography,
  message,
  Grid
} from "antd";
import { useState } from "react";
import AppointmentService from '../../api/service/AppointmentService/AppointmentService';
import { notification } from "antd";
import './card.css';


const appointment = require("../../assets/appoinment-2.png");
const { Title } = Typography;
const { useBreakpoint } = Grid;

const AppointmentCard = () => {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [messageApi, contextHolder] = message.useMessage();
  const [isloading,setIsloading] = useState(false);
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);

const onFinish = async (values) => {
  try {
    setIsloading(true)
    const res = await AppointmentService.create(values);
    messageApi.success("Appointment request sent successfully!");
    form.resetFields();
    setIsloading(false);
    setIsModalOpen(false);
  } catch (err) {
    setIsloading(false);
    console.error(err);
    messageApi.error("Failed to book appointment. Please try again later.");
  }
};



  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error("Failed to book appointment. Please check the form.");
  };

  return (
    <Modal
      className="custom-appointment-modal"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      width={isMobile ? "100%" : "90%"}
      footer={null}
      style={{ top: 130 }}
    >

      <div style={styles.section}>
        {contextHolder}
        <Row 
        gutter={isMobile ? [0,0]:[24, 24]} align="middle" justify="center">
          {/* Left Image */}
          {/* <Col xs={24} md={12} style={{justifyContent:'center',display:'flex'}}>
            <Image
              src={appointment}
              preview={false}
              style={styles.image}
              alt="Appointment"
            />
          </Col> */}

          <Col xs={24} md={12} style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Highlighted tagline above the image */}
            <div style={{ 
              textAlign: 'center', 
              // background: 'linear-gradient(90deg, #329290 0%, #6FDAC1 100%)', 
              color: '#fff', 
              // padding: '10px 20px',
              borderRadius: 8,
              marginBottom: 16,
              fontSize: 26,
              fontWeight: 'bold',
              // boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              maxWidth: '90%'
            }}>
              Simplest and fastest way to get pregnant in a transparent and ethical manner
            </div>
          
            {/* Image */}
            {!isMobile && <Image
              src={appointment}
              preview={false}
              style={styles.image}
              alt="Appointment"
            />}
          </Col>


          {/* Right Form */}
          <Col xs={24} md={12}>
            <Card style={styles.card}
             bodyStyle={{ padding: 20 }}
             >
              <Title
                level={3}
                style={{
                  textAlign: "center",
                  color: "#329290",
                  marginTop: 0,
                  paddingBottom: 8,
                }}
              >
                Book an Appointment
              </Title>

              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  name="name"
                  label={<div style={styles.label}>Name</div>}
                  rules={[{ required: true, message: "Please enter your name" }]}
                >
                  <Input size="large" />
                </Form.Item>

                <Form.Item
                  name="email"
                  label={<div style={styles.label}>Email</div>}
                  rules={[{ required: true, message: "Please enter your email" }]}
                >
                  <Input size="large" />
                </Form.Item>

                <Form.Item
                  name="phone"
                  label={<div style={styles.label}>Phone</div>}
                  rules={[
                    { required: true, message: "Please enter your phone number" },
                    {
                      pattern: /^[0-9]{10}$/, // adjust this regex based on your phone format
                      message: "Phone number must be 10 digits"
                    }
                  ]}
                >
                  <Input size="large" maxLength={10} />
                </Form.Item>

                <Form.Item
                  name="description"
                  label={<div style={styles.label}>Description</div>}
                >
                  <Input.TextArea rows={4} />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" block size="large"  loading={isloading}>
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </Modal>
  );
};

const styles = {
  section: {
    background: "linear-gradient(to right, #c2e9fb, #fceff9)",
    padding: "30px 15px",
  },
  label: {
    color: "#666",
    lineHeight: 1.7,
    fontSize: "16px",
  },
  image: {
    width: "100%",
    maxWidth: "400px",
    margin: "0 auto",
    display: "block",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.05)",
    width: "100%",
    maxWidth: 500,
    margin: "0 auto",
  },
};

export default AppointmentCard;
