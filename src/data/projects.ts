import jobProjects from '$data/prof-projects.json'
import getIcon from '$utils/get-icon';

const projects = [
  ...jobProjects.map((project) => {
    return {
      name: project.name,
      icon: getIcon(project.tags),
      tags: project.tags,
      url: project.url,
      repository: project.repository,
    }
  })
]

export { projects };
