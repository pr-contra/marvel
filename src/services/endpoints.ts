export const getCharactersEndpoint = (
  userSearch: string,
  page: number,
  itemsPerPage: number,
): string => {
  const search = userSearch.trim().toLocaleLowerCase();
  const offset = page * itemsPerPage;

  return (
    `/characters?` +
    `&offset=${offset}&limit=${itemsPerPage}` +
    `${search ? `&nameStartsWith=${search}` : ''}`
  );
};
