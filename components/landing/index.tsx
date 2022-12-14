import Image from "next/image";
import React from "react";

export default function FirstScreen() {
  return (
    <section className="relative flex h-full flex-col items-center justify-start gap-32 pb-16 pt-16 md:flex-row md:justify-center md:pb-0 md:pt-0">
      <div className="flex w-[90%] flex-col gap-16 md:w-auto">
        <div>
          <p className="text-[18px] font-medium text-white">Hi. I am</p>
          <h1
            id="title"
            className="title text-[48px] text-white md:text-[62px] tracking-tight"
          >
            ASHUTOSH
          </h1>
          <h2 className="text-[23px] tracking-tight font-medium text-purple-light md:text-[32px]">
            &gt; Front-end developer And Competitive Programmer
          </h2>
        </div>
        <div className="flex flex-col gap-2 italic text-gray-100 md:gap-1">
          <p>
            // I craft interactive and beautiful web apps, and I love what I do.
          </p>
          <p>// View some of my personal projects!</p>
        </div>
      </div>
      <div className="relative z-50 hidden h-[25vw] w-[25vw] rounded-full md:block">
        <Image
          src={
            "https://res.cloudinary.com/dekgw9knc/image/upload/v1664555208/samples/photo_2022-09-30_21-55-03_hgvptc.jpg"
          }
          height="300"
          width="300"
          layout="responsive"
          alt="aashut0xh"
          className="rounded-full"
        />
      </div>
      {/* background blur */}
      <div className="bg-blur-one absolute top-[10vh] right-[20vw] z-40 h-[20vw] w-[20vw]" />
    </section>
  );
}
