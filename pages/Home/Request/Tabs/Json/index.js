import { UnControlled as CodeMirror } from "react-codemirror2";
export default function Json() {
    return (
        <CodeMirror
            value="{}"
            options={{
                mode: "json",
                lineNumbers: true,
            }}
            onChange={(editor, data, value) => {
                console.log(data, value, editor);
            }}
        />
    );
}
