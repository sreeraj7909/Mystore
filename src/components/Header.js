import { LOGO_URL } from "../utils/constants";

const Header=()=>{
    return(
        <div className="bg-head bg-green-200 shadow-xl flex justify-between items-center">
           <img className="w-20 ml-28" src={LOGO_URL} alt="Logo"></img>
           <div className="mx-40">
            <ul className="flex space-x-8">
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
            </ul>
           </div>
        </div>
    )
}

export default Header;