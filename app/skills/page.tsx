import BubbleChart from "@/app/skills/Bubblechart";
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  ServerIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";

const skillsData = [
  { label: "JavaScript", values: [10, 15, 20] },
  { label: "React", values: [25, 30, 35] },
  { label: "Next.js", values: [18, 22, 28] },
  { label: "Node.js", values: [12, 19, 26] },
  { label: "React Native", values: [20, 25, 30] },
  { label: "TypeScript", values: [15, 18, 21] },
];

const servicesData = [
  {
    title: "Frontend Development",
    description: "Building modern, responsive, and interactive web apps.",
    icon: CodeBracketIcon,
  },
  {
    title: "Mobile App Development",
    description: "Creating cross-platform apps using React Native.",
    icon: DevicePhoneMobileIcon,
  },
  {
    title: "Backend Development",
    description: "Developing APIs and server-side applications using Node.js.",
    icon: ServerIcon,
  },
  {
    title: "UI/UX Design",
    description:
      "Designing user-friendly interfaces with great user experience.",
    icon: PaintBrushIcon,
  },
];

const Page = () => {
  return (
    <div className="bg-gray-100 text-center p-8">
      {/* Skills Section */}
      <section id="skills" className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">My Skills</h2>
        <p className="text-lg text-gray-600 mb-8">
          A collection of my technical skills in web and mobile development.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-700">
                {skill.label}
              </h3>
              <div className="h-56 w-56">
                <BubbleChart skillData={skill.values} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">My Services</h2>
        <p className="text-lg text-gray-600 mb-8">
          I offer full-cycle development services to bring your ideas to life.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
            >
              <service.icon className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
