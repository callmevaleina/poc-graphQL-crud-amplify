import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 94vh;  
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const BackgroundImg = styled.img`
  width: 100%;
  position: absolute;
  z-index: -1;
`

const FormContainer = styled.div`
  width: 450px;
  height: 450px;
  background-color:rgba(167, 93, 93, 0.35);
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7px;
  border-radius: 5px;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);

`;

const FormTitle = styled.h1`
  font-weight: bolder;
  color: white;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  text-transform: uppercase;
  text-shadow: 1px 1px 1px #444;

`;

const Form = styled.form`
  width: 85%;
  height: 80%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);
`;
const LabelInputContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;
const LabelForm = styled.label`
  font-size: 15px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  color: #a75d5d;
`;
const InputForm = styled.input`
  border: 1px solid #a75d5d;
  border-radius: 3px;
  padding: 5px;
  width: 70%;
  color: #a75d5d;
  :focus {
    color: #a75d5d;
    background-color: #ffffff;
    border-color: #a75d5d;
    outline: 0;
    box-shadow: 0 0 0 0.1rem rgba(211, 117, 107, 0.25);
  }
`;
const InputDescription = styled.textarea`
  height: 100px;
  border: 1px solid #a75d5d;
  border-radius: 3px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  padding: 5px;
  width: 70%;
  color: #a75d5d;

  :focus {
    color: #a75d5d;
    background-color: #ffffff;
    border-color: #a75d5d;
    outline: 0;
    box-shadow: 0 0 0 0.1rem rgba(211, 117, 107, 0.25);
  }
`;
const InputDate = styled.input`
  appearance: none;
  border: 1px solid #a75d5d;
  border-radius: 3px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 12px;
  color: #a75d5d;
  padding: 5px;

  :focus {
    color: #a75d5d;
    background-color: #ffffff;
    border-color: #a75d5d;
    outline: 0;
    box-shadow: 0 0 0 0.1rem rgba(211, 117, 107, 0.25);
  }

  ::-webkit-calendar-picker-indicator {
    color: rgba(0, 0, 0, 0);
    opacity: 50%;
    display: block;
    background-image: url("src/assets/icons/calendar-days-solid.svg");
    width: 12px;
    height: 12px;
    border-width: thin;
    padding-right: 5px;
    fill: #a75d5d;
  }
`;

const InputFileUrl = styled.input`
  border: 1px solid #a75d5d;
  border-radius: 3px;
  padding: 5px;
  width: 80%;
  color: #a75d5d;
  
  :focus {
    color: #a75d5d;
    background-color: #ffffff;
    border-color: #a75d5d;
    outline: 0;
    box-shadow: 0 0 0 0.1rem rgba(211, 117, 107, 0.25);
  }
`;

const InputFile = styled.input`
  ::-webkit-file-upload-button {
  background: #a75d5d;
  color: white;
  padding: 10px 15px;
  border-radius: 3px;
  border: 1px solid #a75d5d;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
      :hover {
    border: 1px solid #a75d5d;
    background-color: #cfa6a6;
    color: #a75d5d;
  }
  }
`

const ButtonForm = styled.button`
  color: white;
  background: #a75d5d;
  border: 1px solid #a75d5d;
  border-radius: 3px;
  padding: 8px 15px;
  text-align: center;
  display: inline-block;
  font-size: 15px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  margin: 20px 2px 0 2px;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;
  text-decoration: none;

  :hover {
    border: 1px solid #a75d5d;
    background-color: #cfa6a6;
    color: #a75d5d;
  }
`;

export {
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
  InputFileUrl,
  ButtonForm,
};
