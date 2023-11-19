import add from '../assets/add.svg';
import BW from '../assets/Shang-Chi-and-the-Legend-of-the-Ten-Rings-Releases-New 1.svg';
import ministar from '../assets/star.svg';
import SC from '../assets/2.png';
import LO from '../assets/3.png';
import HI from '../assets/4.png';
import MH from '../assets/5.png';
import F from '../assets/6.png';
import TB from '../assets/7.png';
import TA from '../assets/8.png';


function Foot({docs, addToWishlist}) {
    
    const tech = [docs]

    return ( 
        <div className="Foot">
            <div className="Foot__header">
                <h1 className="Foot__movies">Movies</h1>
                <div className="dg">
                    
                {tech.map(movie =>(
                    <div key={movie && movie[0] ? movie[0].id : 'error'} className="cart">
                        <div className='cart__up'>
                            <img src={ministar} alt="#" />
                            <p className="num">{movie && movie[0] && movie[0].rating && movie[0].rating.imdb ? movie[0].rating.imdb : 0}</p>
                        </div>
                            <img className='BW' src={movie && movie[0]&&movie[0].poster ? movie[0].poster.url : 'loading'} alt="#" />
                            <h1 className='cart__h1'>{movie && movie[0] && movie[0].alternativeName ? movie[0].alternativeName : 'loading'}</h1>
                            <div className='cart__foot'>
                                <img src={add} alt="#" />
                                <p onClick={() => addToWishlist(movie)} className="add">Add to my list</p>
                            </div>
                    </div>
            ))}
                    <div className="cart">
                        <div className='cart__up'>
                            <img src={ministar} alt="#" />
                            <p className="num">7.9</p>
                        </div>
                        <img className='BW' src={SC} alt="#" />
                        <h1 className='cart__h1'>Shang Chi</h1>
                        <div className='cart__foot'>
                            <img src={add} alt="#" />
                            <p className="add">Add to my list</p>
                        </div>
                    </div>
                    <div className="cart">
                        <div className='cart__up'>
                            <img src={ministar} alt="#" />
                            <p className="num">8.4</p>
                        </div>
                        <img className='BW' src={LO} alt="#" />
                        <h1 className='cart__h1'>Loki</h1>
                        <div className='cart__foot'>
                            <img src={add} alt="#" />
                            <p className="add">Add to my list</p>
                        </div>
                    </div>
                    <div className="cart">
                        <div className='cart__up'>
                            <img src={ministar} alt="#" />
                            <p className="num">8.3</p>
                        </div>
                        <img className='BW' src={HI} alt="#" />
                        <h1 className='cart__h1'>How I Met Your Mother</h1>
                        <div className='cart__foot'>
                            <img src={add} alt="#" />
                            <p className="add">Add to my list</p>
                        </div>
                    </div>
                    <div className="cart">
                        <div className='cart__up'>
                            <img src={ministar} alt="#" />
                            <p className="num">8.3</p>
                        </div>
                        <img className='BW' src={MH} alt="#" />
                        <h1 className='cart__h1'>Money Heist</h1>
                        <div className='cart__foot'>
                            <img src={add} alt="#" />
                            <p className="add">Add to my list</p>
                        </div>
                    </div>
                    <div className="cart">
                        <div className='cart__up'>
                            <img src={ministar} alt="#" />
                            <p className="num">8.8</p>
                        </div>
                        <img className='BW' src={F} alt="#" />
                        <h1 className='cart__h1'>Friends</h1>
                        <div className='cart__foot'>
                            <img src={add} alt="#" />
                            <p className="add">Add to my list</p>
                        </div>
                    </div>
                    <div className="cart">
                        <div className='cart__up'>
                            <img src={ministar} alt="#" />
                            <p className="num">8.1</p>
                        </div>
                        <img className='BW' src={TB} alt="#" />
                        <h1 className='cart__h1'>The Big Bang Theory</h1>
                        <div className='cart__foot'>
                            <img src={add} alt="#" />
                            <p className="add">Add to my list</p>
                        </div>
                    </div>
                    <div className="cart">
                        <div className='cart__up'>
                            <img src={ministar} alt="#" />
                            <p className="num">7</p>
                        </div>
                        <img className='BW' src={TA} alt="#" />
                        <h1 className='cart__h1'>Two And a Half Men</h1>
                        <div className='cart__foot'>
                            <img src={add} alt="#" />
                            <p className="add">Add to my list</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
     );
}

export default Foot;