import img from "./main_img.jpeg";
import styled from "styled-components";

function FirstBgImg() {
  return <MainImg src={img} />;
}
const MainImg = styled.img`
  width: 115%;
  height: 100%;
  object-fit: cover;
`;

export default FirstBgImg;
