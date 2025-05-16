import { ReactNode } from "react";

export interface DataItem {
  prompt?: string;
  name?: string | undefined;
  url?: string | undfined;
}

export interface ChatResponse {
  explanation_ai: DataItem[];
  services: DataItem[];
}

export interface ListFeatureProps { 
  logo?: ReactNode;
  text?: string;
}

export interface ModeItemProps {
  logo?: ReactNode;
  title?: string;
  desc?: string;
  onClick?: () => void;
}