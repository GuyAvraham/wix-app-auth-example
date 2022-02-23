# Wix App Auth Example

##### This project is designed to make wix authentication to your application easier when building a plugin for wix

##### This project follows this guide (created by wix): https://dev.wix.com/api/rest/getting-started/authentication

Building a wix app will allow a wix webstie/shop owners to enter the wix marketplace and install a wix app into their wix website. 
The initial part of building the wix app requires the custom app to authenticate with the wix platform. This authentication requires both client and server work.

**Note** I would recommand reading how Wix Authentication works (the linke is above) for reference, making your life easier working on this repo and working with wix auth API in general.

Techologies used in this project

- **React** - Frontend
- **Serverless** - Backend
- **Typescript** - Frontend & Backend

## How to run the project

#### Frontend

```sh
cd client
yarn
yarn start
```

now open another terminal and run:

```sh
yarn ngrok
```

#### Backend

```sh
cd server
yarn
yarn offline
```

## Testing your Wix app

1. Go To https://dev.wix.com/
2. Create a new app / open your existing app
3. Choose **OAuth**
4. Put Your **ngrok generated url** in Redirect URL and in App URL
5. Copy the **App Secret Key and App Id** and place them in the **.env file of the server directory** like this:

```
#./server/.env

APP_SECRET=WIX_APP_SECRET_KEY
APP_ID=WIX_APP_ID
```

6. Paste all the data needed for .env of the client directory like this

```
#./client/.env

REACT_APP_SERVER_BASE_URL=http://localhost:4000  # NOTE Server Base Url, When Deployed Should be changed to the server url your receive from server!
REACT_APP_REDIRECT_URL=NGROK_URL # The generated url you recevie from ngrok THIS IS ONLY FOR DEVELOPMENT, for PRODUCTION please change the redirect_url to the url that the react app is hosted on.
REACT_APP_APP_ID=WIX_APP_ID # Your Wix app id, Same as the one that's in /server/.env
REACT_APP_REDIRECT_TO_WIX=false # If you want to immediately redirect to wix after confirmation for reference look at the authentication guide (link in the top of the repo) STEP 5A === true | STEP 5B === false
```

## Important Notes

- #### Saving the instance Id
  You should save the user instance id in the database (look at line 27 in ./server/src/functions/Wix/Authentication), for using it later (f.e identification).
