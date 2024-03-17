import bgVideo from '../assets/video/file.mp4'
import CallToActionButton from './CallToActionButton'
import ChatBot from './ChatBot/ChatBot'
const Bannar = () => {
    return (
        <div className='relative'>
            <video controls={false} width={'100%'} loop muted autoPlay>
                <source src={bgVideo} type="video/mp4" />
            </video>
            <div className='chat-bot'>
                <ChatBot />
            </div>
            <div className='call-to-action-btn'>
                <CallToActionButton />
            </div>
            <div className='banner-details'>
                <h1 className='text-brand lg:text-4xl md:text-2xl sm:text-lg'>Perfect It Solution </h1>
                <h1 className='text-brand lg:text-4xl md:text-2xl sm:text-lg'>For Your Business </h1>
                <h2 className='text-white lg:text-md sm:text-sm mt-1'>We Develop the Technology to Connect the World </h2>
                <div>
                    <button className='border-2 border-brand  mt-6 bg-transparent hover:bg-brand text-white px-4  md:px-3 sm-px-2 py-2 rounded-full transition-color hover:border-white duration-300 hover:scale-110'>Contact Us</button>
                </div>
            </div>
        </div>
    )
}

export default Bannar