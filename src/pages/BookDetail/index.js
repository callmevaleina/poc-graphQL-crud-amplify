import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  BookDetailContainer,
  BackgroundImg,
  BookDetails,
  BookInfo,
  BookRelease,
  BookMiniCover,
  BookTitle,
  ButtonsContainer,
  DeleteIconButton,
  EditIconButton,
} from "./style";
import background from "../../assets/images/4.png";
import { API } from "aws-amplify";
import * as queries from "../../graphql/queries";
import * as mutations from '../../graphql/mutations';

const BookDetail = () => {
  const { id } = useParams();
  console.log(id);
  const [book, setBook] = useState();
  const navigate = useNavigate();

  const getOneBook = async () => {
    try {
      const bookData = await API.graphql({
        query: queries.getBook,
        variables: { id: id },
      });
      const book =  bookData.data.getBook
      setBook(book)
    } catch (error) {
      console.log("Error on get a book", error);
    }
  };

  useEffect(() => {
    if (id) {
      getOneBook();
    }
  }, [id]);

  const bookDetails = {
    id: id,
  };

  const deleteOneBook = async () => {
    try {
      await API.graphql({ query: mutations.deleteBook, variables: {input: bookDetails}});
    } catch (error) {
      console.log("Error on delete one book", error);
    }
    navigate(-1);
  };

  return (
    <BookDetailContainer>
      <BackgroundImg src={background} />
      <BookDetails>
        {book ? (
          <>
            <BookMiniCover src={book.fileUrl} />
            <BookTitle>{book.title}</BookTitle>
            <BookInfo>{book.description}</BookInfo>
            <BookRelease>Release Date: {book.createdDate}</BookRelease>
            <ButtonsContainer>
              <EditIconButton
                icon={faPenToSquare}
                onClick={(e) =>
                  navigate(`/library/book-detail/${book.id}/edit-book`)
                }
              />
              <DeleteIconButton icon={faTrash} onClick={(e)=> deleteOneBook()} />
            </ButtonsContainer>
          </>
        ) : (
          <BookTitle>Sorry, we don't have that book in our library</BookTitle>
        )}
      </BookDetails>
    </BookDetailContainer>
  );
};

export default BookDetail;
