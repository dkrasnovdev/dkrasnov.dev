export default function hasMatch<T extends Record<string, unknown>>(
  source: T,
  query: string,
  includeKeys?: string[],
): boolean {
  const normalizedQuery = query.normalize().toLowerCase();

  const result = Object.keys(source).map((key) => {
    const value = source[key];

    if (!!includeKeys && includeKeys.length > 0 && !includeKeys.includes(key)) {
      return false;
    }

    if (typeof value === "string") {
      const normalizedValue = value.normalize().toLowerCase();

      return normalizedValue.includes(normalizedQuery);
    }

    if (Array.isArray(value)) {
      const result = value.map((item) => {
        if (typeof item === "string") {
          const normalizedValue = item.normalize().toLowerCase();

          return normalizedValue.includes(normalizedQuery);
        }

        return false;
      });

      return result.includes(true);
    }

    return false;
  });

  return result.includes(true);
}
