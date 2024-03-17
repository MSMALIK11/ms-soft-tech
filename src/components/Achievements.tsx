
import heartImg from '../assets/icon/heart.png'
import blueDiamondImg from '../assets/icon/blyediamond.png'
import starImg from '../assets/icon/star.png'
import puzzleImg from '../assets/icon/puzzle.png'
import { motion } from "framer-motion";
function Achievements() {


    return (
        <section className="ach-section">
            <div>

                <h4 className="ach-subtitle">_Our awesome funfact_</h4>
                <h1 className="our-ach"> Our Achievement!</h1>
                <div className="grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-20 our-achievements ">
                    <div className="relative inner-box">
                        <span className="inner-border">
                        </span>
                        <div className="achivement-icon">
                            <img src={heartImg} alt="" />
                        </div>
                        <motion.div initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}>
                            <h2>1200</h2>
                            <p>Satisfied Client</p>
                        </motion.div>


                    </div>
                    <div className="relative inner-box ">
                        <span className="inner-border">
                        </span>

                        <div className="achivement-icon">
                            <img src={blueDiamondImg} alt="" />
                        </div>
                        <div>
                            <h2>1200</h2>
                            <p>Satisfied Client</p>
                        </div>

                    </div>
                    <div className="relative inner-box ">
                        <span className="inner-border">
                        </span>

                        <div className="achivement-icon">
                            <img src={starImg} alt="" />
                        </div>
                        <div>
                            <h2>1200</h2>
                            <p>Satisfied Client</p>
                        </div>

                    </div>
                    <div className="relative inner-box ">
                        <span className="inner-border">
                        </span>

                        <div className="achivement-icon">
                            <img src={puzzleImg} alt="" />
                        </div>
                        <div>
                            <h2>1200</h2>
                            <p>Satisfied Client</p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Achievements