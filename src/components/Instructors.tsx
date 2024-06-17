'use client'
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
    {
      id: 1,
      name: 'Yash Rathore',
      designation: 'Founder & CEO',
      image: '/yash.png',
    },
    {
      id: 2,
      name: 'Shivansh',
      designation: 'CMO',
      image: '/shivansh.jpg',
    },
    {
      id: 3,
      name: 'Vishal',
      designation: 'CTO',
      image: '/images/vishal.jpg',
    },
    {
      id: 4,
      name: 'Vivek',
      designation: 'CFO',
      image: '/vivek.jpg',
    },
    {
      id: 5,
      name: 'Vishesh',
      designation: 'SME',
      image: '/vishesh.jpg',
    },
  ];

function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8"> Our Executive Team</h2>
            <p className="text-base md:text-lg text-white text-center mb-4">Shaping the Future of Virtual and Mixed Reality with IMMERSIVE X</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={instructors} />
            </div>
        </WavyBackground>
    </div>
  )
}

export default Instructors;
