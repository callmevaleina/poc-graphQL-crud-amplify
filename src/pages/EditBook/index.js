import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  BackgroundImg,
  FormContainer,
  FormTitle,
  Form,
  LabelInputContainer,
  LabelForm,
  InputForm,
  InputDescription,
  InputDate,
  InputFile,
  ButtonForm,
  InputFileUrl,
} from "./style";
import background from "../../assets/images/3.png";
import { API } from "aws-amplify";
import * as queries from "../../graphql/queries";
import * as mutations from '../../graphql/mutations';

const EditBook = () => {
  const { id } = useParams();
  const [editedBook, setEditedBook] = useState();
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [createdDate, setCreatedDate] = useState();
  const [fileUrl, setFileUrl] = useState();
  const [file, setFile] = useState();

  const getOneBook = async () => {
    try {
      const bookData = await API.graphql({
        query: queries.getBook,
        variables: { id: id },
      });
      const book =  bookData.data.getBook
      console.log("Book******", book);
      setTitle(book.title)
      setDescription(book.description)
      setCreatedDate(book.createdDate)
      setFileUrl(book.fileUrl)
      setFile(book.file)
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
    title: title,
    description: description,
    createdDate: createdDate,
    fileUrl: fileUrl,
    file: file
  };

  const updatedBook = async() => {
    try {
      await API.graphql({ query: mutations.updateBook, variables: {input: bookDetails}});
    } catch (error) {
      console.log("Error on updating a book", error);
    }
    navigate(-1);
  };

  return (
    <Container>
      <BackgroundImg src={background} />
      <FormContainer>
        <FormTitle>Edit book</FormTitle>
        <Form>
          <LabelInputContainer>
            <LabelForm htmlFor="title-input">Title: </LabelForm>
            <InputForm
              type="text"
              id="title-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <LabelForm htmlFor="description-input">Description: </LabelForm>
            <InputDescription
              id="description-input"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <LabelForm htmlFor="createdDate-input">Release Date: </LabelForm>
            <InputDate
              type="date"
              id="createdDate-input"
              value={createdDate}
              onChange={(e) => setCreatedDate(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <LabelForm htmlFor="fileUrl-input">Book Cover URL: </LabelForm>
            <InputFileUrl
              type="url"
              id="fileUrl-input"
              placeholder="https://..."
              value={fileUrl}
              onChange={(e) => setFileUrl(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer>
          <LabelForm htmlFor="file">Upload a file: </LabelForm>
            <InputFile
            type="file"
            id="file"
            required
            value={file}
            onChange={(e)=> setFile(e.target.value)}
            />
          </LabelInputContainer>
          <ButtonForm onClick={updatedBook}>Accept</ButtonForm>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default EditBook;
