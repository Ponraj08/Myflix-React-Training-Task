import romance_img from "../assets/images/romance_img.jpg"
import triller_img from "../assets/images/triller.jpg"
import comedy_img from "../assets/images/comedy.jpg"

export interface IOverall_genre{
    id:number;
    img:any;
    genre:string;
    description:string;
    movies:string[]
}

export const Overall_genre:IOverall_genre[] = [
  {
    id: 1,
    img: romance_img,
    genre: "Romance",
    description: "A romantic story.",
    movies: [
      "Raja Rani","kadhal","LOve Today"
    ],
  },
  {
    id: 2,
    img: triller_img,
    genre: "Triller",
    description: "A triller story.",
    movies: [
       "kanchana","lights out","conjuring"
    ],
  },
  {
    id: 1,
    img: comedy_img,
    genre: "Comedy",
    description: "A romantic story.",
    movies: [
       "Madhagagaraja","OkOK","Comedy","nanban"
    ],
  },
];
