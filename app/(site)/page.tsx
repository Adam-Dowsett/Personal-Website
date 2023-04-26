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
      <p className="mt-3 text-xl dark:text-gray-400 light:text-gray-700">
        Greetings and welcome to my website! I'm excited to share my projects
        with you and hope you'll find them interesting and inspiring. If you
        have any questions or would like to collaborate, please feel free to
        connect with me on LinkedIn or Github using the links below. Thanks for
        stopping by!
      </p>
      <h2 className="mt-8 font-bold dark:text-gray-400 light:text-gray-700 text-3xl">
        My Projects:
      </h2>

      <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border border-gray-500 rounded-lg p-3 transition duration-400 hover:shadow-lg hover:shadow-gray-500 flex flex-col items-center hover:scale-101"
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
