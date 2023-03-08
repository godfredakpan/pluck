import { Bounce } from "react-reveal";
import styled from "styled-components";
import { linkData, themeData, profileData } from "../../data/data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useContext } from "react";
import themeContext from "../../state/context/themeContext";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { RWebShare } from "react-web-share";
import "./linkstyle.css";
// import Copy from '../copy';


const Link = () => {
  const a = useContext(themeContext);

  const shareTitle = profileData.userName + " | Linktree";

  return (
    <>
      <ToastContainer />
      <Bounce>
        <ParentWrapper>
          {linkData.map((item, index) => (
            <CustomDiv
              className="shadow"
              contenteditable="true"
              props={a.darkMode ? themeData.light : themeData.dark}
              key={index}
            >
              <LazyLoadImage
                id="image"
                effect="blur"
                src={`https://ui-avatars.com/api/?rounded=true&name=${item.name}&background=random`}
                alt="my_profile_image"
              />
                  <p 
                  className="text-center"
                  onClick={() => {
                    window.open(item.link, "_blank");
                  }}
                  >
                    {item.name}
                  </p>
                  <RWebShare
                    data={{
                      text: item.name,
                      url: item.link,
                      title: shareTitle
                    }}
                    onClick={() => console.log("shared successfully!")}
                  >
                    <button data-testid="ShareLink" class="sc-cBNfnY gSwncj share-link-icon">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="" role="img" aria-hidden="false" aria-labelledby="ltclid235093_title ">
                          <title id="ltclid235093_title">Copy & Share</title>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6464 3.85353L11 4.20708L11.7071 3.49998L11.3536 3.14642L8.35355 0.146423H7.64645L4.64645 3.14642L4.29289 3.49998L5 4.20708L5.35355 3.85353L7.5 1.70708V9.49998V9.99998H8.5V9.49998V1.70708L10.6464 3.85353ZM1 5.5L1.5 5H4V6H2V15H14V6H12V5H14.5L15 5.5V15.5L14.5 16H1.5L1 15.5V5.5Z" fill="currentColor"></path>
                      </svg>
                  </button>
                  </RWebShare>
            </CustomDiv>            
          ))}
        </ParentWrapper>
      </Bounce>
    </>
  );
};

export default Link;

const CustomDiv = styled.div`
  margin-bottom: 15px;
  border-radius: 15px;
  cursor: pointer;
  align-content: center;
  align-items: baseline;
  justify-content: center;
  width: 40vw;
  padding: 5px;
  background-color: ${(props) => props.props.cardBackgroundColor};
  display: flex;
  height: max-content;
  color: ${(props) => props.props.CardtextColor};
  @media (max-width: 768px) {
    width: 90vw;
    text-align: center;
  }
  :hover {
    background-color: ${(props) => props.props.onHoverBackgroundColor};
    color: ${(props) => props.props.onHoverTextColor};
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
  p {
    flex: 1;
  }
  #image {
    margin-left: 10px;
    width: 50px;
    height: 50px;
  }
`;

const ParentWrapper = styled.div`
  margin-top: 20px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
