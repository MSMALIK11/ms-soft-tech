
import Heading from './common/Heading'
import adarshImage from '../assets/team/adarsh.png'
import shoaibImage from '../assets/team/me.jpg'
import aqibImage from '../assets/team/aqib.jpg'
import defaultImage from '../assets/team/default.webp'
import SocialLinks from './SocialLinks'
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
            designition: 'Software Engineer'
        },
        {
            title: 'Mr. Shoaib',
            iconKey: shoaibImage,
            designition: 'Software Engineer'
        },
        {
            title: 'Mohd Aqib',
            iconKey: aqibImage,
            designition: 'Flutter Developer'
        },
        {
            title: 'Vishwajeet',
            iconKey: "",
            designition: 'Frontend Engineer'
        },
    ]

    const Card = ({ title, designition, iconKey }: TeamProp) => {
        return (
            <div className='team-card relative'>
                <div className='team-image-box  '>
                    <img src={iconKey || defaultImage} alt="" />
                </div>
                <div className='bg-white team-details mt-[-28px] flex items-center flex-col'>
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
        <div className='px-32 mt-12  h-[100vh] team-wraper'>
            <div className='flex  flex-col items-center justify-center'>
                <Heading label="TEAM MEMBER" isIcon={true} className='text-center text-[32px] font-bold mb-4 text-primary' />
                <h1 className='text-[32px] font-bold'>See Our Skilled Expert <span className='text-primary'>Team</span> </h1>
            </div>
            <div className='grid lg:grid-cols-4 mt-12  md:grid-cols-4 sm:grid-cols-6 place-content-center place-items-center gap-6'>

                {
                    teamLists?.map((item: TeamProp) => <Card key={item.title} title={item.title} designition={item.designition} iconKey={item.iconKey} />)
                }
            </div>
        </div>
    )
}

export default TeamMember