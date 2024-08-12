import { useState } from "react";
import { ChevronDown } from "lucide-react";

const options = [
  { id: "react", name: "React", icon: "/images/react.svg" },
  { id: "nextjs", name: "Next.js", icon: "/images/nextjs.svg" },
  {
    id: "tanstack-query",
    name: "Tanstack Query",
    icon: "/images/react-query.svg",
  },
  { id: "docker", name: "Docker", icon: "/images/docker.svg" },
  { id: "supabase", name: "Supabase", icon: "/images/supabase.svg" },
  { id: "hono", name: "Hono", icon: "/images/hono.svg" },
  { id: "firebase", name: "Firebase", icon: "/images/firebase.svg" },
  { id: "bunny", name: "Bunny", icon: "/images/bunny-net.svg" },
  { id: "mongodb", name: "MongoDB", icon: "/images/mongodb.svg" },
  { id: "bun", name: "Bun", icon: "/images/bun.svg" },
  { id: "nuxt", name: "Nuxt", icon: "/images/nuxt.svg" },
  { id: "remix", name: "Remix", icon: "/images/remix.svg" },
  { id: "kubernetes", name: "Kubernetes", icon: "/images/kubernetes.svg" },
  { id: "tailwind", name: "Tailwind CSS", icon: "/images/tailwind.svg" },
  { id: "vercel", name: "Vercel", icon: "/images/vercel.svg" },
];

const PickOptions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleOption = (option) => {
    setSelectedOptions((prev) =>
      prev.some((item) => item.id === option.id)
        ? prev.filter((item) => item.id !== option.id)
        : [...prev, option]
    );
  };

  return (
    <div className="w-80 font-sans">
      <div className="mb-2 flex flex-wrap gap-2">
        {selectedOptions.map((option) => (
          <span
            key={option.id}
            className="inline-flex items-center px-2 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
          >
            <img src={option.icon} alt={option.name} className="w-4 h-4 mr-1" />
            {option.name}
          </span>
        ))}
      </div>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Choose an option
          <ChevronDown className="float-right" />
        </button>
        {isOpen && (
          <ul className="z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
            {options.map((option) => (
              <li
                key={option.id}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                onClick={() => toggleOption(option)}
              >
                <img
                  src={option.icon}
                  alt={option.name}
                  className="w-5 h-5 inline-block mr-2"
                />
                <span className="flex-grow">{option.name}</span>
                {selectedOptions.some((item) => item.id === option.id) && (
                  <span className="text-green-500">✓</span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default PickOptions;
