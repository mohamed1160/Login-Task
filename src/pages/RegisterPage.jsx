import { ErrorMessage, Field, Form, Formik } from "formik";

import logo from "../assets/logo.png";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function RegisterPage() {
    return (
        <div className="grid grid-cols-6 max-h-screen bg-[#111418]">
            <div className="col-span-2 h-screen relative">
                <img src="https://harnishdesign.net/demo/html/oxyy/images/login-bg-6.jpg" alt="" className=" w-full h-full object-cover" />
                <div className="absolute top-0 h-full w-full bg-black opacity-40"></div>
                <div className="logo absolute top-[1rem] left-[1rem] w-20 h-20 ">
                    <img src={logo} alt="" />
                </div>
                <div className="absolute top-0 h-full w-full  ">
                    <h1 className="text-5xl text-white leading-15 font-light mt-30 px-10 opacity-100 font-inter">
                        <span className="font-medium">Welcome,</span> Looks like you're new here!
                    </h1>
                </div>
            </div>

            <div className="col-span-4 h-screen">
                <div className="w-[80%] mx-auto h-full flex justify-center items-center">
                    <div className="flex flex-col justify-center gap-4">
                        <p>
                            Already a member?
                            <span>
                                <Link to="/login" className="text-[#605dff] font-bold">
                                    Login
                                </Link>
                            </span>
                        </p>
                        <h2 className="text-3xl font-bold">Register Your Account</h2>
                        <div className="flex gap-4">
                            <button className="btn bg-[#605dff] flex items-center">
                                <FaGoogle className="mr-2 w-5 h-5" /> Register with Google
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
                        <Formik>
                            <Form className="flex flex-col gap-4">
                                <label htmlFor="email" className="text-sm text-[#a3a3a3]">
                                    Full Name
                                </label>
                                <Field name="email" type="text" placeholder="Full Name" className="py-3 bg-[#232a31] px-3 rounded-md w-full" />
                                <label htmlFor="email" className="text-sm text-[#a3a3a3]">
                                    Email
                                </label>
                                <Field name="email" type="text" placeholder="Email" className="py-3 bg-[#232a31] px-3 rounded-md w-full" />

                                <label htmlFor="password" className="text-sm text-[#a3a3a3]">
                                    Password
                                </label>
                                <Field name="password" type="text" placeholder="Password" className="py-3 bg-[#232a31] px-3 rounded-md w-full" />

                                <div className="flex items-center gap-2">
                                    <input type="checkbox" defaultChecked className="checkbox" />
                                    <label className="text-md text-[#fff] flex items-center gap-1">
                                        I agree to the <a className="text-[#605dff]">Terms </a> and <a className="text-[#605dff]"> Privacy Policy </a>.
                                    </label>
                                </div>
                                <button type="submit" className="btn bg-[#605dff]">
                                    Register
                                </button>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
}
