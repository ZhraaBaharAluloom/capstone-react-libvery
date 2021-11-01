import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { BOOKS_ROUTE } from "../routes";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { db } from "../firebase";
import {
  selectorUser,
  setFavorites,
  setRemoveFavorites,
} from "../store/counter/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { changeDropdown } from "../store/dropdownSlice";
import { useHistory } from "react-router-dom";

function BookCard({ image, genres, title, price, rating, id }) {
  const user = useSelector(selectorUser);
  const dispatch = useDispatch();

  const history = useHistory();

  function handleClick(genre) {
    history.push("/books");
    dispatch(changeDropdown(genre));
  }

  const genreButtons = genres?.map((genre, index) => {
    return (
      <button
        key={index}
        className="text-xs bg-primary rounded-2xl px-2.5 py-0.5 m-0.5 mt-1 transform transition ease-in duration-100 hover:-translate-y-0.5 opacity-80"
        onClick={() => handleClick(genre.label)}
      >
        {genre.label}
      </button>
    );
  });

  const handleFav = async (id) => {
    if (!user.favorites.map((book) => book.id).includes(Number(id))) {
      const docRef = doc(db, "books", `${id}`);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const favBookRef = doc(db, "users", user.uid);
        await updateDoc(favBookRef, {
          favorites: arrayUnion(docSnap.data()),
        });
        const favBooksRef = doc(db, "users", user.uid);
        const favDocSnap = await getDoc(favBooksRef);
        if (favDocSnap.exists()) {
          dispatch(setFavorites(favDocSnap.data().favorites));
        }
      }
    } else {
      const docRef = doc(db, "books", `${id}`);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const favBookRef = doc(db, "users", user.uid);
        await updateDoc(favBookRef, {
          favorites: arrayRemove(docSnap.data()),
        });
        dispatch(setRemoveFavorites(id));
      }
    }
  };

  return (
    <>
      <div className="bg-cards rounded-xl font-sans  overflow-hidden shadow-md w-full md:w-60 lg:w-72  p-3 transform transition ease-in-out duration-200 hover:-translate-y-0.5 mx-auto md:mt-5 mb-1 sm:mb-2 md:mb-0">
        <div className="rounded-xl overflow-hidden relative h-60">
          <img className="w-full h-full object-cover" src={image} alt="book" />
          <div className="absolute flex flex-wrap top-0.5 left-0">
            {genreButtons}
          </div>
        </div>

        <div className="flex justify-between items-center px-1 pt-2">
          <h1 className="font-semibold">{title}</h1>
          {user.favorites?.map((book) => book.id).includes(Number(id)) ? (
            <AiFillHeart
              onClick={() => handleFav(id)}
              size={29}
              className="transform transition ease-in duration-100 hover:-translate-y-0.5 cursor-pointer"
              color={"red"}
            />
          ) : (
            <AiOutlineHeart
              onClick={() => handleFav(id)}
              size={29}
              className="transform transition ease-in duration-100 hover:-translate-y-0.5 cursor-pointer"
            />
          )}
        </div>
        <div className="flex justify-start items-center">
          <ReactStars className="" size={20} isHalf={true} />
          <span className="pl-1 mt-1">{rating}</span>
        </div>
        <p className="font-semibold pl-1">{price}</p>
        <Link to={`${BOOKS_ROUTE}/${id}`} className="text-white font-semibold">
          <button className="bg-secondary text-white rounded-xl p-1 w-full mt-3 transform transition ease-in-out duration-100 hover:-translate-y-0.5">
            Buy
          </button>
        </Link>
      </div>
    </>
  );
}

export default BookCard;
