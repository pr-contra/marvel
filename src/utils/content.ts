export const parseDescription = (description: string) =>
  description
    ? description.length > 100
      ? description.slice(0, 100).concat('...')
      : description
    : 'No available description.';
