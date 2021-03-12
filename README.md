# Setup

## A. Retriving the API Key
1. Create an account or login to [openweathermap.org](https://openweathermap.org/). Creating an account is free.
2. Once you've logged in, you should see your account name appear beside **Marketplace**. Click on it and click on **My API Keys** on the dropdown.
3. **Copy** the `hash`.

## B. Adding the API Key
1. Go into the `/src/config` folder.
2. Duplicate the `example.js` file and rename it to `index.js`
3. **Paste** the `hash` you copied in step (A) into `API_KEY` in between the *quotes*.

# Running the app locally
1. Open up your terminal and navigate to the project folder.
2. Run the command below:
```
npm start
```
