import React from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: string;
  name: string;
  productType: string;
  vendor: string;
  serialNumber: string;
  ipaddress: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Node Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Product Type",
    dataIndex: "productType",
    key: "productType",
  },
  {
    title: "Vendor",
    dataIndex: "vendor",
    key: "vendor",
  },
  {
    title: "Serial Number",
    dataIndex: "serialNumber",
    key: "serialNumber",
  },
  {
    title: "IP Address",
    dataIndex: "ipaddress",
    key: "ipaddress",
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "Node-41",
    productType: "NCS4K",
    vendor: "Cisco",
    serialNumber: "SAL1933MDH3",
    ipaddress: "10.24.56.78",
  },
  {
    key: "2",
    name: "Node-41",
    productType: "NCS4K",
    vendor: "Cisco",
    serialNumber: "SAL1933MDH3",
    ipaddress: "10.24.56.78",
  },
  {
    key: "3",
    name: "Node-41",
    productType: "NCS4K",
    vendor: "Cisco",
    serialNumber: "SAL1933MDH3",
    ipaddress: "10.24.56.78",
  },
];

const App: React.FC = () => <Table columns={columns} dataSource={data} />;

export default App;
