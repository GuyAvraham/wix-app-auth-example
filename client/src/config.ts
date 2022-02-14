export const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;

export const REDIRECT_URL = process.env.REACT_APP_REDIRECT_URL;

export const APP_ID = process.env.REACT_APP_APP_ID;

export const WIX_INSTALLER_URL = "https://www.wix.com/installer";

export const WIX_APP_STATE = "123456"; // Optional

export const WIX_TOKEN_RECEIVED_URL =
  "https://www.wix.com/installer/token-received";

export const REDIRECT_TO_WIX = process.env.REACT_APP_REDIRECT_TO_WIX;

export const AUTHENTICATION_URL = `${SERVER_BASE_URL}/dev/wix/authentication`;

export const getWixAppInstallerUrl = (tokenParam: string) =>
  `${WIX_INSTALLER_URL}/install?token=${tokenParam}&appId=${APP_ID}&redirectUrl=${REDIRECT_URL}&state=${WIX_APP_STATE}`;
