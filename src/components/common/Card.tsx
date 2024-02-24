import Heading from "./Heading"
import bgsmWave from '../../assets/icon/bgsmwave.png'

const Card = ({ service }) => {
    return (
        <div className="service-card shadow-lg">
            <div className="h-[100px] flex items-center" >

                <div className="bg-smoke  rounded-full flex items-center justify-center shape-icon" >
                    <img src={service?.iconKey} alt="image" />
                </div>
                <span className="card-number">01</span>
            </div>
            <div className="mt-6 z-50">
                <Heading label={service?.title} className="text-lg font-semibold" />
                <Heading label={service?.description} />

            </div>
            <div>
                <button className="">Read More</button>

            </div>

            <div className="bg-shape">
                <img src={bgsmWave} alt="" />
            </div>

        </div >
    )
}

export default Card