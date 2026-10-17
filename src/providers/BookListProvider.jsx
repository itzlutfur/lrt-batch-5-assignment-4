import { BookListContext } from "../contexts";
import { useBookList } from "../hooks";

const BookListProvider = ({ children }) => {
  const { bookList, loading, error } = useBookList();
  return (
    <BookListContext.Provider value={{ bookList, loading, error }}>
      {children}
    </BookListContext.Provider>
  );
};

export default BookListProvider;