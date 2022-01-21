import styled from "styled-components";
import FirstBgImg from "../../img/FirstBgImg.js";

function FirstMainCompo() {
  return (
    <>
      <ImgContainer>
        <InfoBox>
          <div>
            <h1>
              <b>같이</b>와 <b>나눔</b>을
            </h1>
            <h1>실천하는</h1>
          </div>
        </InfoBox>
        <TestDiv />
        <FirstBgImg />
      </ImgContainer>
    </>
  );
}

const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const TestDiv = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
`;
const InfoBox = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 0 3.645833%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;

  h1 {
    color: #fff;
    font-size: 60px;
    margin-bottom: 20px;
    font-family: "NotoSans";
    font-weight: 200;
    b {
      font-weight: 500;
    }
  }
  z-index: 10;
`;

export default FirstMainCompo;
