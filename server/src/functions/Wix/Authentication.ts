import { internalErrorResponse, validResponse } from "../../common/responses";
import { WixOAuthRequestType } from "../../common/types";
import { parseEvent } from "../../common/parseEvent";
import { getTokensFromWixUsingAuthCode } from "../../api/wix";

export async function sendWixOAuth(event) {
  const dataParams: WixOAuthRequestType = await parseEvent(event, [
    "code",
    "state",
    "instanceId",
  ]);

  if (!dataParams)
    return internalErrorResponse({
      message: { content: "Missing Paramaters!", success: false },
    });

  const { code, state, instanceId } = dataParams;

  const data = await getTokensFromWixUsingAuthCode(code);
  if (data.refresh_token && data.access_token) {
    data.instanceId = instanceId;

    // YOU SHOULD SAVE YOUR REFRESH TOKEN!

    return validResponse({ access_token: data.access_token, success: true });
  }
  return internalErrorResponse({
    message: {
      content: "Sorry something went wrong please try again later.",
      success: false,
    },
  });
}
