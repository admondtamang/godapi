import { Layout, Menu } from "antd";
import { FolderOutlined, FileOutlined } from "@ant-design/icons";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import "./navigation.module.css";
import AddFolder from "./AddFolder";
import { useSelector } from "react-redux";

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

function handleClick(e, data) {
    console.log(data.foo);
}

export default function Navigation({ children }) {
    const folders = useSelector((state) => state.folders.data);
    const navigations = () =>
        Object.entries(folders).map(([key, value], i) => (
            <>
                {/* <ContextMenuTrigger id="same_unique_identifier"> */}
                <SubMenu key={i} icon={<FolderOutlined />} title={key}>
                    {/* {console.log(value)} */}
                    {value?.map((nav, i) => (
                        <Menu.Item key={i} icon={<FileOutlined />}>
                            {nav.url}
                        </Menu.Item>
                    ))}
                    <Menu.Item key={i} icon={<FileOutlined />}>
                        Add New request
                    </Menu.Item>
                </SubMenu>
                {/* </ContextMenuTrigger> */}

                <ContextMenu id="same_unique_identifier">
                    <MenuItem data={{ foo: "bar" }} onClick={handleClick}>
                        ContextMenu Item 1
                    </MenuItem>
                    <MenuItem data={{ foo: "bar" }} onClick={handleClick}>
                        ContextMenu Item 2
                    </MenuItem>
                    <MenuItem data={{ foo: "bar" }} onClick={handleClick}>
                        ContextMenu Item 3
                    </MenuItem>
                </ContextMenu>
            </>
        ));

    return (
        <Layout className="site-layout-background">
            <Sider className="site-layout-background" width={300}>
                <Menu mode="inline" style={{ height: "100%" }}>
                    <AddFolder />

                    {navigations()}
                </Menu>
            </Sider>

            <Content style={{ padding: " 24px", minHeight: 280 }}>{children}</Content>
        </Layout>
    );
}
