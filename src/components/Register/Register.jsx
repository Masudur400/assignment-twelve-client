import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import { useState } from "react";
import {   FaRegEye, FaRegEyeSlash } from "react-icons/fa"; 
import { updateProfile } from "firebase/auth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Loading from "../Loading/Loading";
import { FcGoogle } from "react-icons/fc";

 



const Register = () => {

    const axiosPublic = useAxiosPublic()

    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [userSuccess, setUserSuccess] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const { createUser,googleLogin, loading } =  useAuth()
    const navigate = useNavigate();
    const location = useLocation();

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email')
        const photo = form.get('photo')
        const password = form.get('password')


        setUserSuccess('');
        setPasswordError('');
        setEmailError('');


        if (password.length < 6) {
            setPasswordError('Password should be at least 6 characters or longer')
            return;
        } else if (!/[A-Z]/.test(password)) {
            setPasswordError('password should have minimum one character in upper case')
            return;
        }



        createUser(email, password)
            .then(result => {
                console.log(result.user)
                // if (result.user) {
                    
                // }
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(()=>{
                        const userInfo ={
                            name: name,
                            email:email,
                            role:'user',
                            image:photo
                        }
                        axiosPublic.post('/users', userInfo)
                        .then(res =>{
                            if(res.data.insertedId){
                                Swal.fire({
                                    title: "Success!",
                                    text: "Register successfully!",
                                    icon: "success"
                                });
                            }
                        })
                    })
                    .catch(error => {
                        console.log(error)
                    })

                setUserSuccess('user created successfully')
                // navigate('/')
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error.message);
                setEmailError('email-already-in-used');

            })

    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result)

                const userInfo={
                    email:result.user?.email,
                    name:result.user?.displayName,
                    role:'user',
                    image:result.user?.photoURL
                }
                axiosPublic.post('/users', userInfo)
                if (result.user) {
                    Swal.fire({
                        title: "Success!",
                        text: "Login successfully!",
                        icon: "success"
                    });
                }
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error)
            })
    }

if(loading){
    return <Loading></Loading>
}

    return (
        <div className="min-h-screen">
            <Helmet>
                <title>SM || Register</title>
            </Helmet>
            <div data-aos="zoom-in-down"  className="w-4/5 lg:w-1/3 md:w-2/3 mx-auto bg-gray-100 shadow-xl p-5 rounded-lg my-20">
                <h2 className="text-2xl font-bold text-center my-3 animate__animated animate__rubberBand text-yellow-600">Please Register </h2>

                {
                    userSuccess && <p className="  text-green-500">{userSuccess}</p>
                }

                <form onSubmit={handleRegister}>

                    <p>Name</p>
                    <input className="border-2 rounded-md w-full px-4 py-2 mb-2" type="text" name="name" placeholder="Name" id="name" required />

                    <p>Photo URL</p>
                    <input className="border-2 rounded-md w-full px-4 py-2 mb-2" type="text" name="photo" placeholder="Photo URL" id="photo" />

                    <p>Email</p>
                    <input className="border-2 rounded-md w-full px-4 py-2 mb-2" type="email" name="email" placeholder="Email" id="email" required />
                    {
                        emailError && <p className="  text-red-500">{emailError}</p>
                    }

                    <p>Password</p>
                    <div className="relative">
                        <input className="border-2 rounded-md w-full px-4 py-2 mb-2" type={showPassword ? "text" : "password"} name="password" placeholder="Password" id="password" required />
                        <span className="absolute top-1/4 right-3" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>}
                        </span>
                    </div>


                    {
                        passwordError && <p className="text-red-500">  {passwordError}</p>
                    }

                    <input className=" w-full px-4 py-2 text-center text-lg rounded-md bg-yellow-600 hover:bg-yellow-700 border hover:border-black-500 text-white font-bold my-3" type="submit" value="Register" />
                </form>

                <p>Already have an account ? <Link to='/login' className="text-red-500 font-bold underline">please Login</Link></p>
                <div className="divider my-5"></div>
                <div className="mb-t">
                    <div>
                        <button onClick={handleGoogleLogin} className=" bg-gray-200 p-3 rounded-2xl flex gap-3 items-center w-full justify-center font-bold"> <FcGoogle className="text-3xl"></FcGoogle> Google</button>
                         
                    </div>
                     
                </div> 
            </div>
        </div>
    );
};

export default Register;