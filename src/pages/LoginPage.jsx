import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import logo from "../assets/logo.png";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string().required("Password is required"),
    })
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        // http://82.112.241.233:1993/api/auth/local
        let domain = "http://82.112.241.233:1993";
        let endPoint = "/api/auth/local";
        let url = domain + endPoint
        let data = {
            identifier: values.email,
            password: values.password
        }
        axios.post(url, data)
        .then((res) => {
            console.log(res);
            toast.success("Login Successfully");
            sessionStorage.setItem("jwt", res.data.jwt);
            navigate("/");
        })
            .catch((err) => {
                console.log(err);
                const message = err.response?.data?.error?.message || "Something went wrong, please try again.";
                toast.error(message);
        })
    }
    return (
        <div className="grid grid-cols-6 max-h-screen bg-[#111418]">
            <Toaster position="top-center" reverseOrder={false} />
            <div className="col-span-2 h-screen relative">
                <img src="https://harnishdesign.net/demo/html/oxyy/images/login-bg-6.jpg" alt="" className=" w-full h-full object-cover" />
                <div className="absolute top-0 h-full w-full bg-black opacity-40"></div>
                <div className="logo absolute top-[1rem] left-[1rem] w-20 h-20 ">
                    <img src={logo} alt="" />
                </div>
                <div className="absolute top-0 h-full w-full  ">
                    <h1 className="text-5xl text-white leading-15 font-light mt-30 px-10 opacity-100 font-inter">
                        <span className="font-medium">Welcome,</span> We are glad to see you again!
                    </h1>
                </div>
            </div>

            <div className="col-span-4 h-screen">
                <div className="w-[80%] mx-auto h-full flex justify-center items-center">
                    <div className="flex flex-col justify-center gap-7">
                        <p>
                            Not a member?
                            <span>
                                <Link to="/register" className="text-[#605dff] font-bold">
                                    Register Now
                                </Link>
                            </span>
                        </p>
                        <h2 className="text-3xl font-bold">Login to your account</h2>
                        <div className="flex gap-4">
                            <button className="btn bg-[#605dff] flex items-center">
                                <FaGoogle className="mr-2 w-5 h-5" /> Login with Google
                            </button>
                            <button className="btn flex items-center">
                                <FaApple className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="w-[30rem] mx-auto flex items-center gap-3">
                            <span className="flex-1 h-px bg-[rgba(255,255,255,0.3)]" />
                            <span className="text-md text-gray-400 ">Or</span>
                            <span className="flex-1 h-px bg-[rgba(255,255,255,0.3)]" />
                        </div>
                        <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit} validationSchema={validationSchema}>
                            <Form className="flex flex-col gap-4">
                                <label htmlFor="email" className="text-sm text-[#a3a3a3]">
                                    Email
                                </label>
                                <Field name="email" type="text" placeholder="Email" className="py-4 bg-[#232a31] px-3 rounded-md w-full" />
                                <ErrorMessage name="email" component="p" className="text-red-500" />
                                <label htmlFor="password" className="text-sm text-[#a3a3a3]">
                                    Password
                                </label>
                                <Field name="password" type="text" placeholder="Password" className="py-4 bg-[#232a31] px-3 rounded-md w-full" />
                                <ErrorMessage name="password" component="p" className="text-red-500" />
                                <a href="#" className="text-[#605dff]">
                                    Forgot Password ?
                                </a>
                                <button type="submit" className="btn bg-[#605dff]">
                                    Login
                                </button>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
}
