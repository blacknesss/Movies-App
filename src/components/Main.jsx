import stars from '../assets/Group 2.svg';
import play from '../assets/Polygon 1.svg';
import arr from '../assets/ic_round-navigate-next.svg';

function Main({data}) {

    const datany = data.docs

    if(data && data.docs && data.docs[0]){
        const fullName = data.docs[0].alternativeName;

        const parts = fullName.split(':');
        var part1 = parts[0].trim();
        var part2 = parts.slice(1).join(':').trim();
    }
    // slider
    const carousel = document.querySelector('.PM');
    
    
    let isDragStart = false, prevPageX, prevScrollLeft;

    const dragStart = (e) =>{
        isDragStart = true;
        prevPageX = e.pageX;
        prevScrollLeft = carousel.scrollLeft;
    }
    const dragging = (e) => {
        if(!isDragStart) return;
        e.preventDefault();
        let positionDiff = e.pageX - prevPageX;
        carousel.scrollLeft = prevScrollLeft - positionDiff;
    }
    const dragStop = () =>{
        isDragStart = false;
    }

    const slider = () =>{
        carousel.scrollLeft += 206;
        console.log(carousel.scrollLeft);
        if(carousel.scrollLeft === 399){
            carousel.scrollLeft = 0
        }
    }

    return ( 
        <div className="main">
            <div className='main__contentblock'>
                <h1  className='name'>{data && data.docs && data.docs[0] ? part1 : 'STAR WARS'}</h1>
                <h2 className='name fc50'>{data && data.docs && data.docs[0] ? part2 : 'The rise of somewhere'}</h2>
                <p id='description'>{data && data.docs && data.docs[0] && data.docs[0].description.length > 0 ? data.docs[0].description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, consequuntur, harum officia assumenda repellat numquam dolor cum aliquam sunt commodi quos excepturi provident corrupti aperiam vero minima rerum. Culpa, voluptas.'}</p>
                <a className='stars' href="#"><img className='stars' src={stars} alt="err"/></a>
            </div>
            <div className='main__underblock'>
                <div className='WN'>
                    <img src={play} alt="err" />
                    <a href="#"><span className='WatchNow'>Watch Now</span></a>
                </div>
                
                <a href="#"><span className='Trailer'>Trailer</span></a>
            </div>
            <div className="main__lastblock">
                <h1 className='PM-text'>Popular Movies</h1>
                <div className='wrapper-slider'>
                    <div onMouseUp={dragStop} onMouseDown={e => dragStart(e)} onMouseMove={e => dragging(e)} className='PM'>
                    {datany ? datany.map((item, index) => (
                        <img id='img' key={index} className='CA' src={item.poster.url} alt="#" />
                    )) : ''}    
                    </div>
                    <div onClick={slider} className="arrow">
                        <img src={arr} alt="#" />
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Main;