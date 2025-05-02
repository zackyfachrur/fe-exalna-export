export interface DataItem {
  prompt?: string;
  name?: string;
  url?: string;
}

export interface ChatResponse {
  explanation_ai: DataItem[];
  services: DataItem[];
}
