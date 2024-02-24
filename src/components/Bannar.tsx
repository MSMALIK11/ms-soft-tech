import bgVideo from '../assets/video/file.mp4'
import CallToActionButton from './CallToActionButton'
import ChatBot from './ChatBot/ChatBot'
const Bannar = () => {
    return (
        <div className='relative'>
            <video controls={false} width={'100%'} loop muted autoPlay>
                <source src={bgVideo} type="video/mp4" />
            </video>
            {/* <div className='absolute top-20 left-5'>
                <SocialLinks />
            </div> */}
            <div className='chat-bot'>
                <ChatBot />
            </div>
            <div className='call-to-action-btn'>
                <CallToActionButton />
            </div>
            <div className='banner-details'>
                <h1 className='text-[#ffe900] text-4xl'>Perfect It Solution </h1>
                <h1 className='text-[#ffe900] text-4xl'>For Your Business </h1>
                <h2 className='text-white text-md mt-1'>We Develop the Technology to Connect the World </h2>
                <div>
                    <button className='contact-us-btn'>Contact Us</button>
                </div>
            </div>
        </div>
    )
}

export default Bannar