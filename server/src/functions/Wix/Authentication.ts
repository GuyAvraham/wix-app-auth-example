import { internalErrorResponse, validResponse } from "../../common/responses";
import { WixOAuthRequestType } from "../../common/types";
import { parseEvent } from "../../common/parseEvent";
import { getTokensFromWixUsingAuthCode } from "../../api/wix";

export async function sendWixOAuth(event) {
  const paramsArray = ["code", "state", "instanceId"];
  const dataParams = await parseEvent<WixOAuthRequestType>(event, paramsArray);
  if (!dataParams.success || !dataParams.body) {
    if (dataParams.message === "Lambda is warm")
      return validResponse({
        message: dataParams.message,
        success: dataParams.success,
      });

    return internalErrorResponse({
      message: { content: dataParams.message, success: dataParams.success },
    });
  }

  const { code, instanceId } = dataParams.body;

  const data = await getTokensFromWixUsingAuthCode(code);
  if (data.refresh_token && data.access_token) {
    data.instanceId = instanceId;

    // YOU SHOULD SAVE YOUR REFRESH TOKEN TO THE DATABASE AND USE IT WHEN YOU CALL WIX API TO GET ACCESS TOKENS

    return validResponse({ access_token: data.access_token, success: true });
  }
  return internalErrorResponse({
    message: {
      content: "Sorry something went wrong please try again later.",
      success: false,
    },
  });
}
