/** Payload when creating a meal (upload is a File before save). */
export interface NewMeal {
  title: string;
  summary: string;
  instructions: string;
  image: File;
  creator: string;
  creator_email: string;
}

/** Meal as stored and displayed (image is a public URL path). */
export interface Meal {
  id?: string;
  title: string;
  slug?: string;
  image: string;
  summary: string;
  creator: string;
  creator_email: string;
  instructions: string;
}