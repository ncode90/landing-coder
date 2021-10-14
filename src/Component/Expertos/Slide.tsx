import React from "react";
import { Link } from "react-router-dom"
import Exp1 from '../../assets/images/expertos/e1.png'
import Exp2 from '../../assets/images/expertos/e2.png'
import Exp3 from '../../assets/images/expertos/e3.png'
import Exp4 from '../../assets/images/expertos/e4.png'
import Exp5 from '../../assets/images/expertos/e5.png'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { slidesToShowPlugin, autoplayPlugin, infinitePlugin} from '@brainhubeu/react-carousel';
//import Icon from 'react-fa';


const MyCarousel = () => (
    <Carousel
        plugins={[
            'rtl', 
            //'arrows',
            'infinite',
            'centered',
            'fastSwipe',
                {
                resolve: slidesToShowPlugin,
                options: {
                numberOfSlides: 3
                }
            },
            {
                resolve: autoplayPlugin,
                options: {
                  interval: 2000,
                }
            },
            {
                resolve: infinitePlugin,
                options: {
                  numberOfInfiniteClones: 3,
                }
            },
        ]}
        breakpoints={{
            640: {
                plugins: [
                {
                    resolve: slidesToShowPlugin,
                    options: {
                    numberOfSlides: 1
                    }
                },
                ]
            },
            900: {
                plugins: [
                {
                    resolve: slidesToShowPlugin,
                    options: {
                    numberOfSlides: 2
                    }
                },
                ]
            }
        }}
        animationSpeed={1000}
    >
        
        <div className="thumbs">
            <Link to="/Exp">
                <img className="img-circle" src={Exp1} alt="" />
                <p>LU CORDERO</p>
            </Link>
        </div>
        <div className="thumbs">
            <Link to="/Exp">
                <img className="img-circle" src={Exp2} alt="" />
                <p>
                    CHRIS LOPEZ
                </p>
            </Link>
        </div>
        <div className="thumbs">
            <Link to="/Exp">
                <img className="img-circle" src={Exp3} alt="" />
                <p>
                    SANDRA PEREZ
                </p>
            </Link>
        </div>
        <div className="thumbs">
            <Link to="/Exp">
            <img className="img-circle" src={Exp4} alt="" />
            <p>
                LARA FUENTES
            </p>
            </Link>
        </div>
        <div className="thumbs">
            <Link to="/Exp">
            <img className="img-circle" src={Exp5} alt="" />
            <p>
                PEDRO GONZALEZ
            </p>
            </Link>
        </div>
            
    </Carousel>
  );
  
  export default MyCarousel;
