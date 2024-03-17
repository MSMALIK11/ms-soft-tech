import { motion } from "framer-motion";
import Heading from "./common/Heading";
import p1Img from "../assets/projects/p1.png";

const ProjectSection = () => {
    return (
        <div className="px-12 mt-12 h-screen">
            <div className="flex  flex-col items-center justify-center">
                <Heading
                    label="LATEST PROJECT"
                    isIcon={true}
                    className="text-center text-[32px] font-bold mb-4 text-primary"
                />
                <h1 className="text-[32px] font-bold">
                    See Our Skilled Expert <span className="text-primary">Team</span>{" "}
                </h1>
            </div>
            <div className="projects">
                <motion.div
                    // initial={{ opacity: 0, y: 20, borderTopWidth: 0, borderRightWidth: 0, borderBottomWidth: 0, borderLeftWidth: 0 }}
                    // animate={{ opacity: 1, y: 0, borderTopWidth: '100%', borderRightWidth: '100%', borderBottomWidth: '100%', borderLeftWidth: '100%' }}
                    // transition={{ opacity: 1, duration: 0.32, ease: 'ease-in' }}
                    className="projectCard shadow-md w-[320px] p-2 relative"
                >
                    <h1 className="p-2">React DND kanban Baord</h1>
                    <img src={p1Img} alt="" />

                    <div className="project-details px-6">
                        <div className="project-inner-box">

                            <h1>React DND Application</h1>
                            <a
                                href="https://react-dnd-kanbanboard.netlify.app/"
                                className="button-link"
                                target="_blank"
                            >
                                Visit
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectSection;
