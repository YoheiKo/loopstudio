import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// https://github.com/bradtraversy/tailwind-course-projects
// https://uidesigndaily.com/

const Home: NextPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const onMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <Head>
        <title>Loop</title>
      </Head>
      {/* Hero Section */}
      <section id="hero">
        {/* Hero Container */}
        <div className="container max-w-6xl mx-auto px-6 py-12">
          {/* Nav/Logo Container */}
          <nav className="flex flex-row items-center justify-between font-bold text-white">
            {/* Logo */}
            <img src="logo.svg" alt="" />
            {/* Menu */}
            <div className="hidden h-10 font-alata md:flex md:space-x-8">
              <div className="group">
                <Link href="#">About</Link>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50 duration-150"></div>
              </div>
              <div className="group">
                <Link href="#">Careers</Link>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <Link href="#">Events</Link>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <Link href="#">Products</Link>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <Link href="#">Support</Link>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
            </div>
            {/* Todo Hamburgre Button*/}
            <div className="md:hidden">
              <button
                onClick={onMenuClick}
                id="menu-btn"
                type="button"
                className={
                  menuOpen
                    ? "open z-50 block hamburger md:hidden focus:outline-none"
                    : "close z-50 block hamburger md:hidden focus:outline-none"
                }
              >
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </button>
            </div>
          </nav>
          {/* Mobile Menu  */}
          <div
            id="menu"
            className={
              menuOpen
                ? "absolute z-40 top-0 bottom-0 left-0 flex flex-col items-center self-end w-full min-h-screen py-1 pt-40 space-y-3 text-lg text-white uppercase bg-black md:hidden"
                : "absolute z-40 top-0 bottom-0 left-0 flex-col items-center self-end hidden w-full min-h-screen py-1 pt-40 space-y-3 text-lg text-white uppercase bg-black md:hidden"
            }
          >
            <Link href="#" className="hover:text-pink-500">
              About
            </Link>
            <Link href="#" className="hover:text-pink-500">
              Careers
            </Link>
            <Link href="#" className="hover:text-pink-500">
              Events
            </Link>
            <Link href="#" className="hover:text-pink-500">
              Products
            </Link>
            <Link href="#" className="hover:text-pink-500">
              Support
            </Link>
          </div>
          <div className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:text-6xl">
            Impressive Experiences That Deliver
          </div>
          {/* todo Mobile Menu */}
        </div>
      </section>
      {/* Feature Section */}
      <section id="feature">
        {/* Feature Container */}
        <div className="relative container flex flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0">
          {/* Image */}
          <img src="/desktop/image-interactive.jpg" alt="" />
          {/* Text Container */}
          <div className="pr-0 bg-white md:absolute top-48 md:right-0 md:py-20 md:pl-20">
            <h2 className="mx-auto max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
              The leader in interactive VR
            </h2>
            <p className="max-w-md text-center mx-auto md:text-left md:mx-0">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </section>
      {/* Creations Section */}
      <section id="creations">
        {/* Our Creations Container */}
        <div className="container max-w-6xl mx-auto my-32 px-6 py-12 text-gray-900 md:px-0">
          {/* Creations Header */}
          <div className="flex justify-center mb-20 md:justify-between">
            <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
              Our Creations
            </h2>
            <button className="hidden md:block btn">See All</button>
          </div>
          {/* Items Container*/}
          <div className="item-container">
            {/* Item 1  */}
            <div className="group item">
              {/* Desktop Image  */}
              <img
                className="hidden w-full duration-200 md:block group-hover:scale-110"
                src="/desktop/image-deep-earth.jpg"
                alt=""
              />
              {/* Mobile Image  */}
              <img
                className="w-full md:hidden"
                src="/mobile/image-deep-earth.jpg"
                alt=""
              />
              {/* Item Gradient */}
              <div className="item-gradient"></div>
              {/* Item Text  */}
              <h5>Deep Earth</h5>
            </div>
            {/* Item 2  */}
            <div className="group item">
              {/* Desktop Image  */}
              <img
                className="hidden w-full duration-200 md:block group-hover:scale-110"
                src="/desktop/image-night-arcade.jpg"
                alt=""
              />
              {/* Mobile Image  */}
              <img
                className="w-full md:hidden"
                src="/mobile/image-night-arcade.jpg"
                alt=""
              />
              {/* Item Gradient */}
              <div className="item-gradient"></div>
              {/* Item Text  */}
              <h5>Night Arcade</h5>
            </div>
            {/* Item 3  */}
            <div className="group item">
              {/* Desktop Image  */}
              <img
                className="hidden w-full duration-200 md:block group-hover:scale-110"
                src="/desktop/image-soccer-team.jpg"
                alt=""
              />
              {/* Mobile Image  */}
              <img
                className="w-full md:hidden"
                src="/mobile/image-soccer-team.jpg"
                alt=""
              />
              {/* Item Gradient */}
              <div className="item-gradient"></div>
              {/* Item Text  */}
              <h5>Soccer Team VR</h5>
            </div>
            {/* Item 4  */}
            <div className="group item">
              {/* Desktop Image  */}
              <img
                className="hidden w-full duration-200 md:block group-hover:scale-110"
                src="/desktop/image-grid.jpg"
                alt=""
              />
              {/* Mobile Image  */}
              <img
                className="w-full md:hidden"
                src="/mobile/image-grid.jpg"
                alt=""
              />
              {/* Item Gradient */}
              <div className="item-gradient"></div>
              {/* Item Text  */}
              <h5>The Grid</h5>
            </div>
          </div>
          {/* Items Container 2*/}
          <div className="item-container mt-10">
            {/* Item 1  */}
            <div className="group item">
              {/* Desktop Image  */}
              <img
                className="hidden w-full duration-200 md:block group-hover:scale-110"
                src="/desktop/image-from-above.jpg"
                alt=""
              />
              {/* Mobile Image  */}
              <img
                className="w-full md:hidden"
                src="/mobile/image-from-above.jpg"
                alt=""
              />
              {/* Item Gradient */}
              <div className="item-gradient"></div>
              {/* Item Text  */}
              <h5>From Up Above VR</h5>
            </div>
            {/* Item 2  */}
            <div className="group item">
              {/* Desktop Image  */}
              <img
                className="hidden w-full duration-200 md:block group-hover:scale-110"
                src="/desktop/image-pocket-borealis.jpg"
                alt=""
              />
              {/* Mobile Image  */}
              <img
                className="w-full md:hidden"
                src="/mobile/image-pocket-borealis.jpg"
                alt=""
              />
              {/* Item Gradient */}
              <div className="item-gradient"></div>
              {/* Item Text  */}
              <h5>Pocket Borealis</h5>
            </div>
            {/* Item 3  */}
            <div className="group item">
              {/* Desktop Image  */}
              <img
                className="hidden w-full duration-200 md:block group-hover:scale-110"
                src="/desktop/image-curiosity.jpg"
                alt=""
              />
              {/* Mobile Image  */}
              <img
                className="w-full md:hidden"
                src="/mobile/image-curiosity.jpg"
                alt=""
              />
              {/* Item Gradient */}
              <div className="item-gradient"></div>
              {/* Item Text  */}
              <h5>The Curiosity</h5>
            </div>
            {/* Item 4  */}
            <div className="group item">
              {/* Desktop Image  */}
              <img
                className="hidden w-full duration-200 md:block group-hover:scale-110"
                src="/desktop/image-fisheye.jpg"
                alt=""
              />
              {/* Mobile Image  */}
              <img
                className="w-full md:hidden"
                src="/mobile/image-fisheye.jpg"
                alt=""
              />
              {/* Item Gradient */}
              <div className="item-gradient"></div>
              {/* Item Text  */}
              <h5>Make it Fisheye</h5>
            </div>
          </div>
          {/* Bottom Button Container  */}
          <div className="flex justify-center mt-10 md:hidden">
            <button className="btn w-full md:hidden">See All</button>
          </div>
        </div>
      </section>
      {/* Credentials  */}
      <section id="author">
        {/* Author Container    */}
        <div className="container max-w-6xl mx-auto my-32 py-12 px-6 text-gray-900">
          <h2 className="uppercase text-4xl md:text-5xl text-center md:text-left mb-6">
            Author
          </h2>
          <p className="max-w-md mx-auto md:mx-0 text-center md:text-left">
            This site was created by{" "}
            <Link href="https://github.com/YoheiKo" target="_blank">
              YoheiKo
            </Link>{" "}
            using Taiwind and Next.js.
            <br />
            The content of this site don't have backend features. Full credit to
            <Link href="https://www.traversymedia.com/" target="_blank">
              www.traversymedia.com
            </Link>
            .
          </p>
        </div>
      </section>
      {/* Todo Footer */}
      <footer className="bg-black">
        {/* Container  */}
        <div className="container max-w-6xl py-10 mx-auto">
          {/* Footer Flex Container  */}
          <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
            {/* Menu & Logo Container  */}
            <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
              {/* Logo */}
              <div className="h-8">
                <img src="logo.svg" alt="" className="w-44 md:ml-3" />
              </div>
              {/* Menu Container */}
              <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
                {/* Item 1  */}
                <div className="h-10 group">
                  <Link href="#">About</Link>
                  <div className="mx-1 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                {/* Item 2  */}
                <div className="h-10 group">
                  <Link href="#">Careers</Link>
                  <div className="mx-1 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                {/* Item 3  */}
                <div className="h-10 group">
                  <Link href="#">Events</Link>
                  <div className="mx-1 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                {/* Item 4  */}
                <div className="h-10 group">
                  <Link href="#">Products</Link>
                  <div className="mx-1 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                {/* Item 5  */}
                <div className="h-10 group">
                  <Link href="#">Support</Link>
                  <div className="mx-1 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
              </div>
            </div>
            {/* Social & Copy Container */}
            <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
              {/* Icons Container  */}
              <div className="flex mx-auto items-center justify-center space-x-4 md:justify-end md:mx-0">
                {/* Icon 1  */}
                <div className="h-8 group">
                  <Link href="#">
                    <img src="icon-facebook.svg" className="h-6" alt="" />
                  </Link>
                </div>
                {/* Icon 2  */}
                <div className="h-8 group">
                  <Link href="#">
                    <img src="icon-twitter.svg" className="h-6" alt="" />
                  </Link>
                </div>
                {/* Icon 3  */}
                <div className="h-8 group">
                  <Link href="#">
                    <img src="icon-pinterest.svg" className="h-6" alt="" />
                  </Link>
                </div>
                {/* Icon 4  */}
                <div className="h-8 group">
                  <Link href="#">
                    <img src="icon-instagram.svg" className="h-6" alt="" />
                  </Link>
                </div>
              </div>
              {/* Copy Container  */}
              <div className="font-bold">
                &copy; 2021 Loopstudios. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
