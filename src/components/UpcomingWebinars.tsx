'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {

  const featuredWebinars = [
    {
      title: 'Mastering Augmented Reality: Applications and Development',
      description:
        "Explore AR's diverse applications and development essentials for business innovation.",
      slug: 'mastering-augmented-reality-applications-development',
      isFeatured: true,
    },
    {
      title: 'Demystifying Virtual Reality: Building Immersive Experiences',
      description:
        'Learn VR fundamentals and create compelling immersive environments.',
      slug: 'demystifying-virtual-reality-building-immersive-experiences',
      isFeatured: true,
    },
    {
      title: 'The Future of Mixed Reality: Integrating AR, VR, and MR',
      description:
        'Discover how AR, VR, and MR blend to revolutionize interaction and engagement.',
      slug: 'future-mixed-reality-integrating-ar-vr-mr',
      isFeatured: true,
    },
    {
      title: 'Harnessing AI in Immersive Technologies: Opportunities and Challenges',
      description:
        "Explore AI's role in transforming immersive experiences and enhancing business outcomes.",
      slug: 'harnessing-ai-immersive-technologies-opportunities-challenges',
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: 'Cybersecurity in the Age of Immersive Technologies',
      description:
        'Understand cybersecurity risks and best practices in AR/VR environments.',
      slug: 'cybersecurity-age-immersive-technologies',
      isFeatured: true,
    },
    {
      title: 'The Business Case for Immersive Technologies: ROI and Beyond',
      description:
        'Uncover how immersive tech drives ROI and competitive advantage in business strategies.',
      slug: 'business-case-immersive-technologies-roi-beyond',
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Transform with Immersive Tech</p>
        </div>

        <div className="mt-10">
          <HoverEffect
          items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: '/'
            }
          ))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link href={"/"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars