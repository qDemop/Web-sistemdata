import { Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {useEffect, useState} from "react";

const MotionBox = motion.create (Box);

const AuthIndex = ({ children }) => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        // Crear partículas aleatorias
        const generateParticles = () => {
            const newParticles = [];
            for (let i = 0; i < 30; i++) {
                newParticles.push({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: Math.random() * 10 + 2,
                    duration: Math.random() * 20 + 10
                });
            }
            setParticles(newParticles);
        };

        generateParticles();
    }, []);

    return (
        <MotionBox
            minW="100vw"
            minH="100vh"
            overflow="hidden"
            position="relative"
            bgGradient={
                "linear-gradient(135deg, #C9EF26 0%, #00B5BB 50% , #072C51 100%)"}

        >
            {/* Partículas animadas */}
            {particles.map((particle) => (
                <MotionBox
                    key={particle.id}
                    position="absolute"
                    borderRadius="full"
                    bg="rgba(255, 255, 255, 0.3)"
                    initial={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        opacity: 0.3,
                    }}
                    animate={{
                        left: [`${particle.x}%`, `${(particle.x + 20) % 100}%`, `${particle.x}%`],
                        top: [`${particle.y}%`, `${(particle.y + 15) % 100}%`, `${particle.y}%`],
                        opacity: [0.3, 0.7, 0.3],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: particle.duration,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                />
            ))}

            <Flex align="center" justify="center" minH="100vh" p={4}>
                <Box
                    width="100%"
                    maxWidth="400px"
                    p={8}
                    borderRadius={{base:"2xl", md:"3xl"}}
                    borderWidth="2px"
                    borderColor="white/50"
                    bg="#072C51/50"
                    backdropFilter="blur(20px)"
                    boxShadow="0 8px 32px 0 rgba(0, 0, 0, 0.37)"
                >
                    {children}
                </Box>
            </Flex>
        </MotionBox>
    );
};

export default AuthIndex;