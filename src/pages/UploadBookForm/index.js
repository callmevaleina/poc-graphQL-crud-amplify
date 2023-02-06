import React, {useState} from "react";
import { useForm } from "react-hook-form";
import {
  ButtonForm,
  BackgroundImg,
  Container,
  Form,
  FormContainer,
  FormTitle,
  InputDate,
  InputDescription,
  InputFile,
  InputForm,
  LabelForm,
  LabelInputContainer,
  InputFileUrl,
} from "./style";
import background from "../../assets/images/1.png";
import { API } from "aws-amplify";
import * as mutations from '../../graphql/mutations';
import { v4 as uuidv4 } from 'uuid'

const initialState = {
  title: "",
  description: "",
  createdDate: "",
  fileUrl: "",
  file: "",
};

const UploadBookForm = () => {
  const { reset } = useForm();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [createdDate, setCreatedDate] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [file, setFile] = useState("");

  const bookDetails = {
    id: uuidv4(),
    title: title,
    description: description,
    createdDate: createdDate,
    fileUrl: fileUrl,
    file: file
  };
  

  const addBook = async() => {
    try {
      const book = await API.graphql({ query: mutations.createBook, variables: {input: bookDetails}});
      console.log("Book Added*******", book);
    } catch (error) {
      console.log("Error on creating a book", error);
    }
    reset(initialState);
  };


  return (
    <Container>
      <BackgroundImg src={background} />
      <FormContainer>
        <FormTitle>Add book</FormTitle>
        <Form
        >
          <LabelInputContainer>
            <LabelForm htmlFor="title-input">Title: </LabelForm>
            <InputForm
              type="text"
              id="title-input"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <LabelForm htmlFor="description-input">Description: </LabelForm>
            <InputDescription
              id="description-input"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <LabelForm htmlFor="createdDate-input">Release Date: </LabelForm>
            <InputDate
              type="date"
              id="createdDate-input"
              required
              value={createdDate}
              onChange={(e) => setCreatedDate(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <LabelForm htmlFor="fileUrl-input">Book Cover URL: </LabelForm>
            <InputFileUrl
              type="url"
              id="fileUrl-input"
              required
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
          <ButtonForm onClick={addBook}>Add Book</ButtonForm>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default UploadBookForm;
