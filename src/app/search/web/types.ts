import { GoogleImageResultObjectT } from '../image/type';

export type GoogleResultObjectT = {
  cacheId?: string;
  kind: string;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  formattedUrl: string;
  htmlFormattedUrl: string;
  pageMap: [];
};

export type GoogleQueryT = {
  count: number;
  cx: string;
  inputEncoding: string;
  outputEncoding: string;
  safe: string;
  searchTerms: string;
  startIndex: number;
  title: string;
  totalResults: string;
};

export type GoogleSearchInformationT = {
  formattedSearchTime: string;
  formattedTotalResults: string;
  searchTime: number;
  totalResults: string;
};

export type GoogleResponseT = {
  context: {
    title: string;
  };
  items: GoogleResultObjectT[];
  kind: string;
  queries: {
    request: GoogleQueryT[];
    nextPage: GoogleQueryT[];
  };
  searchInformation: GoogleSearchInformationT;
  url: {
    template: string;
    type: string;
  };
};
