import { UnControlled as CodeMirror } from "react-codemirror2";
import { useDispatch } from "react-redux";
import { handleJson } from "../../../../../redux/request/requestSlice";
export default function Json() {
    const dispatch = useDispatch();
    return (
        <CodeMirror
            value="{}"
            options={{
                mode: "json",
                lineNumbers: true,
            }}
            onChange={(editor, data, value) => {
                dispatch(handleJson(value));
            }}
        />
    );
}
