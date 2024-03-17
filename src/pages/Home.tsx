
import Achievements from '../components/Achievements'
import ProjectSection from '../components/ProjectSection'
import Services from '../components/services/services'
import TeamMember from '../components/TeamMember'
import USSP from '../components/USSP'

const Home = () => {
    return (
        <div>
            <USSP />
            <Services />
            <TeamMember />
            <ProjectSection />
            <Achievements />
        </div>
    )
}

export default Home