// import React, { Component } from 'react';

// export default class ContactSection extends Component {
//   render() {
//     return (
//       <div className='btn-contact-wrapper'>
//         <button className='btn-contact'>
//           <div><u><strong>Contact</strong></u></div>
//           <br />
//           <div>Email: info@lifegivesyoupencils.com</div>
//           <div>Mailing:</div>
//           <div>P.O. Box 536</div>
//           <div>Peyton, CO 80831</div>
//         </button> 
//       </div>
//     );
//   }
// }

import React from 'react';

const ContactSection = () => {
  return (
    <center><div className='contact-wrapper'>     
        Contact<br />
        Email: info@lifegivesyoupencils.com<br/>
        Mailing:<br/>
        P.O. Box 536<br/>
        Peyton, CO 80831
    </div></center>
  );
};

export default ContactSection;
