import Image from "next/image";
import React from "react";

export default function CardWork({
  images,
  company,
  service,
}: {
  images: string[];
  company: string;
  service: string;
}) {
  const lengthImages = images.length;

  return (
    <div className="w-full max-w-[500px] aspect-square space-y-2">
      <div className="flex justify-between items-center w-full aspect-square rounded-[30px] overflow-hidden ">
        {images.slice(0, lengthImages).map((img, index) => (
          <Image
            width={500}
            height={500}
            key={index}
            src={img}
            alt={service}
            className={`object-cover h-full hover:scale-125 transition-all saturate-200 max-lg:pointer-events-none ${
              images.length === 2 ? "w-[49.5%]" : "w-full"
            }`}
          />
        ))}
      </div>

      <div className="w-full flex justify-between items-end">
        <div className="max-w-[100%]">
          <p className="text-base font-medium">{company}</p>
          <p className="text-sm text-text-secondary text-nowrap w-full text-ellipsis overflow-hidden ">
            {service}
          </p>
        </div>

        {/* <Link
          href={"/"}
          className="text-base text-end flex justify-end items-center gap-2 hover:text-primary transition-all group"
        >
          View All
          <IconArrowRight className="group-hover:translate-x-1 transition-all" />
        </Link> */}
      </div>
    </div>
  );
}
