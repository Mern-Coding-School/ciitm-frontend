import React, { useEffect } from 'react';
import Body from './Body';
import {
   BrowserRouter,
   Route,
   Routes,
   useLocation,
} from 'react-router-dom';

import ErrorPage from './components/ErrorPage';
import About from './pages/About';
import Landing from './pages/Home';
import Student from './pages/Student';
import Album_Image from './components/Album_Image_Components/Album_Image';
import ContactUs from './pages/ContactUs';
import Loader from './components/Loader';
import Admission from './pages/Admission';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import DOMPurify from 'dompurify'; 


const ScrollRestoration = () => {
   const location = useLocation();

   useEffect(() => {
      const savedPosition = sessionStorage.getItem(
         `scroll-${location.pathname}`,
      );
      if (savedPosition) {
         window.scrollTo(0, parseInt(savedPosition, 10));
      }

      const handleBeforeUnload = () => {
         sessionStorage.setItem(
            `scroll-${location.pathname}`,
            window.scrollY,
         );
      };

      window.addEventListener('beforeunload', handleBeforeUnload);
      return () => {
         handleBeforeUnload(); // Save scroll before leaving
         window.removeEventListener(
            'beforeunload',
            handleBeforeUnload,
         );
      };
   }, [location]);

   return null;
};


   const userInput = "<img src='x' onerror='alert(1)' />";  


   const sanitizedInput = DOMPurify.sanitize(userInput);


const App = () => {
   useEffect(() => {
      window.onload = () => {
         return <Loader />;
      };
   }, []);

   return (
      <>
         <BrowserRouter basename='/'>

            <ScrollRestoration /> {/* ✅ Add Scroll Restoration */}

            <Routes>
               <Route path='/' element={<Body />}>
                  <Route path='/' element={<Landing />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/contact' element={<ContactUs />} />
                  <Route path='/student' element={<Student />} />
                  <Route path='/admission' element={<Admission />} />
                  <Route path='/album/:name' element={<Album_Image />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/signup' element={<Signup />} />
               </Route>
               <Route path='*' element={<ErrorPage />} />
            </Routes>
            <div dangerouslySetInnerHTML={{ __html: sanitizedInput }} />
         </BrowserRouter>
      </>
   );
};

export default App;
