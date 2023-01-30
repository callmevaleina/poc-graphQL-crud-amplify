import styled from "styled-components";

const LibraryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(168, 93, 93, 0.45);
`;

const LibraryHero = styled.div`
  width: 100%;
`;

const LibraryHeroImg = styled.img`
  width: 100%;
  box-shadow: 0 0 10px rgba(168, 93, 93, 1);

`;

const BookListContainer = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 190px));
    align-content: center;
    justify-content: space-between;
    gap: 10px;
    row-gap: 20px;
    @media (max-width: 656px) {
      justify-content: center;
    }
    margin: 30px 0;
`;

const BookCover = styled.img`
    height: 300px;
    width: 185px;
    border-radius: 5px;
    box-shadow: 0 0 3px #444;

    :hover{
      transform: scale(1.05);
      cursor: pointer;
    }
`


export { LibraryContainer, LibraryHero, LibraryHeroImg, BookListContainer, BookCover };
