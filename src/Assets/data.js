import afimg from "./afbuety.webp";
import american from "./categories/american.svg"
import asian from "./categories/asian.svg"
import caribbean from "./categories/caribbean.svg"
import auropean from "./categories/european.svg"
import local from "./categories/local-deli.svg"
//products pictures
import drink from './fruitdrink.webp'
import millo from './millo.webp'
import spray from './sure.webp'
import goya from './goya.webp'

export const products = [
  {
    id: 1,
    procuct_category: "Asian",
    product_label: "Dried Cayenne Pepper (1 pk)",
    produc_price: 2.2,
    product_image: drink,
  },
  {
    id: 2,
    procuct_category: "Asian",
    product_label: "Excelsior Corned Beef (12 Oz)",
    produc_price: 5.12,
    product_image: millo,
  },
  {
    id: 3,
    procuct_category: "Asian",
    product_label: "Mezban Beef Samosa - 11.29oz (320g)",
    produc_price: 10.99,
    product_image: afimg,
  },
  {
    id: 4,
    procuct_category: "Caribbem",
    product_label: " BB Cocktail de Fruit",
    produc_price: 2.2,
    product_image: afimg,
  },
  {
    id: 5,
    procuct_category: "Caribbem",
    product_label: "African Beauty Fufu -Plantain",
    produc_price: 7.7,
    product_image: drink,
  },
  {
    id: 6,
    procuct_category: "Caribbem",
    product_label: "Nestle Cerelac (Maize /w Milk)/ 1Kg",
    produc_price: 19.99,
    product_image: goya,
  },
  {
    id: 7,
    procuct_category: "Europea",
    product_label: "Nestle Milo (1.5kg)",
    produc_price: 18.09,
    product_image: afimg,
  },
  {
    id: 8,
    procuct_category: "Europea",
    product_label: "Shine n Jam Magic fingers Mousse for Braiders- 354ml",
    produc_price: 5.39,
    product_image: millo,
  },
  {
    id: 9,
    procuct_category: "Europea",
    product_label: "Goya Tomato Sauce (227g)",
    produc_price: 10,
    product_image: goya,
  },
  {
    id: 10,
    procuct_category: "Local Deli",
    product_label: "African Beauty Fufu -Plantain",
    produc_price: 18.09,
    product_image: afimg,
  },
  {
    id:499,
    procuct_category: "American",
    product_label: "African Beauty Fufu -Plantain",
    produc_price: 14.0,
    product_image: millo,
  },
  {
    id: 122,
    procuct_category: "American",
    product_label: "African Beauty Fufu -Plantain",
    produc_price: 18.09,
    product_image: spray,
  },
  {
    id: 78,
    procuct_category: "American",
    product_label: "BB Cocktail de Fruit",
    produc_price: 5.39,
    product_image: afimg,
  },
  {
    id: 12,
    procuct_category: "Local Deli",
    product_label: "African Kente Cloth/Fabric",
    produc_price: 6.5,
    product_image: afimg,
  },
  {
    id: 13,
    procuct_category: "Middle Eastern",
    product_label: "African Beauty Fufu -Plantain",
    produc_price: 18.09,
    product_image: millo,
  },
  {
    id: 14,
    procuct_category: "Middle Eastern",
    product_label: "BB Cocktail de Fruit",
    produc_price: 5.39,
    product_image: afimg,
  },
  {
    id: 47,
    procuct_category: "Middle Eastern",
    product_label: "African Kente Cloth/Fabric",
    produc_price: 6.5,
    product_image: goya,
  },
];

export const categories = [
  { id: 1, name: "Asian", image: asian },
  { id: 2, name: "Caribbem", image: caribbean },
  { id: 3, name: "Europea", image: auropean },
  { id: 4, name: "Local Deli", image: local },
  { id: 5, name: "American", image: american },
  { id: 1, name: "Middle Eastern", image: asian },
];

export const freqentAskedQ = [
  {
    id: 1,
    tittile: "Neque porro quisquam est qui dolorem ipsum quia dolor?",
    question:
      "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
  },
  {
    id: 2,
    tittile:
      "Neque porro quisquam est qui dolorem ipsum quia dolor?",
    question:
      "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
  },
  {
    id: 3,
    tittile:
      "Neque porro ipsum quia dolor?",
    question:
      "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
  },
  {
    id: 4,
    tittile: "Neque porro quisquam est qui dolorem ipsum quia dolor?",
    question:
      "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
  },
  {
    id: 5,
    tittile: "Neque porro ipsum quia dolor?",
    question:
      "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
  },
];
