import jobportfolio from "$data/prof-portfolio.json";
import getIcon from "$utils/get-icon";

const portfolio = [
  ...jobportfolio.map((portfolio) => {
    return {
      name: portfolio.name,
      icon: getIcon(portfolio.tags),
      tags: portfolio.tags,
      url: portfolio.url,
      repository: portfolio.repository,
    };
  }),
];

export { portfolio };
