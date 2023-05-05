import { SignIn } from "@clerk/nextjs/app-beta";
import { View } from "reshaped";

const page = () => {
    return (
        <View direction="row" align="center" justify="center" height="100vh">
            <SignIn signUpUrl="/sign-up" />
        </View >
    );
}

export default page;