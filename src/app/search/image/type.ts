import { GoogleQueryT, GoogleResultObjectT, GoogleSearchInformationT } from '../web/types';

export type GoogleImageResultObjectT = Omit<GoogleResultObjectT, 'cacheId' | 'pageMap'> & {
  mime: string;
  fileFormat: string;
  image: GoogleImageT;
};

export type GoogleImageT = {
  contextLink: string;
  height: number;
  width: number;
  byteSize: number;
  thumbnailLink: string;
  thumbnailHeight: number;
  thumbnailWidth: number;
};

export type GoogleImageResponseT = {
  context: {
    title: string;
  };
  items: GoogleImageResultObjectT[];
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
