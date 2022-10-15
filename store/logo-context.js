import React, { useState } from "react";

const LogoContextProvider = (props) => {
  const [logoVisible, setLogoVisible] = useState(false);
  const showLogo = () => {
    setLogoVisible(true);
  };
  const hideLogo = () => {
    setLogoVisible(false);
  };
  return (
    <logoContext.Provider
      value={{
        logoShow: logoVisible,
        onShowLogo: showLogo,
        onHideLogo: hideLogo,
      }}
    >
      {props.children}
    </logoContext.Provider>
  );
};

export default LogoContextProvider;

export const logoContext = React.createContext({
  logoShow: false,
  onShowLogo: () => {},
  onHideLogo: () => {},
});
