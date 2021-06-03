import { Button } from "antd";
import { signIn } from "next-auth/client";

export const Login = () => {
    return (
        <div>
            <Button onClick={() => signIn()}>github signin</Button>
        </div>
    );
};
