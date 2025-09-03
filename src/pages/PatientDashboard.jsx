import React from "react";
import { Layout, Menu, Card, Row, Col, Table, Avatar, Badge } from "antd";
import {
  UserOutlined,
  ScheduleOutlined,
  FileTextOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

function PatientDashboard() {
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Doctor",
      dataIndex: "doctor",
      key: "doctor",
      render: (text, record) => (
        <span>
          <Avatar style={{ backgroundColor: "#87d068" }} icon={<UserOutlined />} />{" "}
          {text}
        </span>
      ),
    },
    {
      title: "Specialty",
      dataIndex: "specialty",
      key: "specialty",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) =>
        status === "Confirmed" ? (
          <Badge status="success" text="Confirmed" />
        ) : (
          <Badge status="default" text="Pending" />
        ),
    },
  ];

  const data = [
    {
      key: "1",
      date: "2025-09-01",
      doctor: "Dr. Smith",
      specialty: "Oncology",
      status: "Confirmed",
    },
    {
      key: "2",
      date: "2025-09-05",
      doctor: "Dr. Johnson",
      specialty: "Radiology",
      status: "Pending",
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible style={{ background: "#001529" }}>
        <div style={{ height: "60px", margin: "16px", color: "#fff", textAlign: "center", fontWeight: "bold", fontSize: "18px" }}>
          OncoBridge
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            Overview
          </Menu.Item>
          <Menu.Item key="2" icon={<ScheduleOutlined />}>
            Appointments
          </Menu.Item>
          <Menu.Item key="3" icon={<FileTextOutlined />}>
            Reports
          </Menu.Item>
          <Menu.Item key="4" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
          <Menu.Item key="5" icon={<LogoutOutlined />}>
            Logout
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        <Header style={{ background: "#fff", padding: "0 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2>Patient Dashboard</h2>
          <div>Welcome, John Doe</div>
        </Header>

        <Content style={{ margin: "16px" }}>
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Upcoming Appointments" bordered={false}>
                3 Appointments
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Pending Reports" bordered={false}>
                2 Reports
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Messages" bordered={false}>
                5 Messages
              </Card>
            </Col>
          </Row>

          <Card title="Appointments" style={{ marginTop: "24px" }}>
            <Table columns={columns} dataSource={data} pagination={false} />
          </Card>
        </Content>

        <Footer style={{ textAlign: "center" }}>
          OncoBridge ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
}

export default PatientDashboard;
