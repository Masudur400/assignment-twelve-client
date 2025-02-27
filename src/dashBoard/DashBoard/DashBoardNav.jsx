import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useAdmin from "../../components/Hooks/useAdmin";
import useModerator from "../../components/Hooks/useModerator";
import { CgProfile } from "react-icons/cg";
import { MdAssignmentAdd, MdOutlineRateReview } from "react-icons/md";
import { VscPreview } from "react-icons/vsc";
import { FiUsers } from "react-icons/fi";
import Loading from "../../components/Loading/Loading";
import { IoNewspaperSharp } from "react-icons/io5";

const DashBoardNav = () => {

    const [isAdmin ,isAdminLoading] = useAdmin()
    const [isModerator ,isModeratorLoading] = useModerator()
     

    if(isAdminLoading || isModeratorLoading){
        return <Loading></Loading>
    }


    const links = <>

        <li><NavLink to="/" className={({ isActive }) => isActive ? '  text-white bg-yellow-500 hover:bg-yellow-400 font-bold btn btn-sm border-none underline' : ''} ><FaHome></FaHome> Home</NavLink></li>

        <li><NavLink to="/dashboard/dashboardProfile" className={({ isActive }) => isActive ? 'underline  text-white bg-yellow-500 hover:bg-yellow-400 md:font-bold btn btn-sm border-none flex gap-1 items-center justify-center' : 'flex gap-1 items-center justify-center'} ><CgProfile className="text-xl"></CgProfile> My Profile</NavLink></li>

        {isAdmin ?
            <>


                <li><NavLink to="/dashboard/allAppliedScholarship" className={({ isActive }) => isActive ? '  text-white underline bg-yellow-500 hover:bg-yellow-400 md:font-bold btn btn-sm border-none' : ''} >All Applied Scholarship</NavLink></li>

                <li><NavLink to="/dashboard/allReview" className={({ isActive }) => isActive ? '  text-white underline bg-yellow-500 hover:bg-yellow-400 md:font-bold btn btn-sm border-none flex gap-1 items-center justify-center' : 'flex gap-1 items-center justify-center'} ><VscPreview className="text-xl"></VscPreview> All Reviews</NavLink></li>

                <li><NavLink to="/dashboard/users" className={({ isActive }) => isActive ? '  text-white underline bg-yellow-500 hover:bg-yellow-400 md:font-bold btn btn-sm border-none flex gap-1 items-center justify-center' : 'flex gap-1 items-center justify-center'} ><FiUsers></FiUsers> Manage Users</NavLink></li>

                <li><NavLink to="/dashboard/addScholarship" className={({ isActive }) => isActive ? '  text-white underline bg-yellow-500 hover:bg-yellow-400 md:font-bold btn btn-sm border-none flex gap-1 items-center justify-center' : 'flex gap-1 items-center justify-center'} ><MdAssignmentAdd className="text-xl"></MdAssignmentAdd> Add Scholarship</NavLink></li>

                <li><NavLink to="/dashboard/manageScholarship" className={({ isActive }) => isActive ? '  text-white underline bg-yellow-500 hover:bg-yellow-400 md:font-bold btn btn-sm border-none' : ''} >Manage Scholarship</NavLink></li>

            </>
            : isModerator ?
                <>

                    <li><NavLink to="/dashboard/allAppliedScholarship" className={({ isActive }) => isActive ? '  text-white underline bg-yellow-500 hover:bg-yellow-400 md:font-bold btn btn-sm border-none' : ''} >All Applied Scholarship</NavLink></li>

                    <li><NavLink to="/dashboard/allReview" className={({ isActive }) => isActive ? '  text-white underline bg-yellow-500 hover:bg-yellow-400 md:font-bold btn btn-sm border-none flex gap-1 items-center justify-center' : 'flex gap-1 items-center justify-center'} ><VscPreview className="text-xl"></VscPreview> All Reviews</NavLink></li>

                    <li><NavLink to="/dashboard/addScholarship" className={({ isActive }) => isActive ? '  text-white underline bg-yellow-500 hover:bg-yellow-400 md:font-bold btn btn-sm border-none' : ''} >Add Scholarship</NavLink></li>

                    <li><NavLink to="/dashboard/manageScholarship" className={({ isActive }) => isActive ? '  text-white underline bg-yellow-500 hover:bg-yellow-400 md:font-bold btn btn-sm border-none' : ''} >Manage Scholarship</NavLink></li>

                </>
                :
                <>

                    <li><NavLink to="/dashboard/myApplication" className={({ isActive }) => isActive ? '  text-white underline bg-yellow-500 hover:bg-yellow-400 md:font-bold btn btn-sm border-none flex gap-1 items-center justify-center' : 'flex gap-1 items-center justify-center'} > <IoNewspaperSharp className="text-xl"></IoNewspaperSharp>  My Application</NavLink></li>

                    <li><NavLink to="/dashboard/myReviews" className={({ isActive }) => isActive ? '  text-white underline bg-yellow-500 hover:bg-yellow-400 md:font-bold btn btn-sm border-none flex gap-1 items-center justify-center' : 'flex gap-1 items-center justify-center'} ><MdOutlineRateReview className="text-xl"></MdOutlineRateReview>  My Reviews</NavLink></li>

                </>} 
 
    </>

    return (
        <div className="bg-yellow-500 py-2 ">
            <h2 className="text-3xl text-center font-bold text-white hidden md:block">dashboard</h2>
            <div className=" md:w-1/3 mx-auto my-2 border-b-2 border-white hidden md:block"></div>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn text-white btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[99] p-2 shadow bg-base-100 rounded-box w-52 font-bold">
                            {links}
                        </ul>
                    </div>
                    <h2 className="text-3xl text-center font-bold text-white md:hidden">dashboard</h2>

                </div>
                <div className="navbar-center hidden md:flex md:max-w-full">
                    <ul className="menu menu-horizontal px-1  font-bold text-white text-left">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">

                </div>
            </div>
        </div>
    );
};

export default DashBoardNav;