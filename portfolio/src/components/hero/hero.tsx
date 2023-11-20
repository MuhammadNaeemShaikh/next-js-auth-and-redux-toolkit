'use client';
import React, { useState } from 'react';
import { MdOutlineMailOutline } from 'react-icons/md';
import { BsFillPersonVcardFill } from 'react-icons/bs';

const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1">
      <div className="h-96 flex flex-col justify-center">
        <div className="text-xl">
          I &apos;M{' '}
          <span className="uppercase font-extrabold">a Developer</span>
        </div>
        <div className="text-justify w-96 my-2 font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
          mollitia possimus voluptatibus neque omnis esse architecto ipsam
          aspernatur a itaque suscipit laboriosam explicabo obcaecati ipsum
          aliquid minima animi, reprehenderit perspiciatis.
        </div>
        <div className="space-x-4 flex">
          <button className="button">
            About Me
            <BsFillPersonVcardFill className="text-lg" />
          </button>
          <button className="button">
            Contact Me <MdOutlineMailOutline className="text-lg" />
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
