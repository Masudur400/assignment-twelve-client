import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Loading from "../Loading/Loading";

 
const Profile = () => {
    const { user, loading } =  useAuth() 

    const date = new Date(user?.metadata?.creationTime)
    const formattedDateOnly = date.toLocaleDateString()
    const formattedDate = date.toLocaleString();

    if(loading){
        return <Loading></Loading>
    }

    return (
        <div className="flex justify-center items-center min-h-screen">
            <Helmet>
                <title>SM || Profile</title>
            </Helmet>

            {
                user && <div data-aos="zoom-in-down" className="w-4/5 lg:w-1/3 md:w-2/3 mx-auto border  shadow-2xl p-5 rounded-lg my-20">

                    <div className="flex justify-center">
                        <img className="bg-red-100  w-52 h-52 rounded-full" referrerPolicy="no-referrer" src={user?.photoURL} alt="" />
                    </div>

                    <h2 className="md:text-2xl text-lg my-5 font-bold text-center">Name : {user?.displayName || 'Gest'}</h2>

                    <p className="text-center mb-5">Email: {user?.email || "User"}</p>
                    <p className="text-center mb-5">Creation Time: {formattedDate}</p>

                    <div className="flex justify-center">
                        <Link to='/updateProfile'><button className="px-4 py-2 rounded-md bg-yellow-600 hover:bg-yellow-700 border hover:border-black-500 text-white font-bold">Update Profile</button></Link>
                    </div>

                </div>
            }

        </div>
    );
};

export default Profile;