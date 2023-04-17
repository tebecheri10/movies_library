interface Country {
    name: string
    code: string
    timezone: string
  }
  
  interface Network {
    id: number
    name: string
    country: Country
  }
  
  interface WebChannel {
    id: number
    name: string
    country: Country
  }
  
  interface Rating {
    average: number | null
  }
  
  interface Schedule {
    time: string
    days: string[]
  }
  
  interface Image {
    medium: string
    original: string
  }
  
  interface Links {
    self: {
      href: string
    }
    previousepisode: {
      href: string
    }
  }
  
 export interface ExtraDataType {
    id: number
    url: string
    name: string
    type: string
    language: string
    genres: string[]
    status: string
    runtime: number
    premiered: string
    officialSite: string | null
    schedule: Schedule
    rating: Rating
    weight: number
    network: Network
    webChannel: WebChannel | null
    image: Image | null
    summary: string
    updated: number
    _links: Links
  }
  