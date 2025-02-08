import Image from "next/image";

const Page = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center py-12 px-6 bg-gray-100 text-center"
    >
      <div className="max-w-3xl w-full">
        <Image
          src="/Hak.png" // Replace with your actual image path
          alt="Hakob Sukiasyan"
          width={300}
          height={300}
          className="rounded-full mx-auto mb-4 shadow-lg"
        />
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Hak Sukiasyan</h2>
        <h3 className="text-xl text-gray-700 mb-4">Web & Mobile Developer</h3>
        <p className="text-gray-600 leading-relaxed">
          I am a passionate and dedicated Frontend Developer & Content Creator
          with expertise in building modern web and mobile applications. My
          focus is on crafting seamless user experiences using cutting-edge
          technologies like React, Next.js, and React Native. With a strong
          attention to detail and problem-solving mindset, I ensure that every
          project meets high-quality standards.
        </p>
        <div className="mt-6 space-y-2 text-gray-800">
          <p>
            <b>📞 Phone:</b> +31 62 521 27 30
          </p>
          <p>
            <b>📧 Email:</b>{" "}
            <a
              href="mailto:s.hakob@gmail.com"
              className="text-blue-600 hover:underline"
            >
              s.hakob@gmail.com
            </a>
          </p>
          <p>
            <b>📍 Address:</b> Den Haag, The Netherlands
          </p>
        </div>
      </div>
    </section>
  );
};
export default Page;
