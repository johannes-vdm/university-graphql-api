export interface University {
  country: string;
  domains: string[];
  alpha_two_code: string;
  state_province: string;
  name: string;
  web_pages: string[];
}

export interface UniversityFilter {
  name?: string;
  state_province?: string;
  // web_pages: string[];
}
