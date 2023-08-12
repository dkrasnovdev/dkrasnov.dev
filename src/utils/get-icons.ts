import {
  IconGraphQL,
  IconGolang
} from '$components/icons'

export default function getIcons(tags: string[]) {
  const icons = []
  if (tags.includes("graphql")) icons.push(IconGraphQL)
  if (tags.includes("golang")) icons.push(IconGolang)
  return icons

}
