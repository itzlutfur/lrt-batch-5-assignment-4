import { useContext } from "react";
import { BookListContext } from "../../contexts";
import BookCard from "./BookCard";

export default function BookList() {
  const { bookList, loading, error } = useContext(BookListContext);
  return (
    <div
      id="books-grid"
      className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6"
    >
      {loading.status && (
        <div className="col-span-full text-center text-neutral-400">
          {loading.message}
        </div>
      )}
      {error && (
        <div className="col-span-full text-center text-red-500">
          {error.message}
        </div>
      )}
      {bookList.success &&
        bookList.data.map((book) => <BookCard key={book.id} book={book} />)}
    </div>
  );
}
