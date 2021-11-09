import React from "react";
import { getWixAppInstallerUrl } from "./config";
import { wixAuth } from "./utils/wixAuth";

function App() {
  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenParam = urlParams.get("token");
    if (tokenParam) {
      window.location.href = getWixAppInstallerUrl(tokenParam);
      return;
    }

    const codeParam = urlParams.get("code");
    const stateParam = urlParams.get("state");
    const instanceIdParam = urlParams.get("instanceId");

    // If user on authentication step
    if (codeParam && stateParam && instanceIdParam) {
      wixAuth(codeParam, instanceIdParam, stateParam);
      return;
    }
  }, []);

  return <div className="App"></div>;
}

export default App;
