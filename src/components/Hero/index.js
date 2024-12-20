import Image from "next/image";
import myimg from "../../../public/Viraj_Prajapati.jpeg";
import About from "../About";

export default function Hero() {
  return (
    <section className="py-24 text-center">
      <div className="container mx-auto px-4">
        {/* Image */}
        <div className="my-8">
          <div
            className="mx-auto rounded-full border-8 border-[#0288e8] shadow-lg overflow-hidden"
            style={{
              width: "190px", // Enforcing a square container
              height: "190px", // Same height as width
            }}
          >
            <Image
              src={myimg?.src}
              alt="Hero Icon"
              className="object-cover" // Ensures image fits within the circle
              width={180}
              height={180}
            />
          </div>
        </div>

        {/* Name */}
        <h1
          className="text-4xl md:text-6xl font-extrabold text-black tracking-widest"
          style={{ letterSpacing: "0.08em" }}
        >
          VIRAJ PRAJAPATI
        </h1>

        {/* Subtitle */}
        <div className="flex flex-wrap justify-center gap-4 mt-4 items-center text-center">
          <span className="text-lg italic font-semibold">
            Software Engineer
          </span>
          <span className="text-[20px] font-normal hidden md:inline-block">
            {"-"}
          </span>
          <span className="text-lg font-semibold italic">
            Postgraduate Student
          </span>
          <span className="text-[20px] font-normal hidden md:inline-block">
            {"-"}
          </span>
          <span className="text-lg font-semibold italic">
            AI / ML Researcher
          </span>
        </div>
      </div>
    </section>
  );
}
