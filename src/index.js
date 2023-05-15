import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import './main.scss';
import './fixed-nav.css';
import App from './App';
import Home from './pages/home';
import Shop from './pages/shop';
import Services from './pages/services';
import Gallery from './pages/gallery';
import EventsAndNews from './pages/events-and-news';
import About from './pages/about';
import Contact from './pages/contact';
import Cart from './pages/cart';
import ErrorPage from './pages/error-page';
import reportWebVitals from './reportWebVitals';




// import React from 'react';
// import ReactDOM from 'react-dom';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './index.css';
// import './main.scss';
// import App from './App';
// import Home from './pages/home';
// import About from './pages/about';
// import ErrorPage from './pages/error-page';
// import reportWebVitals from './reportWebVitals';


const router = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="services" element={<Services />} />
      <Route path="events-news" element={<EventsAndNews />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="cart" element={<Cart />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {router}
  </React.StrictMode>
);









// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//   },

//   {
//     path: "home/",
//     element: <Home />
//   },
//   {
//     path: "about/",
//     element: <About />
//   }
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );





// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
