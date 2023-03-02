import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React, { useState } from "react";
import reviewers from "./data";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviewers[index];

  const checkNumberIsValid = (number) => {
    if (number > reviewers.length - 1) return 0;
    else if (number < 0) return reviewers.length - 1;
    return number;
  };

  const nextPeople = () => {
    setIndex((prevIndex) => {
      const updatedIndex = prevIndex + 1;
      return checkNumberIsValid(updatedIndex);
    });
  };

  const previousPeople = () => {
    setIndex((prevIndex) => {
      const updatedIndex = prevIndex - 1;
      return checkNumberIsValid(updatedIndex);
    });
  };

  const randomPeople = () => {
    let randomNumber = Math.floor(Math.random() * reviewers.length);
    if (randomNumber === index) randomNumber++;
    setIndex(checkNumberIsValid(randomNumber));
  };

  return (
    <article className="bg-gray-50 p-3 shadow-2xl">
      <div className="w-32 h-32 rounded-full mx-auto">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="text-center p-6">
        <h1 className="text-lg font-bold tracking-widest capitalize">{name}</h1>
        <span className="text-sm text-blue-400 font-semibold uppercase">
          {job}
        </span>
        <p className="text-gray-600">{text}</p>

        <div className="py-4">
          <button className="pr-4" onClick={previousPeople}>
            <FaChevronLeft />
          </button>
          <button onClick={nextPeople}>
            <FaChevronRight />
          </button>
        </div>

        <div>
          <button
            onClick={randomPeople}
            className="px-3 py-1 bg-blue-900 text-sm text-white"
          >
            SURPRISE ME
          </button>
        </div>
      </div>
    </article>
  );
};

export default Review;
