import { Input } from "antd";
import { useDispatch } from "react-redux";
import { handleToken } from "../../../../../../redux/request/requestSlice";

export default function Token() {
    const dispatch = useDispatch();
    function onChange(e) {
        dispatch(handleToken(e.target.value));
    }
    return <Input placeholder="Token" onChange={onChange} />;
}
