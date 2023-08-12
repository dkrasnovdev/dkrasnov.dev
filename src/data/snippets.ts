import jsonSnippets from '$data/snippets.json'
import getIcon from '$utils/get-icon';

const snippets = [
  ...jsonSnippets.map((snippet) => {
    return {
      name: snippet.name,
      description: snippet.description,
      icon: getIcon(snippet.tags),
      tags: snippet.tags,
    }
  })
]

export { snippets };
