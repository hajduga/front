import {Comment} from "./comment";

export interface ArticleDetails {
  id: number,
  title: string,
  specialistName: string,
  shortDescription: string,
  description: string,
  image: string,
  slug: string,
  comments: Array<Comment>
}
