import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const BookDetailContainer = styled.div`
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
const BookDetails = styled.div`
  width: 450px;
  height: 450px;
  background-color: #a75d5d;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;
  align-content: center;
  border-radius: 5px;
  position: relative;
  filter: drop-shadow(0 0 5px #a75d5d);
`;

const BookTitle = styled.h2`
  font-weight: bolder;
  color: white;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  text-transform: uppercase;
  font-size: 35px;
  width: 80%;
  text-align: left;
  padding: 0 1rem;
  text-shadow: 1px 1px 1px #444;
  display: flex;
  align-items: center;
`;

const BookInfo = styled.p`
  color: white;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  text-align: justify;
  padding: 0 1rem;
  grid-column: span 2;
  width: 93%;
  text-shadow: 1px 1px 1px #444;

`;

const BookRelease = styled.p`
  color: white ;
  text-shadow: 1px 1px 1px #342121;
  font-size: 15px;
  font-weight: bolder;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  text-align: justify;
  padding: 0 1rem;
  grid-column: span 2;
  width: 93%;
  margin-top: 30px;
`;


const BookMiniCover = styled.img`
  height: 170px;
  padding-left: 1rem;
  filter: drop-shadow(0 0 3px #333);
  border-radius: 5px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: absolute;
  right: 1rem;
  top: 20px;
`;
const EditIconButton = styled(FontAwesomeIcon)`
  color: white;
  font-size: 25px;
  cursor: pointer;
  filter: drop-shadow(1px 1px 2px #444);
  :hover {
    transform: scale(1.2);
  }
`;

const DeleteIconButton = styled(FontAwesomeIcon)`
  color: white;
  font-size: 25px;
  cursor: pointer;
  filter: drop-shadow(1px 1px 2px #444);
  :hover {
    transform: scale(1.2);
  }
`;

export {
  BookDetailContainer,
  BackgroundImg,
  BookDetails,
  BookTitle,
  BookInfo,
  BookRelease,
  BookMiniCover,
  ButtonsContainer,
  EditIconButton,
  DeleteIconButton,
};
