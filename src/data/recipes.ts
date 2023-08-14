import r from "$data/recipes.json";
import getIcon from "$utils/get-icon";

const recipes = [
  ...r.map((recipe) => {
    return {
      name: recipe.name,
      description: recipe.description,
      icon: getIcon(recipe.tags),
      tags: recipe.tags,
      repository: recipe.repository,
    };
  }),
];

export { recipes };
