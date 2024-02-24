
import Heading from './common/Heading'
import adarshImage from '../assets/team/adarsh.png'
import shoaibImage from '../assets/team/me.jpg'
import aqibImage from '../assets/team/aqib.jpg'
const TeamMember = () => {
    const services = [
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

    const Card = ({ team }) => {
        return (
            <div>
                <div className='team-image-box'>
                    <div className='team-image-box'>
                        <img src={team.iconKey} alt="" />
                    </div>
                    <div>
                        <Heading label={team.title} />
                        <Heading label={team.designition} />
                    </div>
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
                    services?.map((item) => <Card team={item} />)
                }
            </div>
        </div>
    )
}

export default TeamMember