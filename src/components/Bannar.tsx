import bgVideo from '../assets/video/file.mp4'
import CallToActionButton from './CallToActionButton'
import ChatBot from './ChatBot/ChatBot'
import SocialLinks from './SocialLinks'

const Bannar = () => {
    return (
        <div className='h-[90vh]  relative'>
            <video controls={false} loop muted autoPlay>
                <source src={bgVideo} type="video/mp4" />
            </video>
            <div className='absolute top-20 left-5'>
                <SocialLinks />
            </div>
            <div className='chat-bot'>
                <ChatBot />
            </div>
            <div className='call-to-action-btn'>
                <CallToActionButton />
            </div>
            <div className='banner-details'>
                <h2 className='text-white text-md font-'>We Develop the Technology to Connect the World. <span></span><span></span> <span></span> </h2>
                <p className='text-[#ffe900]'>MS Soft Tech is an Indian multinational information technology company that specializes in digital business transformation and internet-related products & services.</p>
            </div>
        </div>
    )
}

export default Bannar