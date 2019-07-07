import {Comment} from './comment';

export class Item {
  id: number;
  featured: boolean;
  name: string;
  imageList: string[];
  category: string;
  label: string;
  price: string;
  description: string;
  comments: Comment[];
}
