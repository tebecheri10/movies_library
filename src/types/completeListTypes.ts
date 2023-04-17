interface Country {
    code: string;
    name: string;
    timezone: string;
  }
  
  interface Network {
    id: number;
    name: string;
    country: Country;
    [key: string]: any; 
  }
  
  interface Schedule {
    time: string;
    days: string[];
  }
  
  interface Rating {
    average: number | null;
  }
  
  interface Links {
    self: { href: string };
    previousepisode: { href: string };
  }
  
  interface Show {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: string[];
    status: string;
    runtime: number;
    premiered: string;
    officialSite: string | null;
    schedule: Schedule;
    rating: Rating;
    weight: number;
    network: Network | null;
    webChannel: { id: number; name: string; country: Country } | null;
    externals: { tvrage: number | null; thetvdb: number | null; imdb: string | null };
    image: { medium: string; original: string };
    summary: string;
    updated: number;
    _links: Links;
  }
  
  export interface CompleteListType {
    score: number;
    show: Show;
  }
  

  //