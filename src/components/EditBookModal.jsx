import React from "react";
import Modal from "react-modal";
import CloseButton from "../helpers/CloseButton";
import { motion } from "framer-motion";
import { useFormik } from "formik";

const el = document.getElementById("root");
Modal.setAppElement(el);

const initialValues = {
  BookName: "",
  Author: "",
  Genre: "",
  Price: "",
  Description: "",
  Image: "",
};

const validate = (values) => {
  const errors = {};
  if (!values.BookName) {
    errors.BookName = "Book name is required";
  }
  if (!values.Author) {
    errors.Author = "Author name is required";
  }
  if (!values.Genre) {
    errors.Genre = "Genre is required";
  }
  if (!values.Price) {
    errors.Price = "Price is required";
  }
  return errors;
};

function ContactModal({ isEditBookOpen, setIsEditBookOpen }) {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
    validate,
  });

  console.log(formik.errors);

  return (
    <>
      <Modal
        isOpen={isEditBookOpen}
        onRequestClose={() => setIsEditBookOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            border: "none",
            borderRadius: "0",
            backgroundColor: "transparent",
          },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: "-100vh" }}
          animate={{
            opacity: 1,
            y: "0",
            transition: {
              duration: 0.5,
            },
          }}
          className="flex flex-col justify-center items-center text-white sm:max-w-2xl bg-white rounded-lg p-10 mx-auto relative"
        >
          <CloseButton
            setIsEditBookOpen={setIsEditBookOpen}
            isEditBookOpen={isEditBookOpen}
          />
          <form
            onSubmit={formik.handleSubmit}
            className="w-full max-w-md bg-white rounded mb-4 mt-10 sm:max-w-2xl md:max-w-md font-sans"
          >
            <h2 className="text-black font-semibold flex justify-center mb-4 text-2xl">
              Update Book Details
            </h2>
            {formik.touched.BookName && formik.errors.BookName ? (
              <div>
                <input
                  className="shadow appearance-none border border-red-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                  id="BookName"
                  type="text"
                  placeholder="Book Title *"
                  onChange={formik.handleChange}
                  value={formik.values.BookName}
                  name="BookName"
                  onBlur={formik.handleBlur}
                />
                <p className="text-xs text-red-400 -mt-2 mb-2">
                  {formik.errors.BookName}
                </p>
              </div>
            ) : (
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                id="BookName"
                type="text"
                placeholder="Book Title *"
                onChange={formik.handleChange}
                value={formik.values.BookName}
                name="BookName"
                onBlur={formik.handleBlur}
              />
            )}
            {formik.touched.Author && formik.errors.Author ? (
              <div>
                <input
                  className="shadow appearance-none border border-red-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                  id="author"
                  type="text"
                  placeholder="Author *"
                  onChange={formik.handleChange}
                  value={formik.values.Author}
                  name="Author"
                  onBlur={formik.handleBlur}
                />
                <p className="text-xs text-red-400 -mt-2 mb-2">
                  {formik.errors.Author}
                </p>
              </div>
            ) : (
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                id="author"
                type="text"
                placeholder="Author *"
                onChange={formik.handleChange}
                value={formik.values.Author}
                name="Author"
                onBlur={formik.handleBlur}
              />
            )}
            {formik.touched.Genre && formik.errors.Genre ? (
              <div>
                <input
                  className="shadow appearance-none border border-red-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                  id="category"
                  type="text"
                  placeholder="Book Category *"
                  onChange={formik.handleChange}
                  value={formik.values.Genre}
                  name="Genre"
                  onBlur={formik.handleBlur}
                />
                <p className="text-xs text-red-400 -mt-2 mb-2">
                  {formik.errors.Genre}
                </p>
              </div>
            ) : (
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                id="category"
                type="text"
                placeholder="Book Category *"
                onChange={formik.handleChange}
                value={formik.values.Genre}
                name="Genre"
                onBlur={formik.handleBlur}
              />
            )}
            {formik.touched.Price && formik.errors.Price ? (
              <div>
                <input
                  className="shadow appearance-none border border-red-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                  id="price"
                  type="text"
                  placeholder="Price *"
                  onChange={formik.handleChange}
                  value={formik.values.Price}
                  name="Price"
                  onBlur={formik.handleBlur}
                />
                <p className="text-xs text-red-400 -mt-2 mb-2">
                  {formik.errors.Price}
                </p>
              </div>
            ) : (
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                id="price"
                type="text"
                placeholder="Price *"
                onChange={formik.handleChange}
                value={formik.values.Price}
                name="Price"
                onBlur={formik.handleBlur}
              />
            )}

            {formik.touched.Description && formik.errors.Description ? (
              <div>
                <textarea
                  name="Description"
                  id="Description"
                  cols="22"
                  rows="5"
                  className="shadow appearance-none border border-red-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                  placeholder="Description"
                  onChange={formik.handleChange}
                  value={formik.values.Description}
                ></textarea>
                <p className="text-xs text-red-400 -mt-2 mb-2">
                  {formik.errors.Description}
                </p>
              </div>
            ) : (
              <textarea
                name="Description"
                id="Description"
                cols="22"
                rows="5"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                placeholder="Description"
                onChange={formik.handleChange}
                value={formik.values.Description}
              ></textarea>
            )}
            <label className="w-60 text-white flex items-center py-1 rounded-md cursor-pointer bg-secondary bg-opacity-50 hover:bg-secondary justify-center">
              <span>Upload Book Cover</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
              <input type="file" className="hidden" />
            </label>
            <label className="flex text-black items-center">
              <p className="mr-2">Are you donating this book?</p>
              <input type="checkbox" name="yes" id="yes" />
            </label>
            <button
              className="bg-secondary text-white font-semibold py-1 px-4 rounded-sm mb-4 container mt-2"
              type="submit"
            >
              Update Book
            </button>
          </form>
        </motion.div>
      </Modal>
    </>
  );
}

export default ContactModal;
