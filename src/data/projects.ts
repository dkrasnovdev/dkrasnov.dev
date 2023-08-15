import portfolio from "$data/portfolio.json";
import getIcon from "$utils/get-icon";

const projects = [
  ...portfolio.map((project) => {
    return {
      name: project.name,
      description: project.description,
      icon: getIcon(project.tags),
      tags: project.tags,
      url: project.url,
    };
  }),
];

export { projects };
