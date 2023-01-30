import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import hero from "../../assets/images/hero.png";
import {
  BookCover,
  BookListContainer,
  LibraryContainer,
  LibraryHero,
  LibraryHeroImg,
} from "./style";
import { API, graphqlOperation } from "aws-amplify";
import { BookTitle } from "../BookDetail/style";
import { listBooks } from "../../graphql/queries";

const Library = () => {
  const [library, setLibrary] = useState([]);

  useEffect(() => {
    getAllBooks()
  }, []);

  const getAllBooks = async () => {
    try {
      const bookData = await API.graphql(graphqlOperation(listBooks));
      const bookList = bookData.data.listBooks.items;
      setLibrary(bookList);
    } catch (error) {
      console.log("Error on get all books", error);
    }
  };

  const navigate = useNavigate();
  return (
    <LibraryContainer>
      <LibraryHero>
        <LibraryHeroImg src={hero} />
      </LibraryHero>
      <BookListContainer>
        {library && library.length ? (
          library.map((book) => (
            <BookCover
              key={book.id}
              src={book.fileUrl}
              onClick={() => navigate(`/library/book-detail/${book.id}`)}
              title={book.title}
              description={book.description}
              createdDate={book.createdDate}
              fileUrl={book.fileUrl}
              file={book.file}
            />
          ))
        ) : (
          <BookTitle>We don't have books to show</BookTitle>
        )}
      </BookListContainer>
    </LibraryContainer>
  );
};

export default Library;
