import React from "react";
import {motion} from 'framer-motion'

const AppearFrom = ({children, direction="left", speed="2"}) => {
    let animation;

    switch (direction){
        case 'left':
            animation = {x: ['-100vw', 0]}
            break;
        case 'right':
            animation = {x: ['100vw', 0]}
            break;
        case 'top':
            animation = {y: ['-100vh', 0]}
            break;
        case 'bottom':
            animation = {y: ['100vh', 0]}
            break;
        default:
            animation = {x: ['-100vw', 0]}
            break;
    } 
    return (
        <motion.div
            animate={animation}
            transition={{ duration: speed }}
        >
            {children}
        </motion.div>
    )
}

export default AppearFrom