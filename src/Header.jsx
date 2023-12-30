import {Link} from "react-router-dom";
export default function Header() {
    return (
        <header className="bg-orange-500 text-white p-4 flex items-center flex justify-between items-center p-4">
            {/*<img src="./hot-icon.svg" alt="" className="w-6 h-6 mr-2"/>*/}
            <Link to={'/'} className="flex items-center smallscreen-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fill-rule="evenodd" d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z" clip-rule="evenodd" />
                </svg>
                <div className="p-2">
                  
                  <span>Feu Ste Marguerite d'Youville</span>
                </div>
                {/*<div> 38e St. Jean Baptiste</div>*/}
            </Link> 
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <span className="text-2xl font-bold mb-2"> Carnet de chant</span>
            </div>
 
      </header>
    );
}