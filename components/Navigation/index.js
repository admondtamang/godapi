import { Layout, Menu } from "antd";
import { FolderOutlined, FileOutlined } from "@ant-design/icons";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import "./navigation.module.css";
import AddFolder from "./AddFolder";
import { useDispatch, useSelector } from "react-redux";
import { handleClickRequest } from "../../redux/request/requestSlice";
import dynamic from "next/dynamic";
import RequestMethodIcon from "../RequestMehodIcon";

const NavigationFolder = dynamic(() => import("./TreeFolder"), {
    loading: () => <p>Loading...</p>,
});
const { SubMenu } = Menu;
const { Content, Sider } = Layout;

function handleClick(e, data) {
    console.log(data.foo);
}

export default function Navigation({ children }) {
    const dispatch = useDispatch();
    const folders = useSelector((state) => state.folders.data);
    const data = Object.entries(folders).map(([key, folder], i) => ({
        title: key,
        key: i,
        children: folder.map((child, i) => ({ title: child.url, key: i, isLeaf: true })),
    }));
    function _handleRequestClick(req) {
        dispatch(handleClickRequest(req));
    }
    const navigations = () =>
        Object.entries(folders).map(([key, value], i) => (
            // <>
            <SubMenu key={i} icon={<FolderOutlined />} title={key}>
                {value.length >= 1 ? (
                    value?.map((req, i) => (
                        <Menu.Item key={i} icon={<RequestMethodIcon method={req.method} />} onClick={() => _handleRequestClick(req)}>
                            {req.url}
                        </Menu.Item>
                    ))
                ) : (
                    <p>No data</p>
                )}
            </SubMenu>
        ));

    return (
        <Layout className="site-layout-background">
            <Sider className="site-layout-background" style={{ background: "white" }} width={300}>
                {/* <NavigationFolder folders={data} /> */}
                <Menu mode="inline" style={{ height: "100%" }}>
                    <AddFolder />

                    {navigations()}
                </Menu>
            </Sider>

            <Content style={{ padding: " 24px", minHeight: 280 }}>{children}</Content>
        </Layout>
    );
}
