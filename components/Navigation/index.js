import { Layout, Menu } from "antd";
import { FolderOutlined, FileOutlined } from "@ant-design/icons";

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
    const navigations = () =>
        Object.entries(navs).map(([key, value], i) => (
            <SubMenu key={i} icon={<FolderOutlined />} title={key}>
                {value.map((nav, i) => (
                    <Menu.Item key={i} icon={<FileOutlined />}>
                        {nav.name || nav.request}
                    </Menu.Item>
                ))}
            </SubMenu>
        ));

    return (
        <Layout className="site-layout-background">
            <Sider className="site-layout-background" width={300}>
                <Menu mode="inline" style={{ height: "100%" }}>
                    {navigations()}
                </Menu>
            </Sider>
            <Content style={{ padding: " 24px", minHeight: 280 }}>{children}</Content>
        </Layout>
    );
}
