import axios from "axios";
import { APP_SECRET, APP_ID, OAUTH_PROVIDER_BASE_URL } from "../../config";

export async function getTokensFromWixUsingAuthCode(authCode: string): Promise<{
  refresh_token: string;
  access_token: string;
  instanceId: string;
}> {
  console.log({ authCode });
  return axios
    .post(`${OAUTH_PROVIDER_BASE_URL}/access`, {
      grant_type: "authorization_code",
      code: authCode,
      client_secret: APP_SECRET,
      client_id: APP_ID,
    })
    .then((resp) => resp.data)
    .catch((error) => error.response.data);
}
