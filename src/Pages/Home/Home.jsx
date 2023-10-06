import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h1 className="text-2xl text-center">This is home page</h1>
            <div className="grid grid-cols-4 gap-4 text-center">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2 border">
                    <h1>News Coming soon</h1>
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;