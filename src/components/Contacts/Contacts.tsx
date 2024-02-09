import React from 'react';
import Footer from '../Footer/Footer';

const Contacts: React.FC = () => {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <div className="container container-fluid flex-grow-1">
        <h1 className="mt-3">Contact me</h1>
        <hr className="my-4"/>

        <address>
          <p className="mb-1 fs-4"><strong>Address:</strong> 3854 N. Damen Ave, Chicago, IL, 60618</p>
          <p className="mb-1 fs-4"><strong>Phone:</strong> +1 (773) 461-9388</p>
          <p className="mb-1 fs-4"><strong>WhatsApp/Telegram:</strong> +996 755 69 69 99</p>
          <p className="mb-1 fs-4"><strong>Email:</strong> chomoevbeksultan@gmail.com</p>
        </address>

        <p className="mt-5 fs-4">Feel free to ask me any questions you have.</p>
      </div>
      <Footer/>
    </div>
  );
};

export default Contacts;