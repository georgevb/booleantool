import { IconType } from 'react-icons';

export interface BaseSlide {
  id: string;
  icon: IconType;
  title: string;
  subtitle: string;
  content: string;
  details: {
    title: string;
    content?: string;
    items?: string[];
  }[];
  preview?: {
    type: string;
    title: string;
    content: any;
  };
}