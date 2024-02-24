
import Card from '../common/Card'
import Heading from '../common/Heading'
import webIcon from '../../assets/icon/web.svg'
import softwareIcon from '../../assets/icon/software.svg'
import uiux from '../../assets/icon/uiux.svg'

interface SercviceProp {
    title: string,
    iconKey: string,
    description: string
}
const Services = () => {
    const services: SercviceProp[] = [
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
        <div className='px-32 mt-12  min-h-[100vh] h-auto service-wraper'>
            <div className='flex  flex-col items-center justify-center'>

                <Heading label="Our Services" isIcon={true} className='text-center text-[32px] font-bold mb-4 text-primary' />
                <h1 className='text-[32px] font-bold'>We Provide Exclusive <span className='text-primary'>Service</span> For Your Business</h1>
            </div>
            <div className='grid lg:grid-cols-3 mt-12  md:grid-cols-4 sm:grid-cols-6 place-content-center place-items-center gap-6'>

                {
                    services?.map((item: SercviceProp) => <Card key={item.title} title={item.title} description={item.description} iconKey={item.iconKey} />)
                }
            </div>
        </div>
    )
}

export default Services