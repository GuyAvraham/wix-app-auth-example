import axios, { AxiosResponse } from "axios";
import {
  AUTHENTICATION_URL,
  REDIRECT_TO_WIX,
  WIX_APP_STATE,
  WIX_TOKEN_RECEIVED_URL,
} from "../config";
import { AuthenticationAxiosResult } from "./types";

/**
 * Sending request to our serverless backend and returning {{access_token}} which is being sent to wix
 * in order to finish the OAuth Flow
 * @param code a string that is recevied from Wix
 * @param instanceId a string that is recevied from Wix
 * @param state a string that is recevied from Wix
 *  */

export const wixAuth = (code: string, instanceId: string, state: string) => {
  if (WIX_APP_STATE !== state)
    return console.log("State And StateParam Param Aren't Equal");
  axios
    .post(AUTHENTICATION_URL, {
      code,
      state,
      instanceId,
    })
    .then((res: AxiosResponse<AuthenticationAxiosResult>) => {
      if (res.data.success) {
        if (REDIRECT_TO_WIX === "true") {
          window.location.href = `https://www.wix.com/installer/token-received?access_token=${res.data.access_token}`;
        }
        axios.post(
          WIX_TOKEN_RECEIVED_URL,
          {},
          { headers: { Authorization: res.data.access_token } }
        );
        return;
      }
      throw Error("Sorry something went wrong... please try again later!");
    })
    .catch((err) => {
      console.log(err);
      throw Error("Sorry something went wrong... please try again later!");
    });
};
