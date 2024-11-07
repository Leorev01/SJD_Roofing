import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaFacebook, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { FaMobileButton, FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import mainLogo from '../public/images/main-logo.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {/* Top bar with logo and contact info */}
      <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4">
        {/* Logo section centered on small screens, moved slightly right on large screens */}
        <div className="flex-shrink-0 w-full sm:w-auto flex justify-center sm:justify-start lg:ml-4">
          <Image alt="Your Company" src={mainLogo} width={300} height={300} />
        </div>

        {/* Contact info: Only visible on large screens */}
        <div className="hidden lg:flex items-center space-x-8">
          <div className="flex items-center space-x-4 p-6 rounded-2xl">
            <FaMobileButton className="text-4xl text-indigo-600" />
            <div>
              <h1 className="font-bold text-lg lg:text-2xl">Mobile</h1>
              <h1 className="font-bold text-2xl lg:text-4xl">0786 480 8832</h1>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-6 rounded-2xl">
            <FaPhone className="text-4xl text-indigo-600" />
            <div>
              <h1 className="font-bold text-lg lg:text-2xl">Landline</h1>
              <h1 className="font-bold text-2xl lg:text-4xl">0333 880 0209</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation links */}
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>

          {/* Logo and Links for larger screens */}
          <div className="flex flex-1 items-center justify-start">
            <div className="hidden sm:flex sm:space-x-8">
              <Link href="/" className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900">Home</Link>
              <Link href="/about" className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">About</Link>
              <Link href="/projects" className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">Projects</Link>
              <Link href="/services" className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">Services</Link>
              <Link href="/contact" className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">Contact Us</Link>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link href="mailto:sjdexteriorcleaningRRLTD@gmail.com" className="rounded-full bg-white p-1 text-blue-400 hover:text-gray-500 focus:outline-none">
              <MdEmail className="text-3xl" />
            </Link>
            <Link href="tel:03338800209" className="rounded-full bg-white p-1 text-green-400 hover:text-gray-500 focus:outline-none">
              <FaSquarePhone className="text-3xl" />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=61557656972924" target="_blank" className="rounded-full bg-white p-1 text-blue-700 hover:text-gray-500 focus:outline-none">
              <FaFacebook className="text-3xl" />
            </Link>
            <Link href="https://wa.me/+447864808832" target="_blank" className="rounded-full bg-white p-1 text-green-700 hover:text-gray-500 focus:outline-none">
              <FaWhatsapp className="text-3xl" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 pb-4 pt-2">
          <DisclosureButton as="a" href="/" className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700">Home</DisclosureButton>
          <DisclosureButton as="a" href="/about" className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">About</DisclosureButton>
          <DisclosureButton as="a" href="/projects" className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">Projects</DisclosureButton>
          <DisclosureButton as="a" href="/services" className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">Services</DisclosureButton>
          <DisclosureButton as="a" href="/contact" className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">Contact Us</DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
