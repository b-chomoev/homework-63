import React from 'react';
import myPicture from '../../assets/myPicture.jpg';
import Footer from '../Footer/Footer';

const AboutMe: React.FC = () => {
  return (
    <>
      <div className="container container-fluid">
        <h1 className="mt-3">Explore My Personal Information</h1>
        <hr className='my-4'/>
        <img style={{maxWidth: '35%', float: 'left', marginRight: '30px'}} src={myPicture} alt="This is my picture"
             className="mb-5 img-fluid rounded-4 shadow-lg"/>
        <p style={{fontFamily: 'YourChosenFont, sans-serif'}} className='fs-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque doloremque laboriosam quasi vero. Commodi consequuntur cupiditate delectus dignissimos doloremque ea et eum explicabo facilis, inventore laboriosam minima mollitia non, nostrum nulla odio praesentium quas qui reiciendis repellat sed soluta tempore vitae. Aliquid asperiores assumenda, cumque dolor dolore exercitationem facere facilis fuga, illum libero magnam minus molestiae provident quae repellendus! Aspernatur at blanditiis cumque cupiditate dolorem eligendi eos, totam! Assumenda, dolorem dolores enim excepturi ipsum laudantium, mollitia neque obcaecati omnis placeat quae qui, quibusdam quod reiciendis unde voluptatem voluptatibus. Accusantium, modi, quasi? Ab ad alias at beatae commodi corporis doloremque eaque earum eligendi est, explicabo facere fugit harum hic impedit iure labore mollitia neque obcaecati officiis possimus quae quas qui quibusdam quo recusandae, reiciendis rem repudiandae similique sint tempora tenetur totam unde vel vitae voluptates voluptatum? Aliquid animi blanditiis delectus dignissimos, eos itaque molestiae optio provident quia quisquam repellat, repellendus sint.</p>
        <p style={{fontFamily: 'YourChosenFont, sans-serif'}} className='fs-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aut delectus ea in ipsum itaque nihil, nostrum quasi qui ratione sint tenetur voluptatibus! Accusantium consequatur consequuntur cum debitis dolor dolore doloribus dolorum eligendi error eum fugit hic illum impedit in incidunt inventore iste itaque laudantium magnam maxime modi, molestias necessitatibus officia, perspiciatis placeat possimus quam quasi qui quidem quos rem repellendus repudiandae soluta sunt unde vel vero. Debitis doloribus est hic itaque molestiae nesciunt optio quam quibusdam sed! Dolor dolorum esse est fugiat fugit ipsa iure magnam maxime natus possimus quasi quis, quisquam quos rem repellat reprehenderit soluta, sunt voluptatum!</p>
        <p style={{fontFamily: 'YourChosenFont, sans-serif'}} className='fs-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At enim incidunt obcaecati optio saepe sunt ullam ut! Beatae consectetur cum deserunt dolore expedita harum iure libero, natus, necessitatibus, pariatur porro quae quisquam recusandae sint soluta tempora voluptatum. At blanditiis dignissimos eaque error et fugiat impedit itaque maiores modi nobis nostrum nulla, odio perferendis perspiciatis, similique sunt tempore veniam voluptatem! Quisquam veniam vitae voluptate voluptates? Accusantium adipisci asperiores cum ipsum labore minus officiis, perspiciatis sed vel?</p>
      </div>
      <Footer/>
    </>
  );
};

export default AboutMe;