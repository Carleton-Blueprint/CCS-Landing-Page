import React from "react";
import {motion} from 'framer-motion'

const AppearFrom = ({children, direction="left", speed="2"}) => {

    const getAnimation = (direction) => {
        switch (direction){
            case 'left':
                return {x: ['-100vw', 0]}
            case 'right':
                return {x: ['100vw', 0]}
            case 'top':
               return {y: ['-100vh', 0]}
            case 'bottom':
                return {y: ['100vh', 0]}
            default:
               return {x: ['-100vw', 0]}
        } 
    } 
    return (
        <motion.div
            animate={getAnimation(direction)}
            transition={{ duration: speed }}
        >
            {children}
        </motion.div>
    )
}

export default AppearFrom