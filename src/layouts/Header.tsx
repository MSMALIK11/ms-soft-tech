import Logo from '../assets/ms-soft-tech-high-resolution-logo-white-transparent (1).png'
const Header = () => {
    return (
        <div className='flex justify-between bg-[#062252] px-32 py-2 items-center shadow-lg'>
            <div>
                <img src={Logo} alt="" width={200} />
            </div>
            <ul className='flex gap-6 text-white  sm:hidden hidden'>
                <li className='text-orange-300 font-bold cursor-pointer'>Home</li>
                <li>Product & Services</li>
                <li>Pricing</li>
                <li>Technology</li>
                <li>Career</li>
            </ul>
        </div>
    )
}

export default Header