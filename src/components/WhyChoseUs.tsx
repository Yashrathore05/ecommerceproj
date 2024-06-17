"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const immersiveXContent = [
    {
      title: 'Explore New Realities: Unleashing Your Potential with VR and MR Headsets',
      description:
        'Embark on a journey into immersive realities where creativity knows no bounds. Our cutting-edge VR and MR headsets redefine the way you experience the world, offering limitless possibilities for exploration and innovation.',
    },
    {
      title: 'Immerse Yourself in AI-Powered Tools: Transforming Your Vision into Reality',
      description:
        'Experience the power of AI-driven tools that enhance your creativity and productivity. From advanced simulations to intelligent analytics, our AI tools empower you to turn ideas into actionable insights with unprecedented precision.',
    },
    {
      title: 'Revolutionizing Learning with Virtual Environments: The Future of Education',
      description:
        'Step into virtual classrooms where learning becomes an immersive experience. Our VR environments are tailored to enhance education and training, providing interactive simulations that engage and inspire learners of all ages.',
    },
    {
      title: 'Real-Time Feedback and Interaction: Elevating Collaboration with VR',
      description:
        'Engage in real-time collaboration and feedback loops that accelerate project development. Our VR platforms enable seamless communication and interaction, fostering innovation and efficiency across teams and disciplines.',
    },
    {
      title: 'Cutting-Edge AI Integration: Redefining Industries through Innovation',
      description:
        'Harness the potential of AI integration across industries with our advanced solutions. From healthcare to gaming, our AI-powered applications drive transformative change, setting new standards for efficiency and performance.',
    },
    {
      title: 'Continuous Advancement in VR and AI: Stay Ahead with Immersive X',
      description:
        'Explore our ever-expanding library of VR experiences and AI applications that push the boundaries of technology. At Immersive X, we are committed to delivering state-of-the-art solutions that redefine the future of immersive technology.',
    },
  ];

function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={immersiveXContent} />
    </div>
  )
}

export default WhyChooseUs;
