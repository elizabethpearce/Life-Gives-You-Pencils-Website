// import React, { Component } from 'react';
// import Home from "./pages/home.js";
// import './main.scss';

// export default class App extends Component {
//   render() {
//     return (      
//       <div className='app'>
//         <Home/>
//       </div>
//     );
//   }
// }

import React from 'react';
import Home from './pages/home.js';
import './main.scss';

const App = () => {
  return (
    <div className="app">
      <Home />
    </div>
  );
};

export default App;