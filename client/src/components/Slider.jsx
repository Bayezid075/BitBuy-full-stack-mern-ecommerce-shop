import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import { ArrowRightOutlined } from "@mui/icons-material";
import { sliderItems } from "../data";
import { useState } from "react";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #e9e9eb;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  background: #fff7f7;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: ${(props) =>
    props.direction === "left" &&
    "10px"}; /* this is the way of identify uniquely by props in same component  */
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.sliderIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Dscs = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background: transparent;
  cursor: pointer;
`;

export default function Slider() {
  const [sliderIndex, setSliderIndex] = useState(0);

  const clickHandler = (direction) => {
    if (direction === "left") {
      setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 2);
    } else {
      setSliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => clickHandler("left")}>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper sliderIndex={sliderIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
            <InfoContainer>
              <Title> {item.title} </Title>
              <Dscs>{item.desc}</Dscs>
              <Link to="/product">
                {" "}
                <Button> Shop Now </Button>
              </Link>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>

      <Arrow direction="right" onClick={() => clickHandler("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
}
