import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import NavMob from "./NavMob";

const Home = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <div className="navmob">
        <NavMob />
      </div>
    </>
  );
};

export default Home;
