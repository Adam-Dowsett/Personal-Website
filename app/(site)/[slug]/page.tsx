import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { slug: string };
};
export default async function Page({ params }: Props) {
  const project = await getPage(params.slug);

  return (
    <div>
      <h1 className="font-extrabold bg-gradient-to-r from-red-700 via-orange-500 to-green-300 bg-clip-text text-transparent">
        {project.title}
      </h1>
      <div className="text-lg text-gray-700 mt-10">
        <PortableText value={project.content} />
      </div>
    </div>
  );
}
