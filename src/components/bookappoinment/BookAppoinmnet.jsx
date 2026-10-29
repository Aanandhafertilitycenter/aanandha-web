import {
  Button,
  Card,
  Col,
  Form,
  Image,
  Input,
  Row,
  Typography,
  message,
} from "antd";
import { useState } from "react";
import AppointmentService from '../../api/service/AppointmentService/AppointmentService';
import { notification } from "antd";

const appointment = require("../../assets/appointment-removebg-preview.png");
const { Title } = Typography;

const BookAppointment = () => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [isloading,setIsloading] = useState(false);


const onFinish = async (values) => {
  try {
    setIsloading(true)
    const res = await AppointmentService.create(values);
    messageApi.success("Appointment request sent successfully!");
    form.resetFields();
    setIsloading(false);
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
    <div style={styles.section}>
      {contextHolder}
      <Row gutter={[32, 32]} align="middle" justify="center">
        {/* Left Image */}
        <Col xs={24} md={12}>
          <Image src={appointment} preview={false} style={styles.image} />
        </Col>

        {/* Right Form */}
        <Col xs={24} md={12}>
          <Card style={styles.card}>
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
                <Input size="large" variant="filled" />
              </Form.Item>

              <Form.Item
                name="email"
                label={<div style={styles.label}>Email</div>}
                rules={[{ required: true, message: "Please enter your email" }]}
              >
                <Input size="large" variant="filled" />
              </Form.Item>

              <Form.Item
                name="phone"
                label={<div style={styles.label}>Phone</div>}
                rules={[
                  { required: true, message: "Please enter your phone number" },
                ]}
              >
                <Input size="large" variant="filled" />
              </Form.Item>

              <Form.Item
                name="description"
                label={<div style={styles.label}>Description</div>}
              >
                <Input.TextArea variant="filled" rows={4} />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block size="large" loading={isloading}>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

const styles = {
  section: {
    background: "linear-gradient(to right, #c2e9fb, #fceff9)",
    padding: "20px 20px",
  },
  label: { color: "#666", lineHeight: 1.7, fontSize: "16px" },
  image: {
    width: "100%",
    maxWidth: 500,
    margin: "0 auto",
    display: "block",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.05)",
    padding: 30,
    width: "100%",        // Make card width fluid
    maxWidth: 600,        // Max width on larger screens
    boxSizing: "border-box",
  },
};

export default BookAppointment;
