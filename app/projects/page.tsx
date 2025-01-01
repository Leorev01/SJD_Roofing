'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Projects array sorted by date (most recent first)
const projects = [
  {
  "id": 9,
  "title": "Full Felt Roof Replacement",
  "description": "Complete replacement of the felt roof with professional standards.",
  "details": "In our last job of 2024, we carried out a full replacement of the felt roof. We applied an underlay and then a top coat of green felt. All work was burned down correctly, ensuring durability and longevity. We also removed all rubbish from the property, leaving it clean and tidy. Our customer was very happy with the results!",
  "image": "/images/projects/felt-repair.jpg" // Update the image path as needed
  },
  {
    id: 8,
    title: 'Expert Tile Replacement After Storm Damage',
    description: 'Replaced broken tiles due to storm damage.',
    details: `After a recent storm, we identified broken tiles that compromised the integrity of the roof. 
              Our team promptly removed all damaged tiles and replaced them with new, high-quality materials. 
              Interestingly, the replacement tiles were of a different type than those on the main roof; however, this did not pose any issues during installation. `,
    image: '/images/projects/tile-replacement.jpg', // You can update the image path as needed
  },  
  {
    id: 7,
    title: 'Roof Cleaning Service',
    description: 'Thorough roof cleaning to remove moss and debris.',
    details: `Today, we provided a comprehensive roof cleaning service, removing all moss and debris. 
              Our team cleaned out all gutters and downpipes, ensuring proper drainage. 
              We also wiped down the fascia and soffits, enhancing the overall appearance of the roof. 
              All waste was removed from the property, and the surrounding areas were washed down for a clean finish. 
              A happy customer means a happy business! 
              For any roofing or exterior cleaning needs, give us a call or message today for a free quote. 
              We offer fast and reliable service at affordable prices, 
              with all work carried out to a professional standard. 
              SJD Exterior Cleaning & Roofing Repairs LTD.`,
    image: '/images/projects/roof-cleaning.jpg', // Update the image path as needed
  },
  {
    id: 6,
    title: 'Breathable Membrane Installation',
    description: 'Repaired felt issues by installing a breathable membrane.',
    details: `Today, we addressed a customer’s roof with holes in the felt. 
              Our team removed the old felt and replaced it with a breathable membrane, ensuring better ventilation and moisture control. 
              We also replaced the battens with treated battens for enhanced durability. 
              After securing the tiles back into position, we removed all waste from the property. 
              A happy customer means a happy business! 
              For any roofing or exterior cleaning needs, give us a call or message today. 
              We pride ourselves on fast, reliable service at affordable prices, 
              with all work carried out to a professional standard. 
              SJD Exterior Cleaning & Roofing Repairs LTD.`,
    image: '/images/projects/breathable-membrane.jpg', // Update the image path as needed
  },
  {
    id: 5,
    title: 'Roof Leak Repair in Stoney Stanton',
    description: 'Addressed a leak by installing proper underlay and felt.',
    details: `Today in Stoney Stanton, we addressed a customer's leak and discovered there was no underlay at all, with holes in places too. 
              ✅ Removed old felt 
              ✅ Applied underlay the correct way 
              ✅ Applied black torch on felt 
              ✅ Fitted and sealed to the wall 
              ✅ All waste from property removed 
              A happy customer means a happy business! 
              For any roofing or exterior cleaning needs, give us a call or message today. 
              We pride ourselves on fast, reliable service at affordable prices, 
              with all work carried out to a professional standard. 
              SJD Exterior Cleaning & Roofing Repairs LTD.`,
    image: '/images/projects/felt-repair-2.jpg', // Update the image path as needed
  },
  {
    id: 4,
    title: 'Driveway & Exterior Cleaning',
    description: 'Brightened up a dull driveway in the Sharnford/Hinckley area.',
    details: 'Transformedat left the house looking dull. Achieved a much cleaner, brighter look without any mess or unwanted paint marks. Fast, reliable service with affordable prices, leaving a happy customer!',
    image: '/images/projects/driveway-clean.jpg',
  },

  {
    id: 3,
    title: 'Moss Removal & Gutter Cleaning',
    description: 'Removed moss from a roof and cleared blocked gutters and downpipes.',
    details: 'The customer was experiencing moss buildup causing blockages  and downpipes. We scraped off all the moss, cleaned out the gutters, and unblocked the downpipes. Fast and reliable service with high-quality work!',
    image: '/images/projects/moss-removal.jpg',
  },
  {
    id: 2,
    title: 'Gutter Cleaning & Blockage Prevention',
    description: 'Helping with all gutter cleaning needs to prevent major issues.',
    details: 'Blocked gutters can lead to severe damage to your property. We conducted a thorough in ensure free water flow, preventing leaks and water damage.',
    image: '/images/projects/gutter-cleaning.jpg',
  },
  {
    id: 1,
    title: 'Roof Repairs & Exterior Cleaning',
    description: 'A busy week of roof repairs and exterior cleaning!',
    details: 'This week, we handled slipped tiles correction, re-bedding ridges, and tile replacements. Ensured everything waa fresh look.',
    image: '/images/projects/roof-repair.jpg',
  },
];

const Projects = () => {
  type Project = {
    id: number;
    title: string;
    description: string;
    details: string;
    image: string;
  };
  
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Function to open the modal
  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      {/* Page Header */}
      <div className="bg-white px-6 pt-8 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold text-indigo-600">Our Work</p>
          <h2 className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            Recent Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore some of our recent projects, showcasing our expertise in exterior cleaning and roofing repairs.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              onClick={() => openModal(project)}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center px-4">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="mt-2 text-white">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="flex justify-center py-10">
        <Link
          href="/contact"
          className="flex items-center space-x-2 rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-md hover:bg-indigo-700 transition duration-300"
        >
          <span>Get a FREE Quote</span>
        </Link>
      </div>

      {/* Modal Component */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl mx-4 sm:mx-auto relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 bg-white p-3 rounded-lg"
              onClick={closeModal}
            >
              ✕
            </button>
            <div className="overflow-hidden">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={800}
                height={500}
                className="object-cover w-full max-w-full max-h-96 mx-auto"
              />
            </div>
            <div className="p-6">
              <h3 className="text-3xl font-bold text-gray-900">{selectedProject.title}</h3>
              <p className="mt-4 text-gray-700">{selectedProject.details}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
