import Link from "next/link";
import Image from "next/image";
import { storyblokEditable } from "@storyblok/react/rsc";

const CallToAction = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="bg-white-half">
      <Link
        href={`/${blok.link.story?.url ?? "/catalog/"}`}
        className="flex rounded-lg shadow-sm bg-white mt-10 p-[30px] w-2/5 container mx-auto"
      >
        <div className="flex-auto pr-50">
          <h2 className="text-3xl font-bold font-serif text-primary mb-4">
            {blok.headline}
          </h2>
          <p className="text">{blok.text}</p>
        </div>
        <div className="flex-none w-1/3 relative">
          <Image
            src={`${blok.image.filename}/m/500x300/smart/`}
            width={500}
            height={300}
            alt={blok.image?.alt}
            className="h-[200px] w-full object-cover"
          />
        </div>
      </Link>
    </div>
  );
};

export default CallToAction;
