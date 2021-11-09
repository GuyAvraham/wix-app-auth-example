export const SERVER_BASE_URL = "http://localhost:3000";

export const REDIRECT_URL = "https://610f-85-250-190-123.ngrok.io/";

export const APP_ID = "5e7fdcbd-dd76-4620-add7-6161d821724e";

export const WIX_INSTALLER_URL = "https://www.wix.com/installer";

export const WIX_APP_STATE = "123456"; // Optional

export const WIX_TOKEN_RECEIVED_URL =
  "https://www.wix.com/installer/token-received";

export const AUTHENTICATION_URL = `${SERVER_BASE_URL}/dev/wix/authentication`;

export const getWixAppInstallerUrl = (tokenParam: string) =>
  `${WIX_INSTALLER_URL}/install?token=${tokenParam}&appId=${APP_ID}&redirectUrl=${REDIRECT_URL}&state=${WIX_APP_STATE}`;
