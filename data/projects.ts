import { ProjectType } from "@/types/project";
const js = {
  name: "javascript",
};
const react = {
  name: "react",
};
const nextjs = {
  name: "nextjs",
  url: "https://nextjs.org/",
};
const chakra = {
  name: "chakra-ui",
  url: "https://chakra-ui.com/",
};
const project: ProjectType[] = [
  {
    title: "Hexa",
    image: require("public/projects/hexa.jpg"),
    description:
      "Mass deploy Pterodactyl Wings instance.",
    createdAt: "2024-06-26",
    technology: [js],
    url: "https://github.com/radityprtama/Hexa",
    source: "https://github.com/radityprtama/Hexa",
  },
];

export default project;
