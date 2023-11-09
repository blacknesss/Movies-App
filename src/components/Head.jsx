import Header from "./Header";
import Main from "./Main";


function Head() {

    const lInvisible = () =>{
        let s = document.querySelector('.search-abs');
        let list = document.querySelector('.search');
        list.classList.remove('inv');
        s.classList.add('inv');
    }

    return ( 
        <div className="Head">
            <Header lInvisible={lInvisible}/>
            <Main lInvisible={lInvisible}/>
        </div>
     );
}

export default Head;