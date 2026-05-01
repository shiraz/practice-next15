export interface Meal {
  id?: string;
  title: string;
  slug?: string;
  image: File;
  summary: string;
  creator: string;
  creator_email: string;
  instructions: string;
}