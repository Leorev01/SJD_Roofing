'use client'
import { SetStateAction, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Projects array sorted by date (most recent first)
const projects = [
  {
    id: 1,
    title: 'Driveway & Exterior Cleaning',
    date: '24 October',
    description: 'Brightened up a dull driveway in the Sharnford/Hinckley area.',
    details: 'Transformed a newly done driveway that left the house looking dull. Achieved a much cleaner, brighter look without any mess or unwanted paint marks. Fast, reliable service with affordable prices, leaving a happy customer!',
    image: '/images/projects/driveway-clean.jpg',
  },
  {
    id: 2,
    title: 'Roof Underlay & Felt Replacement',
    date: '22 October',
    description: 'Fixed a leaking roof in Stoney Stanton with no prior underlay.',
    details: 'Removed old, damaged felt and applied new underlay correctly. Added black torch-on felt, ensuring everything was fitted and sealed to the wall. All waste removed from the property. Fast and reliable roofing service!',
    image: '/images/projects/felt-repair.jpg',
  },
  {
    id: 3,
    title: 'Moss Removal & Gutter Cleaning',
    date: '4 October',
    description: 'Removed moss from a roof and cleared blocked gutters and downpipes.',
    details: 'The customer was experiencing moss buildup causing blockages in the garden, guttering, and downpipes. We scraped off all the moss, cleaned out the gutters, and unblocked the downpipes. Fast and reliable service with high-quality work!',
    image: '/images/projects/moss-removal.jpg',
  },
  {
    id: 4,
    title: 'Gutter Cleaning & Blockage Prevention',
    date: '23 September',
    description: 'Helping with all gutter cleaning needs to prevent major issues.',
    details: 'Blocked gutters can lead to severe damage to your property. We conducted a thorough internal gutter cleaning to ensure free water flow, preventing leaks and water damage.',
    image: '/images/projects/gutter-cleaning.jpg',
  },
  {
    id: 5,
    title: 'Roof Repairs & Exterior Cleaning',
    date: '18 September',
    description: 'A busy week of roof repairs and exterior cleaning!',
    details: 'This week, we handled slipped tiles correction, re-bedding ridges, and tile replacements. Ensured everything was sealed and cleaned for a fresh look.',
    image: '/images/projects/roof-repair.jpg',
  },
  {
    id: 6,
    title: 'Leaking Roof Repair',
    date: '4 September',
    description: 'Comprehensive repair for a leaking roof using quality materials.',
    details: 'Applied an underlay, black charcoal waterproof felt, and sealed the surrounding areas to ensure a long-lasting, leak-proof solution. Client satisfaction guaranteed!',
    image: '/images/projects/leaking-roof.jpg',
  },
];

const Projects = () => {
  type Project = {
    id: number;
    title: string;
    date: string;
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
                  <p className="mt-1 text-sm text-gray-200">{project.date}</p>
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
              <p className="mt-2 text-gray-500">Date: {selectedProject.date}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
