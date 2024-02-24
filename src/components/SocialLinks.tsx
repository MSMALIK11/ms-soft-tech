
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
const SocialLinks = () => {
    return (
        <div className="socialLnks">
            <ul>
                <li><AiOutlineInstagram color="black" size={18} /> </li>
                <li><FaFacebookF color="black" size={18} /> </li>
                <li><FaLinkedinIn color="black" size={18} /> </li>
            </ul>
        </div>
    )
}

export default SocialLinks