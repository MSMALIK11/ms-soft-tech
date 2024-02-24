
import Card from '../common/Card'
import Heading from '../common/Heading'
import webIcon from '../../assets/icon/web.svg'
import softwareIcon from '../../assets/icon/software.svg'
import uiux from '../../assets/icon/uiux.svg'
const Services = () => {
    const services = [
        {
            title: 'Web Development',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ratione reiciendis sequi excepturi quaerat magni?',
            iconKey: webIcon
        },
        {
            title: 'Software Development',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ratione reiciendis sequi excepturi quaerat magni?',
            iconKey: softwareIcon
        },
        {
            title: 'UI / UX Design',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ratione reiciendis sequi excepturi quaerat magni?',
            iconKey: uiux
        },
    ]

    return (
        <div className='px-32 mt-12  h-[100vh] service-wraper'>
            <div className='flex  flex-col items-center justify-center'>

                <Heading label="Our Services" isIcon={true} className='text-center text-[32px] font-bold mb-4 text-primary' />
                <h1 className='text-[32px] font-bold'>We Provide Exclusive <span className='text-primary'>Service</span> For Your Business</h1>
            </div>
            <div className='grid lg:grid-cols-3 mt-12  md:grid-cols-4 sm:grid-cols-6 place-content-center place-items-center gap-6'>

                {
                    services?.map((item) => <Card service={item} />)
                }
            </div>
        </div>
    )
}

export default Services