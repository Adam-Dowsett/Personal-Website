import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <h1 className="text-7xl font-extrabold text-center">
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          About me
        </span>
      </h1>
      <p className="mt-6 text-xl dark:text-gray-400 light:text-gray-700">
        Hi, I&apos;m Adam. I&apos;m a software engineer and web developer. I
        went to the University of Warwick and studied systems engineering, I
        then went on to complete a software development course with La Fosse
        Academy formerly known as Future Proof.
      </p>
      <p className="mt-3 text-xl dark:text-gray-400 light:text-gray-700">
        I have completed a number of projects using a variety of technologies
        such as React, Flask, TypeScript and more. I am currently working on a
        project that uses React and Firebase as the backend.
      </p>
      <p className="mt-3 text-xl dark:text-gray-400 light:text-gray-700">
        Outside of coding, I enjoy playing video games and going to the gym. I
        am big on tv shows and anime and will binge watch a series in a day if
        I&apos;m not careful.
      </p>
      <p className="mt-3 text-xl dark:text-gray-400 light:text-gray-700">
        I am currently looking for a role as a software engineer or web Dev. If
        you would like to get in touch please use the links below.
      </p>
    </div>
  );
}
