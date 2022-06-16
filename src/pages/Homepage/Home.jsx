import { useContext, useEffect } from "react";

// third party libraries
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CategoriesContext } from "../../contexts/CategoriesContext/CategoriesContext";
import { Carousel } from "react-responsive-carousel";

// utilities
import {
  categoriesOptions,
  categoriesURL,
  fetchData,
} from "../../utils/fetchData";


export const Home = () => {
  const { categories, setCategories } = useContext(CategoriesContext);

  const linkStyles = {
    textDecoration: "none",
    color: "black",
    padding: "5px 10px",
    textTransform: "uppercase",
  };

  const categoryHeading = {
    padding: "10px",
    backgroundColor: "black",
    color: "white",
  };

  useEffect(() => {
    const fetchCategoriesData = async () => {
      const categoriesData = await fetchData(categoriesURL, categoriesOptions);
      console.log(categoriesData);
      setCategories(categoriesData);
    };
    fetchCategoriesData();
  }, []);

  return (
    <Box>
      <Main>
        <Categories>
          <p style={categoryHeading}>CATEGORIES</p>
          {categories?.map((category) => (
            <Link style={linkStyles} key={category} to={category}>
              {category}
            </Link>
          ))}
        </Categories>
        <Slider>
          <Carousel
            showArrows
            infiniteLoop
            showThumbs={false}
            useKeyboardArrows
            autoPlay
            showStatus={false}
          >
            <ImageContainer>
              <img
                src="https://technext.github.io/eshopper/img/carousel-2.jpg"
                alt="carousel"
                height="100%"
                width="100%"
              />
              <p className="legend">Reasonable Price</p>
            </ImageContainer>
            <ImageContainer>
              <img
                src="https://technext.github.io/eshopper/img/carousel-1.jpg"
                alt="carousel"
                height="100%"
                width="100%"
              />
              <p className="legend">Fashionable Dress</p>
            </ImageContainer>
          </Carousel>
        </Slider>
      </Main>
    </Box>
  );
};
const Box = styled.div`
  width: 100%;
  height: fit-content;
`;

const Main = styled.div`
  width: 90%;
  margin: auto;
  height: fit-content;
  display: flex;
  margin-top: 20px;
  gap: 1em;
`;
const Categories = styled.div`
  width: 20%;
  border: 1px solid rgb(237, 241, 255);
  display: flex;
  flex-direction: column;
  height: 60vh;
  overflow-y: scroll;
`;
const Slider = styled.div`
  width: 80%;
  border: 1px solid rgb(237, 241, 255);
  height: 60vh;
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 60vh;
`;
