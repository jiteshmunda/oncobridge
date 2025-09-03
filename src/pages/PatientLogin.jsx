import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "../styles/PatientLogin.css"; // optional for extra styling

function PatientLogin() {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Login Success:", values);
    navigate("/patient-dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <Card className="login-card" bordered={false}>
          <div className="logo-container">
            <img
              src="src/assets/3.png" // your company logo
              alt="OncoBridge"
              className="login-logo"
            />
            <h2 className="login-title">Patient Login</h2>
          </div>

          <Form layout="vertical" onFinish={onFinish} className="login-form">
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                size="large"
                placeholder="Email"
                prefix={<UserOutlined />}
                style={{ borderRadius: "8px" }}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: "Please input your password!" }]}
            >
              <Input.Password
                size="large"
                placeholder="Password"
                prefix={<LockOutlined />}
                style={{ borderRadius: "8px" }}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                block
                style={{
                  borderRadius: "8px",
                  background: "linear-gradient(90deg, #1a97ad, #4bc3c9)",
                  border: "none",
                  fontWeight: "bold",
                }}
              >
                Login
              </Button>
            </Form.Item>
          </Form>

          <div className="login-footer">
            <p>Forgot password? <a href="#">Click here</a></p>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default PatientLogin;
