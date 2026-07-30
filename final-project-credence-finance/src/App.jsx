import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Navbar from "./Components/Navbar";
import Auth from "./Components/Auth";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Abouts from "./Components/AboutS";
import Services from "./Components/Service";
import Contact from "./Components/Contact";
import MLTraining from "./Components/MLTraining";
import PythonTraining from "./Components/PythonTraining";
import ITServices from "./Components/ITServices";
import ITWebDev from "./Components/it/ITWebDev";
import ITMobileApps from "./Components/it/ITMobileApps";
import ITCloudMigration from "./Components/it/ITCloudMigration";
import ITProductDev from "./Components/it/ITProductDev";
import ITSoftwareMaintenance from "./Components/it/ITSoftwareMaintenance";
import Cloud from "./Components/Cloud";
import Aiml from "./Components/Aiml";
import TermsAndConditions from "./Components/TermsConditions";
import Privacy from "./Components/Privacy";
import Disclosure from "./Components/Disclosure";
import Footer from "./Components/Footer";
import BlogOne from "./Components/Blog/BlogOne";
import Bpage from "./Components/Blog/Bpage";
import Bpagetwo from "./Components/Blog/Bpagetwo";
import BpageThree from "./Components/Blog/Bpagethree";
import Pythontwo from "./Components/Pythontwo";
import Cloudtwo from "./Components/Cloudtwo";
import MutualCardOne from "./Components/MutualCardOne";
import MutualCardTwo from "./Components/MutualCardTwo";
import Question from "./Components/Question";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // This enables carousel functionality


import { login } from "./features/authSlice";

function PrivateRoute({ children }) {
  const user = useSelector(state => state.auth.user);
  return user ? children : <Navigate to="/login" />;
}

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("loggedInUser");
    if (storedUser && !user) {
      dispatch(login(JSON.parse(storedUser)));
    }
    setLoading(false);
  }, [dispatch, user]);

  if (loading) return <div>Loading...</div>;

  // Hide Navbar on login/signup
  const hideNavbarPaths = ["/login", "/signup"];
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <div>
      {!shouldHideNavbar && <Navbar />}
      <main className="pt-5">
        <Routes>
          <Route path="/login" element={!user ? <Auth /> : <Navigate to="/home" />} />
          <Route path="/signup" element={!user ? <Auth /> : <Navigate to="/home" />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Abouts />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Cardone" element={<MutualCardOne />} />
          <Route path="/Cardtwo" element={<MutualCardTwo />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/disclosure" element={<Disclosure/>} ></Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/itservices" element={<ITServices />} />
          <Route path="/itservices/mltraining" element={<MLTraining />} />
          <Route path="/itservices/pythontraining" element={<PythonTraining />} />
          <Route path="/itservices/ptraining" element={<Pythontwo />} />
          <Route path="/itservices/web-development" element={<ITWebDev />} />
          <Route path="/itservices/mobile-apps" element={<ITMobileApps />} />
          <Route path="/itservices/cloud" element={<Cloud />} />
          <Route path="/itservices/cloudtwo" element={<Cloudtwo />} />
          <Route path="/itservices/aiml" element={<Aiml />} />
          <Route path="/itservices/product-development" element={<ITProductDev />} />
          <Route path="/itservices/software-maintenance" element={<ITSoftwareMaintenance />} />
          <Route path="/BlogOne" element={<BlogOne />} />
          <Route path="/blogs/cloud-internship" element={<Cloud />} />
          <Route path="/blogs/ml-internship" element={<MLTraining />} />
          <Route path="/blogs/python-internship" element={<PythonTraining />} />
          <Route path="/Bpage" element={<Bpage />} />
          <Route path="/Question" element={<Question />} />
          <Route path="/Bpagetwo" element={<Bpagetwo />} />
          <Route path="/bpagethree" element={<BpageThree />} />
          <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      {/* {user && <Footer />} */}
   {!hideNavbarPaths.includes(location.pathname) && <Footer />}

      {/* <Footer/> */}
    </div>
  );
}

export default App;
