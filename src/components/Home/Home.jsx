import { Helmet } from "react-helmet";
import Carosel from "../Slider/Carosel";
import MostRankingScholarship from "../MostRankingScholarship/MostRankingScholarship"; 
import ReviewSection from "./ReviewSection";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>SM || Home</title>
            </Helmet>

            <div>
                <Carosel></Carosel>
            </div>
            <div>
                <MostRankingScholarship></MostRankingScholarship>
            </div>
             <div>
                <ReviewSection></ReviewSection>
             </div>
        </div>
    );
};

export default Home;