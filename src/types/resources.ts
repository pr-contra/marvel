export type ResourceList<T> = {
  available: number;
  collectionURI: string;
  items: T[];
  returned: number;
};

export type Resource = {
  name: string;
  resourceURI: string;
};
