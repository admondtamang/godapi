import { Button } from "antd";
import { signIn } from "next-auth/client";

export default function Login() {
    return (
        <div>
            <Button onClick={() => signIn("github")}>github signin</Button>
        </div>
    );
}
