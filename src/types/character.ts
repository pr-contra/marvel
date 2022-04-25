import { Resource, ResourceList } from './resources';
import { StoryResource } from './story';

export type CharactersRequest = {
  attributionHTML: string;
  attributionText: string;
  code: number;
  copyright: string;
  data: CharactersData | void;
  etag: string;
  status: string;
} | void | null;

export type CharactersData = {
  count: number;
  limit: number;
  offset: number;
  results: Character[] | null;
  total: number;
} | void | null;

export type Character = {
  comics: ResourceList<Resource>;
  description: string;
  events: ResourceList<Resource>;
  id: number;
  modified: string;
  name: string;
  resourceURI: string;
  series: ResourceList<Resource>;
  stories: ResourceList<StoryResource>;
  thumbnail: Thumbnail;
  urls: Url[];
};

type Url = {
  type: string;
  url: string;
};

type Thumbnail = {
  extension: string;
  path: string;
};
