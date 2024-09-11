import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <h1 className="text-7xl font-extrabold">
        Hello I&apos;m <span className="text-blue-500">Adam</span>!
      </h1>

      <div className="flex flex-col gap-1">
        <p className="mt-3 text-sm dark:text-gray-400 light:text-gray-700">
          I’m Adam, a software engineer at a dynamic fintech startup, where we
          are revolutionizing the way financial analysts, buy and sell-side
          professionals, and investor relations officers interact with data and
          insights. Our cutting-edge solutions are designed to empower users
          with intuitive tools that deliver powerful results.
        </p>
        <p className="mt-3 text-sm dark:text-gray-400 light:text-gray-700">
          My work focuses on building seamless integrations between widely-used
          platforms, such as Excel and advanced web-based analytics. I’ve
          developed Excel add-ins using the JavaScript API, creating a smooth
          transition from spreadsheet-based workflows to advanced analytics on
          our platform. This ensures users can leverage the full capabilities of
          our product while staying within the familiarity of Excel.
        </p>
        <p className="mt-3 text-sm dark:text-gray-400 light:text-gray-700">
          I’ve also integrated HubSpot CRM, enabling our sales team to tap into
          the full potential of HubSpot’s robust features, streamlining their
          processes and improving efficiency. On the technical front, I
          specialize in front-end development with React, alongside Next.js, and
          handle backend development using Node.js and Bun, ensuring our
          products are fast, scalable, and user-friendly.
        </p>
      </div>
      <h2 className="mt-8 font-bold dark:text-gray-400 light:text-gray-700 text-3xl text-center">
        My Projects
      </h2>

      <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border border-gray-500 rounded-lg p-3 transition duration-400 hover:shadow-lg hover:shadow-gray-500 flex flex-col items-center hover:scale-101 w-fit h-fit"
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
            <div className="font-extrabold text-blue-500">{project.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
