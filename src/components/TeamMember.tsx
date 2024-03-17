
import Heading from './common/Heading'
import adarshImage from '../assets/team/adarsh.png'
import shoaibImage from '../assets/team/me.jpg'
import SocialLinks from './SocialLinks'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';
import "swiper/css/autoplay";
interface TeamProp {
    title: string,
    iconKey: string,
    designition: string
}
const TeamMember = () => {

    const teamLists: TeamProp[] = [
        {
            title: 'Aadarsh Singh',
            iconKey: adarshImage,
            designition: 'Co Founder'
        },
        {
            title: 'Mr. Shoaib',
            iconKey: shoaibImage,
            designition: 'CEO'
        },

    ]

    const Card = ({ title, designition, iconKey }: TeamProp) => {
        return (
            <div className='team-card relative'>
                <div className='team-image-box  '>
                    <img src={iconKey} alt="" />
                </div>
                <div className='bg-white team-details mt-[-35px] flex items-center flex-col'>
                    <Heading label={title} className='text-2xl' />
                    <Heading label={designition} className='text-primary' />
                </div>
                <div className='team-social-links'>
                    <SocialLinks />
                </div>
            </div>
        )
    }
    return (
        <div className='px-32 mt-12  min-h-[100vh] h-auto team-wraper'>
            <div className='flex  flex-col items-center justify-center'>
                <Heading label="TEAM MEMBER" isIcon={true} className='text-center text-[32px] font-bold mb-4 text-primary' />
                <h1 className='text-[32px] font-bold'>See Our Skilled Expert <span className='text-primary'>Team</span> </h1>
            </div>

            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                modules={[Autoplay]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className='mt-12'
                autoplay={true}
                effect="fade"

            >
                {teamLists?.map((item) => (
                    <SwiperSlide key={item.title}>
                        <Card title={item.title} designition={item.designition} iconKey={item.iconKey} />
                    </SwiperSlide>
                ))}


            </Swiper>
        </div>
    )
}

export default TeamMember