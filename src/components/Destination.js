import Mountain1 from '../assets/1.jpg';
import Mountain2 from '../assets/2.jpg'
import Mountain3 from '../assets/5.jpg'
import Mountain4 from '../assets/8.jpg'
import DestinationData from './DestinationData';
import './DestinationStyles.css'



const Destination =()=>{
    return(
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity tour to see a lot, within a time frame</p>
             <DestinationData
              className='first-des'
              heading='Taal Volcano, Batangas'
              text='Lorem, ipsum dolor sit amet consectetur 
              adipisicing elit. Voluptas tempore delectus quo dolor, est sit saepe dolores enim neque, nostrum ut magnam similique. Temporibus facere reprehenderit
               harum, dolore perspiciatis doloremque.
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam accusamus odio quam corporis eum. Et modi distinctio labore quod. Voluptates quae blanditiis perspiciatis? 
               Numquam nam veniam dolor quia dolorum dolore!'
               img1={Mountain1}
               img2={Mountain2}
             />


              <DestinationData
              className='first-des-reverse'
              heading='Mt.daguldul, Batangas'
              text='Lorem Ipsum adalah text contoh digunakan didalam industri pencetakan dan typesetting. Lorem Ipsum telah menjadi text contoh semenjak tahun ke 1500an, apabila pencetak yang kurang terkenal mengambil sebuah galeri cetak dan merobakanya menjadi satu buku spesimen. Ia telah bertahan bukan hanya selama lima kurun, tetapi telah melonjak ke era typesetting elektronik, dengan tiada perubahan ketara. Ia telah dipopularkan pada tahun 1960an dengan penerbitan Letraset yang mebawa kangungan Lorem Ipsum, dan lebih terkini dengan sofwer pencetakan desktop seperti Aldus PageMaker yang telah menyertakan satu versi Lorem Ipsum.'
               img1={Mountain3}
               img2={Mountain4}
             />


            {/* <div className="first-des">
                <div className="des-text">
                    <h1>Tal Volcano, Batangas</h1>
                    <p> Lorem, ipsum dolor sit amet consectetur 
                        adipisicing elit. Voluptas tempore delectus quo dolor, est sit saepe dolores enim neque, nostrum ut magnam similique. Temporibus facere reprehenderit
                         harum, dolore perspiciatis doloremque.
                         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam accusamus odio quam corporis eum. Et modi distinctio labore quod. Voluptates quae blanditiis perspiciatis? 
                         Numquam nam veniam dolor quia dolorum dolore!
                         </p>


                </div>

                <div className="image">
                    <img src={Mountain1} alt="img" />
                    <img src={Mountain2} alt="img" />

                </div>
            </div> */}
        </div>
    )
}

export default Destination