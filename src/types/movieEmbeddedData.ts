interface Episode {
    airdate: string;
    airstamp: string;
    airtime: string;
    id: number;
    image: string | null;
    name: string;
    number: number;
    rating: {
      average: number | null;
    };
    runtime: number;
    season: number;
    summary: string;
    type: string;
    url: string;
  }
  
  interface Character {
    id: number;
    image: string | null;
    name: string;
    url: string;
  }
  
  interface Person {
    birthday: string | null;
    country: {
      code: string;
      name: string;
      timezone: string;
    } | null;
    deathday: string | null;
    gender: string | null;
    id: number;
    image: {
      medium: string;
      original: string;
    } | null;
    name: string;
    updated: number;
    url: string;
  }
  
  interface CastMember {
    character: Character;
    person: Person;
    self: boolean;
    voice: boolean;
  }
  
  interface Images {
    id: number;
    url: string;
  }
  
 export interface movieEmbeddedDataType {
    episodes: Episode[];
    cast: CastMember[];
    images: Images[];
  }
  