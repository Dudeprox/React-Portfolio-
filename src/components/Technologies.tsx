import React from 'react'
import { RiReactjsLine } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { SiMongodb } from "react-icons/si"
import { DiRedis } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
import { BiLogoPostgresql } from "react-icons/bi"
import { motion, Variants} from "framer-motion"
import { FaPython } from "react-icons/fa";
import { FaCuttlefish } from 'react-icons/fa';
import { FaJava } from "react-icons/fa";




const iconVariants: Variants = ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: 2,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",

        },

    },
});

const iconVariants1: Variants = ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: 4,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",

        },

    },
});

const iconVariants2: Variants = ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: 2.5,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",

        },

    },
});

const iconVariants3: Variants = ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: 4,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",

        },

    },
});


const iconVariants4: Variants = ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: 2,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",

        },

    },
});

const iconVariants5: Variants = ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: 6,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",

        },

    },
});



const iconVariants6: Variants = ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: 4,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",

        },

    },
});

const iconVariants7: Variants = ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: 4.5,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",

        },

    },
});


const iconVariants8: Variants = ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: 5,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",

        },

    },
});


const Technologies = () => {
    return (
        <section id='technologies'>
            <div className="border-b border-neutral-800 pb-24">
                <motion.h1
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5 }}
                    className="my-20 text-center text-4xl">Technologies

                </motion.h1>



                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.5 }}
                    className="flex flex-wrap items-center justify-center gap-4">


                    <motion.div
                        variants={iconVariants}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <FaPython className="text-7xl" style={{ color: '#ccccff' }} />
                    </motion.div>

                    <motion.div
                        variants={iconVariants1}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <FaCuttlefish className="text-7xl" style={{ color: '#00599C' }} /> {/* C logo blue */}
                    </motion.div>


                    <motion.div

                        variants={iconVariants2}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <FaJava className="text-7xl" style={{ color: '#ffb366' }} /> {/* Java logo blue */}
                    </motion.div>


                    <motion.div
                        variants={iconVariants3}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <RiReactjsLine className="text-7xl text-cyan-400" />
                    </motion.div>

                    <motion.div
                        variants={iconVariants4}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <TbBrandNextjs className="text-7xl" />
                    </motion.div>

                    <motion.div
                        variants={iconVariants5}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiMongodb className="text-7xl text-green-500" />
                    </motion.div>

                    <motion.div
                        variants={iconVariants6}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <DiRedis className="text-7xl text-red-700" />
                    </motion.div>

                    <motion.div
                        variants={iconVariants7}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <FaNodeJs className="text-7xl text-green-500" />
                    </motion.div>

                    <motion.div
                        variants={iconVariants8}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <BiLogoPostgresql className="text-7xl text-sky-700" />
                    </motion.div>

                </motion.div>


            </div>
        </section>
    )
}

export default Technologies