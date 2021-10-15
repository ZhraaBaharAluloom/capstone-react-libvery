import React, { useState } from "react";
import BookCard from "../components/BookCard";
import { AiOutlineSearch } from "react-icons/ai";
import { FiPlusCircle } from "react-icons/fi";
import AddBookModal from "../components/AddBookModal";
import AnimateButton from "../customs/AnimateButton";

function Books() {
  const [isAddBookModalOpen, setIsAddBookModalOpen] = useState(false);

  const books = [
    {
      id: 1,
      title: "The Lord of the Rings",
      genres: ["Fantasy", "Novel", "Drama", "Adventure", "Action"],
      image:
        "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
      rating: 5,
      price: "10.99$",
    },
    {
      id: 2,
      title: "The Hobbit",
      genres: ["Fantasy", "Adventure"],
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX331_BO1,204,203,200_.jpg",
      rating: 5,
      price: "10.99$",
    },
    {
      id: 3,
      title: "The Lord of the Rings",
      genres: ["Fantasy", "Adventure", "Drama"],
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX331_BO1,204,203,200_.jpg",
      rating: 5,
      price: "10.99$",
    },
    {
      id: 4,
      title: "The Hobbit",
      genres: ["Fantasy", "Adventure"],
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX331_BO1,204,203,200_.jpg",
      rating: 5,
      price: "10.99$",
    },
    {
      id: 5,
      title: "The Lord of the Rings",
      genres: ["Fantasy", "Adventure", "Drama"],
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX331_BO1,204,203,200_.jpg",
      rating: 5,
      price: "10.99$",
    },
    {
      id: 6,
      title: "The Hobbit",
      genres: ["Fantasy", "Adventure"],
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX331_BO1,204,203,200_.jpg",
      rating: 5,
      price: "10.99$",
    },

    {
      id: 7,
      title: "The Lord of the Rings",
      genres: ["Fantasy", "Adventure", "Drama"],
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX331_BO1,204,203,200_.jpg",
      rating: 5,
      price: "10.99$",
    },
  ];

  const booksArr = books.map((book) => (
    <div key={book.id} className="m-2">
      <BookCard
        id={book.id}
        title={book.title}
        genres={book.genres}
        image={book.image}
        rating={book.rating}
        price={book.price}
      />
    </div>
  ));

  return (
    <>
      <div className="flex justify-start items-center md:justify-center">
        <div className="flex relative bg-white rounded-lg m-2 py-0.5 focus focus-within:ring-2 focus-within:ring-blue-400 shadow appearance-none sm:w-64">
          <AiOutlineSearch className="absolute left-1 mt-1 " />
          <input
            type="text"
            className="p-0 pl-1 ml-5 bg-transparent border-none focus:ring-transparent "
            name="searchbar"
            id="searchbar"
            placeholder="Search"
          />
        </div>
        <select
          className="p-0 px-1 w-32 h-7 mr-1 rounded-md focus:ring-transparent border-0 focus:ring-2 focus:ring-blue-400 shadow appearance-none"
          name="genres"
          id="genres"
        >
          <option value="">-</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Novel">Novel</option>
          <option value="Adventure">Adventure</option>
        </select>
        <AnimateButton
          OnClickContact={() => setIsAddBookModalOpen(true)}
          classStyle="bg-secondary text-white rounded-full px-1 py-1"
        >
          <FiPlusCircle onClick={() => setIsAddBookModalOpen(true)} size={27} />
        </AnimateButton>
        <AddBookModal
          isAddBookModalOpen={isAddBookModalOpen}
          setIsAddBookModalOpen={setIsAddBookModalOpen}
        />
      </div>
      <div className="grid sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {booksArr}
      </div>
    </>
  );
}

export default Books;
