import { motion } from 'framer-motion';
import { HiMenuAlt2, HiMenuAlt3 } from "react-icons/hi";

import { useState } from 'react';
import DarkMode from '../components/DarkMode';
const Header = () => {
    const [show, setShow] = useState(false)
    const toggleMobileMenu = () => {
        setShow((prev) => !prev)
    }
    const Menus = [
        {
            name: 'Home',
            link: '#'
        },
        {
            name: 'Services',
            link: '#'
        },
        {
            name: 'About Us ',
            link: '#'
        },
        {
            name: 'Achievements ',
            link: '#'
        },
        {
            name: 'Projects ',
            link: '#'

        }
    ]
    return (
        <motion.div initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} className='flex dark:bg-primary dark:text-white bg-white text-black  justify-between lg:px-32 md:px-24 sm:px-6 py-2 items-center shadow-lg'>
            <div>
                <h3 className='text-brand dark:text-white '>Ten⍟ti<span className='text-transparent text-clip bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#DD0BFF]'>ous</span> <span className='text-transparent text-clip bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#DD0BFF] '>Technology </span> </h3>
            </div>
            <div>
                {/* Desktop Menu */}
                <nav className='hidden md:block '>

                    <ul className='flex gap-6  items-center'>

                        {
                            Menus.map((item) => {
                                return (
                                    <li className='text-dark whitespace-nowrap dark:text-white  hover:border-b hover:border-brand hover:text-brand cursor-pointer duration-300' >
                                        {item.name}
                                    </li>
                                )
                            })
                        }
                        <DarkMode />
                    </ul>
                </nav>
                {/* Mobile Menu */}
                <div className='flex md:hidden  '>
                    <div className='flex gap-4 items-center'>
                        <DarkMode />
                        {
                            show ? <HiMenuAlt2 onClick={toggleMobileMenu} className='dark:text-white text-dark' /> :
                                <HiMenuAlt3 onClick={toggleMobileMenu} className='dark:text-white text-dark' />
                        }

                    </div>
                </div>

            </div>
        </motion.div>
    )
}

export default Header