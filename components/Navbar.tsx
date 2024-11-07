import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import logo from '../public/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Example() {
  return (
    <>
      {/* Inline script for setting active link */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', () => {
              const links = document.querySelectorAll('.nav-link');
              links.forEach(link => {
                if (link.href === window.location.href) {
                  link.classList.add('border-indigo-500', 'text-gray-900');
                } else {
                  link.classList.remove('border-indigo-500', 'text-gray-900');
                  link.classList.add('border-transparent', 'text-gray-500');
                }
              });
            });
          `,
        }}
      />
      <Disclosure as="nav" className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Image alt="Your Company" src={logo} width={60} height={60} />
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {/* Links with nav-link class */}
                <Link
                  href="/"
                  id="home"
                  className="nav-link inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  id="about"
                  className="nav-link inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  href="/projects"
                  id="projects"
                  className="nav-link inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
                >
                  Projects
                </Link>
                <Link
                  href="/services"
                  id="services"
                  className="nav-link inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  id="contact"
                  className="nav-link inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            {/* Icons section */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Link href="mailto:sjdexteriorcleaningRRLTD@gmail.com" className="rounded-full bg-white p-1 text-blue-400 hover:text-gray-500">
                <MdEmail className="text-3xl" />
              </Link>
              <Link href="tel:03338800209" className="rounded-full bg-white p-1 text-green-400 hover:text-gray-500">
                <FaSquarePhone className="text-3xl" />
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=61557656972924" target="_blank" className="rounded-full bg-white p-1 text-blue-700 hover:text-gray-500">
                <FaFacebook className="text-3xl" />
              </Link>
              <Link href="https://wa.me/+447864808832" target="_blank" className="rounded-full bg-white p-1 text-green-700 hover:text-gray-500">
                <FaWhatsapp className="text-3xl" />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 pb-4 pt-2">
            <DisclosureButton as="a" href="/" className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700">
              Home
            </DisclosureButton>
            <DisclosureButton as="a" href="/about" className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">
              About
            </DisclosureButton>
            <DisclosureButton as="a" href="/projects" className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">
              Projects
            </DisclosureButton>
            <DisclosureButton as="a" href="/services" className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">
              Services
            </DisclosureButton>
            <DisclosureButton as="a" href="/contact" className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">
              Contact Us
            </DisclosureButton>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </>
  );
}
