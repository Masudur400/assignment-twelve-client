import { BiError } from "react-icons/bi";
import { TbFaceIdError } from "react-icons/tb";
import { Link } from "react-router-dom";

 
const ErrorPage = () => {
    return (
        <div >
            <div className="flex flex-col gap-4 bg-gray-100 px-4 py-8 md:w-2/3 lg:w-1/3 mx-auto   items-center md:my-20">
                <p><BiError className="text-9xl text-red-500"></BiError></p>
                <h3 className="text-4xl font-bold">Page Not Found</h3>
                <h3 className="text-4xl font-bold flex gap-2"><TbFaceIdError className="text-5xl"></TbFaceIdError>404</h3>

                <Link to='/'><button className="btn bg-red-500 text-white px-4 py-2 rounded-md  ">Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;