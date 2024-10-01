import { Children, cloneElement, useEffect, useState } from 'react';
import arrRight from '../assets/ic_round-navigate-next.svg';

export default function Slider({children}) {

  const [pages,setPages] = useState([])
  useEffect (() =>{

    setPages(
      Children.map(children, child =>{
        return cloneElement(child)
      })
    )
  },[children]) //надо было просто добавить это в массив зависимостей
  

  const [offset, setOffset] = useState(0);

  const pageWidth = 236; //min-width + col-gap

  const handleRightClick = () => {
    setOffset((curr) => {
      
      let newOffset = curr - pageWidth;
      
      const maxOffset = -(pageWidth * (pages.length - 6));
      
      
      if (newOffset < maxOffset){
        return newOffset = 0
      }
      return newOffset
    })
  }
  

  return (
    <div className='slider'>
      <h1 className='slider__h1'>Popular Movies</h1>
      <div className="main-container">
        <div className="window">
          <div className='all-pages-container'
            style={{
              transform: `translateX(${offset}px)`
            }}
          >
            {pages}
          </div>
        </div>
        <img className='arrRight' onClick={() => handleRightClick()} src={arrRight} alt="#" />
      </div>
    </div>
  )
}