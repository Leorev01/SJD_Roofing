"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Projects array sorted by date (most recent first)
const projects = [
  {
    id: 9,
    title: "Full Felt Roof Replacement in Coventry",
    description: "Professional felt roof replacement services in Coventry and surrounding areas.",
    details: "In our final project of 2024, we completed a comprehensive felt roof replacement in Coventry. Our team installed an underlay and a top coat of durable green felt, ensuring the highest professional standards. All debris was removed, leaving the property clean and tidy. The client was delighted with the results, and their roof is now protected for years to come!",
    image: "/images/projects/felt-repair.jpg", // Update the image path as needed
  },
  {
    id: 8,
    title: "Storm Damage Tile Replacement in Coventry",
    description: "Expert tile replacement services after storm damage in Coventry.",
    details: `Following a recent storm in Coventry, we replaced broken roof tiles that compromised the roof's integrity. 
              Our team used high-quality replacement tiles, ensuring a perfect fit and long-lasting results. Despite using tiles of a different type from the original roof, the repair seamlessly blended into the existing structure.`,
    image: '/images/projects/tile-replacement.jpg',
  },
  {
    id: 7,
    title: "Comprehensive Roof Cleaning in Coventry",
    description: "Affordable and reliable roof cleaning services in Coventry.",
    details: `We provided an extensive roof cleaning service in Coventry, removing moss, debris, and blockages. 
              Our team also cleaned gutters, downpipes, fascia, and soffits, leaving the roof spotless and fully functional. 
              All waste was removed, and the property was left in pristine condition. 
              Looking for reliable roof cleaning services? Contact Coventry Roofers for a free quote today!`,
    image: '/images/projects/roof-cleaning.jpg',
  },
  {
    id: 6,
    title: "Breathable Membrane Installation in Coventry",
    description: "Upgrade your roof with breathable membrane installation by Coventry Roofers.",
    details: `Our team addressed a client's roofing issues in Coventry by replacing old, damaged felt with a modern breathable membrane. 
              We also installed treated battens for added durability and ensured the tiles were securely repositioned. 
              All waste was removed, leaving the property clean and tidy. For top-tier roofing services in Coventry, trust our experienced team.`,
    image: '/images/projects/breathable-membrane.jpg',
  },
  {
    id: 5,
    title: "Roof Leak Repair in Stoney Stanton (Near Coventry)",
    description: "Expert roof leak repair services near Coventry.",
    details: `We tackled a roof leak in Stoney Stanton, near Coventry, by installing underlay and black torch-on felt to seal the issue. 
              The client’s roof is now fully waterproof and built to last. For reliable roofing repairs in Coventry and nearby areas, contact us today.`,
    image: '/images/projects/felt-repair-2.jpg',
  },
  {
    id: 4,
    title: "Driveway & Exterior Cleaning in Coventry",
    description: "Enhance your property’s curb appeal with our cleaning services in Coventry.",
    details: "We transformed a dull driveway in Coventry into a clean and bright space, providing fast and affordable exterior cleaning services. Contact Coventry Roofers for all your cleaning needs.",
    image: '/images/projects/driveway-clean.jpg',
  },
  {
    id: 3,
    title: "Patio Power Wash & Restoration in Coventry",
    description: "Bringing patios back to life with professional power washing.",
    details: `⭐️⭐️⭐️⭐️⭐️
              The pictures do the talking! This was our first clean of the year, focusing on the garage area. 
              We performed a full power wash, bringing back the original color of the patio. All waste was removed, leaving the area spotless. 
              For any exterior cleaning or roof repairs, call or message us today for a free quote. 
              ⭐️⭐️⭐️⭐️⭐️ reviews. Fast, reliable, and affordable prices. All work is carried out to a high standard.`,
    image: '/images/projects/patio-power-wash.jpg',
  },
  {
    id: 2,
    title: "Felt Roof Repair in Hinckley",
    description: "Expert felt roof repair and replacement services in Hinckley.",
    details: `Today's job in the Hinckley area involved repairing a hole in the felt roof. 
              We removed old battens and felt, replacing them with a breathable membrane and treated battens. 
              All tiles were securely repositioned, and lead flashing was correctly reinstalled. 
              All waste was removed, leaving the property clean and tidy. 
              For any roofing or exterior cleaning needs, call or message us today for a free quote. 
              Fast, reliable, and affordable prices. All work is carried out to a professional standard.`,
    image: '/images/projects/felt-repair-hinckley.jpg',
  },
  {
    id: 1,
    title: "Gutter Clearance & Waterproofing in Coventry",
    description: "Prevent leaks with professional gutter clearance and waterproofing.",
    details: `Did you know that full gutters can cause leaks? Instead of water flowing, it falls back, causing bigger problems. 
              As shown in the pictures, this guttering needed attention. 
              ✅ Fully removed all moss
              ✅ Applied Acrypol waterproof protection
              ✅ All waste was removed from the property
              We'll be back soon for a roof clean! 
              For any exterior cleaning or roof repairs, call or message us today. 
              Fast, reliable, and affordable prices. All work is carried out to a professional standard.`,
    image: '/images/projects/gutter-clearance.jpg',
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
          <p className="text-base font-semibold text-indigo-600">Coventry Roofers</p>
          <h2 className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            Recent Roofing Projects in Coventry
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover our recent roofing and exterior cleaning projects in Coventry, showcasing our dedication to quality and customer satisfaction.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.reverse().map((project) => (
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
