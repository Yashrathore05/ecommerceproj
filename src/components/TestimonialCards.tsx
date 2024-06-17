'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const immersiveXTestimonials = [
  {
    quote:
      'Immersive X has completely transformed my perspective on virtual reality. The headsets are state-of-the-art, and the experiences are unparalleled!',
    name: 'Yash Rathore',
    title: 'Tech Enthusiast',
  },
  {
    quote:
      'The AI tools provided by Immersive X are incredibly intuitive and powerful. They have significantly enhanced my learning and problem-solving skills.',
    name: 'Vivek',
    title: 'Computer Engineering Student',
  },
  {
    quote:
      'Using Immersive X for my engineering projects has been revolutionary. The level of detail and realism helps me understand complex concepts effortlessly.',
    name: 'Vishesh',
    title: 'Computer Engineering Student',
  },
  {
    quote:
      'As a gaming enthusiast, Immersive X has taken my gaming to the next level. The VR headsets provide an immersive experience that’s second to none.',
    name: 'Shivansh',
    title: 'Computer Engineering Student',
  },
  {
    quote:
      'Immersive X has given me the tools to explore new frontiers in virtual reality. It’s been a fantastic resource for my studies and personal projects.',
    name: 'Vishal',
    title: 'Computer Engineering Student',
  },
  {
    quote:
      'The immersive experiences created by Immersive X are not just engaging but also highly educational. It’s a fantastic tool for both teaching and learning in my practice.',
    name: 'Dr. Kajal Rathore',
    title: 'Dentist',
  },
  {
    quote:
      'Immersive X has opened up new possibilities for me in both personal and professional capacities. The support and community are exceptional, providing valuable insights and assistance.',
    name: 'Purushottam Singh Rathore',
    title: 'Retired Army Officer',
  },
];

function ImmersiveXTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10 text-white">Voices of Innovation: Testimonials from Our Community</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={immersiveXTestimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default ImmersiveXTestimonials;
