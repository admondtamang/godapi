import { Layout, Menu } from "antd";
import { FolderOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

const navs = {
    dms: [
        {
            name: "signin",
            method: "get",
            request: "http://localhost.com",
        },
        {
            name: "ramesh",
            method: "get",
            request: "http://localhost.com",
        },
        {
            name: "",
            method: "get",
            request: "http://localhost.com",
        },
    ],

    bpa: [
        {
            name: "herp",
            method: "get",
            request: "http://localhost.com",
        },
        {
            name: "make",
            method: "get",
            request: "http://localhost.com",
        },
        {
            name: "",
            method: "get",
            request: "http://localhost.com",
        },
    ],
};

export default function Navigation({ children }) {
    const navigations = () => {
        for (const [key, value] of Object.entries(navs)) {
            return (
                <SubMenu key="sub1" icon={<FolderOutlined />} title={key}>
                    {value.map((nav, index) => (
                        <Menu.Item key={index}>{nav.name || nav.request}</Menu.Item>
                    ))}
                </SubMenu>
            );
        }
    };
    return (
        <Layout className="site-layout-background">
            <Sider className="site-layout-background" width={300}>
                <Menu mode="inline" defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]} style={{ height: "100%" }}>
                    {navigations()}
                </Menu>
            </Sider>
            <Content style={{ padding: " 24px", minHeight: 280 }}>{children}</Content>
        </Layout>
    );
}
