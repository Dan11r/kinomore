import {Footer} from "@/components/Footer/Footer";
import {Header} from "@/components/Header/Header";
import {SignIn} from "@/components/screens/Auth/components/SignIn/SignIn";
import {NextPage} from "next";

const SignInPage: NextPage = () => {
    return (
        <>
            <Header />
            <main className='main'>
                <SignIn />
            </main>
            <Footer />
        </>
    );
};

export default SignInPage;