import Header from "./Header";
import Main from "./Main";


function Head({data, setName,}) {

    


    return ( 
        <div className="Head">
            <Header data={data} setName={setName}/>
            <Main data={data}/>
        </div>
     );
}

export default Head;