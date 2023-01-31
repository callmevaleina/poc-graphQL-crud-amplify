import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Library from "../pages/Library";
import EditBook from "../pages/EditBook";
import UploadBookForm from "../pages/UploadBookForm";
import GlobalStyles from "../styles/GlobalStyles";
import MainLayout from "./MainLayout";
import BookDetail from "../pages/BookDetail";
import { Amplify } from "aws-amplify";
import awsExports from "../aws-exports";
import Weather from "../pages/Weather";
Amplify.configure(awsExports);

const Router = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<UploadBookForm />} />
            <Route path="/weather" element={<Weather/>}/>
            <Route path="/library" element={<Library/>}/>
            <Route path="/library/book-detail/:id" element={<BookDetail/>}/>
            <Route path="/library/book-detail/:id/edit-book" element={<EditBook/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
