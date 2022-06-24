import { useContext, useEffect } from "react";

// third party libraries
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CategoriesContext } from "../../contexts/CategoriesContext/CategoriesContext";
import { Carousel } from "react-responsive-carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// utilities
import {
  allProductsURL,
  categoriesOptions,
  categoriesURL,
  fetchData,
} from "../../utils/fetchData";
import { ProductsListContext } from "../../contexts/ProductsListContext/ProductsListContext";
import ProductCard from "../../components/ProductCard/ProductCard";

export const Home = () => {
  const { categories, setCategories } = useContext(CategoriesContext);
  const { products, setProducts } = useContext(ProductsListContext);

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

  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  useEffect(() => {
    const fetchCategoriesData = async () => {
      const categoriesData = await fetchData(categoriesURL, categoriesOptions);
      setCategories(categoriesData);
      const productsData = await fetchData(allProductsURL, categoriesOptions);
      setProducts(productsData);
    };

    fetchCategoriesData();
    // eslint-disable-next-line 
  }, []);

  console.log(products);

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
        <SliderSection>
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
            </ImageContainer>
            <ImageContainer>
              <img
                src="https://technext.github.io/eshopper/img/carousel-1.jpg"
                alt="carousel"
                height="100%"
                width="100%"
              />
            </ImageContainer>
          </Carousel>
        </SliderSection>
      </Main>
      <View>
        <div>
          <Title>Popular Products</Title>
          <Slider {...settings}>
            {products.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </Slider>
        </div>
      </View>
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
const SliderSection = styled.div`
  width: 80%;
  /* border: 1px solid rgb(237, 241, 255); */
  height: 60vh;
`;
const View = styled.div`
  width: 90%;
  height: 55vh;
  /* border: 1px solid black; */
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: auto;
  margin-left: auto;
  /* background-color: blue; */
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 60vh;
`;
const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
