import React from "react";
import Footer from "./components/Footer";
import RouterLayout from "./routes/routeFile";
import { BrowserRouter as Router } from 'react-router-dom';
import { ContexProvider } from "./components/contextProvider";
// import { useSelector } from "react-redux"; removed the import

const Home = () => {
    // const isLoggedIn =  useSelector(state => state.auth.token); //removed it
    return (
        <Router>
                {/* <RouterLayout>
                </RouterLayout> */}
                <RouterLayout/>    {/*can be given like this if no children are present*/}
            <Footer />
        </Router>
    );
};

export default Home;