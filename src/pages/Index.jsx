import {Link} from "react-router-dom";

export default function IndexPage(){
    return (
        <>
         <div className="flex-grow flex-col p-4">
            <div className="p-4">index page here</div>
            <Link to={'/couronnee-d-etoiles'} className="bg-red-500 text-white p-4">Couronnée d'étoiles</Link>
           
        </div>
         
   
        </>
        )
}