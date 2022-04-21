export const getCharactersEndpoint = (
  userSearch: string,
  page: number,
  itemsPerPage: number,
): string => {
  const search = userSearch.trim().toLocaleLowerCase();

  return (
    `/characters?` +
    `&offset=${page}&limit=${itemsPerPage}` +
    `${search ? `&nameStartsWith=${search}` : ''}`
  );
};
