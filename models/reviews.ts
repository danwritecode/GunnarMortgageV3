// Generated by https://quicktype.io

export interface ReviewApiResponse {
  html_attributions: any[];
  result:            Result;
  status:            string;
}

export interface Result {
  address_components:         AddressComponent[];
  adr_address:                string;
  business_status:            string;
  formatted_address:          string;
  formatted_phone_number:     string;
  geometry:                   Geometry;
  icon:                       string;
  icon_background_color:      string;
  icon_mask_base_uri:         string;
  international_phone_number: string;
  name:                       string;
  photos:                     Photo[];
  place_id:                   string;
  plus_code:                  PlusCode;
  rating:                     number;
  reference:                  string;
  reviews:                    Review[];
  types:                      string[];
  url:                        string;
  user_ratings_total:         number;
  utc_offset:                 number;
  vicinity:                   string;
  website:                    string;
}

export interface AddressComponent {
  long_name:  string;
  short_name: string;
  types:      string[];
}

export interface Geometry {
  location: Location;
  viewport: Viewport;
}

export interface Location {
  lat: number;
  lng: number;
}

export interface Viewport {
  northeast: Location;
  southwest: Location;
}

export interface Photo {
  height:            number;
  html_attributions: string[];
  photo_reference:   string;
  width:             number;
}

export interface PlusCode {
  compound_code: string;
  global_code:   string;
}

export interface Review {
  author_name:               string;
  author_url:                string;
  language:                  string;
  profile_photo_url:         string;
  rating:                    number;
  relative_time_description: string;
  text:                      string;
  time:                      number;
}
