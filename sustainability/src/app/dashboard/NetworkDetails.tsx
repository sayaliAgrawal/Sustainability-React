import React from "react";
import { Card, Col, Row } from "antd";
import LineChartComponent from "./Charts/line-chart";
import PieChartComponent from "./Charts/pie-chart";
import TableComponent from "./Charts/table";

const NetworkDetails = () => {
  return (
    <>
      <Row gutter={[16, 16]} style={{ marginBottom: "16px" }}>
        <Col span={7}>
          <Card title="Energy Consumption Distribution" bordered={false}>
            <PieChartComponent />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Summary Data" bordered={false}>
            <Row gutter={[16, 16]} style={{ marginBottom: "10px" }}>
              <Col span={12}>
                <Card
                  title="Energy Consumed (kWh)"
                  bordered={false}
                  style={{ background: "#8E81B4", height: "8rem" }}>
                  0.54
                </Card>
              </Col>
              <Col span={12}>
                <Card
                  title="CO2 Emission (kg)"
                  bordered={false}
                  style={{ background: "#F3E4B2", height: "8rem" }}>
                  0.01
                </Card>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Card
                  title="Energy Efficiency (Gb/kWh)"
                  bordered={false}
                  style={{ background: "#ff7ea5", height: "8rem" }}>
                  79.2
                </Card>
              </Col>
              <Col span={12}>
                <Card
                  title="Traffic Served (Gbps)"
                  bordered={false}
                  style={{ background: "#999c9d", height: "8rem" }}>
                  28.27 / 15.29
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={9}>
          <Card title="Network Nodes" bordered={false}>
            <TableComponent />
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Card title="Energy Consumed (Wh)" bordered={false}>
            <LineChartComponent />
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Traffic Served (Gbps)" bordered={false}>
            <LineChartComponent />
          </Card>
        </Col>
        <Col span={6}>
          <Card title="CO2 Emission (Grams)" bordered={false}>
            <LineChartComponent />
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Energy Efficiency (Gb/kWh)" bordered={false}>
            <LineChartComponent />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default NetworkDetails;
