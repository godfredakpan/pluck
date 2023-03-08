import { useContext } from "react";
import styled from "styled-components";
import { Zoom } from "react-reveal";
import { profileData, themeData } from "../../data/data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import DarkModeToggle from "react-dark-mode-toggle";
import themeContext from "../../state/context/themeContext";
import "react-lazy-load-image-component/src/effects/blur.css";
import { RWebShare } from "react-web-share";
import "../link/linkstyle.css";

const Header = () => {
  const a = useContext(themeContext);
  const { userName, photoLink, desc } = profileData;
  const shareTitle = userName + " | Linktree";

  if (!a.darkMode) {
    document.body.style.backgroundColor = themeData.dark.backgroundColor;
  } else {
    document.body.style.backgroundColor = themeData.light.backgroundColor;
  }

  return (
    <>
      <DarkMode onChange={a.setDarkMode} checked={a.darkMode} size={50} />
      <Zoom>
        <HeaderWrapper>
        <span className="title-side">
          <RWebShare
              data={{
                  text: userName,
                  url: "null",
                  title: shareTitle
                }}
                onClick={() => console.log("shared successfully!")}
              >
                <button data-testid="ShareLink" class="sc-cBNfnY gSwncj share-link-icon-main">
                  <svg width="16" height="16" viewBox="0 0 16 16" enable-background="new 0 0 24 24" className="mb-1">
                  <title id="ltclid235093_title">Copy & Share</title>
                  <path d="M14.2222 9.77748C13.2404 9.77748 12.4444 8.98154 12.4444 7.9997C12.4444 7.01786 13.2404 6.22192 14.2222 6.22192C15.2041 6.22192 16 7.01786 16 7.9997C16 8.98154 15.2041 9.77748 14.2222 9.77748Z" fill="currentColor"></path>
                  <path d="M8 9.77748C7.01816 9.77748 6.22222 8.98154 6.22222 7.9997C6.22222 7.01786 7.01816 6.22192 8 6.22192C8.98184 6.22192 9.77778 7.01786 9.77778 7.9997C9.77778 8.98154 8.98184 9.77748 8 9.77748Z" fill="currentColor"></path>
                  <path d="M-7.77091e-08 7.9997C-1.20627e-07 8.98154 0.795938 9.77748 1.77778 9.77748C2.75962 9.77748 3.55556 8.98154 3.55556 7.9997C3.55556 7.01786 2.75962 6.22192 1.77778 6.22192C0.795938 6.22192 -3.47916e-08 7.01786 -7.77091e-08 7.9997Z" fill="currentColor"></path></svg>
              </button>
            </RWebShare>
          </span>
          <CustomImage effect="blur" src={photoLink} className="image-design"/>
          <UserNameText props={a.darkMode ? themeData.light : themeData.dark}>
            @{userName}
          </UserNameText>
          <UserNameText props={a.darkMode ? themeData.light : themeData.dark}>
            {desc}
          </UserNameText>
        </HeaderWrapper>
      </Zoom>
    </>
  );
};
export default Header;

const DarkMode = styled(DarkModeToggle)`
  margin: 15px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CustomImage = styled(LazyLoadImage)`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: 5px;
  margin-top: 50px;
`;

const UserNameText = styled.h6`
  color: ${(props) => props.props.headerFontColor};
  font-weight: bold;
  text-align: center;
`;
