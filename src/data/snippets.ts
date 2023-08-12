import jsonSnippets from '$data/snippets.json'
import getIcons from '$utils/get-icons';

const snippets = [
  ...jsonSnippets.map((snippet) => {
    return {
      name: snippet.name,
      description: snippet.description,
      icons: getIcons(snippet.tags),
      tags: snippet.tags,
    }
  })
]

export { snippets };
