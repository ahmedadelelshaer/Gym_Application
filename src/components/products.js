import creatine from 'E:/Fitness_app_React/src/assets/creatine.png';
import protein from 'E:/Fitness_app_React/src/assets/protein.png';
import amino from 'E:/Fitness_app_React/src/assets/amino.png';
import preworkout from 'E:/Fitness_app_React/src/assets/preworkout.png';
import multivitamin from 'E:/Fitness_app_React/src/assets/multivitamin.png';

const products = [
  {
    id:1,
    imageUrl: creatine,
    category: "creatine",
    title: "RedRex MonoHydrate creatine 500mg",
    price: 900,
    stock: "In stock: 1",
    reviews: "Reviews: (500+)"
  },
  {
    id:2,
    imageUrl: protein,
    category: "protein",
    title: "Ultra Whey Protein 2kg",
    price: 1500,
    stock: "In stock: 3",
    reviews: "Reviews: (1200+)"
  },
  {
    id:3,
    imageUrl: amino,
    category: "amino acids",
    title: "Amino Boost 300g",
    price: 750,
    stock: "In stock: 2",
    reviews: "Reviews: (800+)"
  },
  {
    id:4,
    imageUrl: preworkout,
    category: "pre-workout",
    title: "Energy Surge Pre-Workout 500g",
    price: 1000,
    stock: "In stock: 5",
    reviews: "Reviews: (600+)"
  },
  {
    id:5,
    imageUrl: multivitamin,
    category: "multivitamins",
    title: "Daily Multivitamin 60 Tablets",
    price: 500,
    stock: "In stock: 10",
    reviews: "Reviews: (900+)"
  }
];

export default products;
