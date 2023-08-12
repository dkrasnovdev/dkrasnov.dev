import jobProjects from '$data/prof-projects.json'
import getIcons from '$utils/get-icons';

const projects = [
  ...jobProjects.map((project) => {
    return {
      name: project.name,
      icons: getIcons(project.tags),
      tags: project.tags,
      url: project.url,
      repository: project.repository,
    }
  })
]

export { projects };
