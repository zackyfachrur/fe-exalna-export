import { ReactNode } from "react";

export interface DataItem {
  prompt?: string;
  name?: string;
  url?: string;
}

export interface ChatResponse {
  explanation_ai: DataItem[];
  services: DataItem[];
}

export interface ListFeatureProps { 
  logo?: ReactNode;
  text?: string;
}