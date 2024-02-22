
import { AiOutlineYoutube, AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
const SocialLinks = () => {
    return (
        <div className="socialLnks">
            <ul>
                <li><AiOutlineInstagram size={18} /> </li>
                <li><FaFacebookF size={18} /> </li>
                <li><FaLinkedinIn size={18} /> </li>
                <li><AiOutlineYoutube size={18} /> </li>
            </ul>
        </div>
    )
}

export default SocialLinks