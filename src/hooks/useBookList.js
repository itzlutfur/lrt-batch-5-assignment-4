import { useEffect, useState } from "react";

const useBookList = () => {
  const [bookList, setBookList] = useState({
    success: false,
    count: 0,
    data: [],
  });

  const [loading, setLoading] = useState({
    status: false,
    message: "",
  });

  const [error, setError] = useState(null);

  const fetchBookList = async () => {
    try {
      setLoading({ ...loading, status: true, message: "Loading..." });
      const response = await fetch("http://localhost:4020/api/books");
      if (!response.ok) {
        throw new Error(
          `Data Fetching Failed. HTTP error! status: ${response.status}`,
        );
      }
      const data = await response.json();
      setBookList(data);

    } catch (error) {
      setError(error);
    } finally {
      setLoading({ ...loading, status: false, message: "" });
    }
  };

  useEffect(() => {
    fetchBookList();
  }, []);

  return { bookList, loading, error };

};

export default useBookList;