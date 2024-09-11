import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);
  return (
    <div>
      <header className="flex justify-between items-center">
        <h1 className="font-extrabold text-blue-500 text-4xl font-extrabold">
          {project.name}
        </h1>
      </header>
      <Image
        src={project.image}
        alt={project.name}
        width={1920}
        height={1080}
        className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
      />
      <div className="text-lg mt-5 dark:text-gray-400 light:text-gray-700">
        <PortableText value={project.content} />
      </div>
    </div>
  );
}
