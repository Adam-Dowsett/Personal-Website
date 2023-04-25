import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <h1 className="text-7xl font-extrabold">
        Hello I&apos;m{" "}
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Adam
        </span>
        !
      </h1>
      <p className="mt-3 text-xl text-gray-600">
        Hello, thank you for visiting my page please take a look at my projects
      </p>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects:</h2>

      <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border border-gray-500 rounded-lg p-3 hover:shadow-lg hover:shadow-gray-500 flex flex-col items-center"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={400}
                height={300}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
            <div className="font-extrabold bg-gradient-to-r from-red-700 via-orange-500 to-green-300 bg-clip-text text-transparent">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
