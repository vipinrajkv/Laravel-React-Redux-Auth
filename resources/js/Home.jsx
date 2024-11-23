import React from "react";
import Footer from "./components/Footer";
import RouterLayout from "./routes/routeFile";
import { BrowserRouter as Router } from 'react-router-dom';
import { ContexProvider } from "./components/contextProvider";
import { useSelector } from "react-redux";

const Home = () => {
    const isLoggedIn =  useSelector(state => state.auth.token);
    return (
        <Router>
                <RouterLayout>
                </RouterLayout>
            <Footer />
        </Router>
    );
};

export default Home;