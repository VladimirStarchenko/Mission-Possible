//! If your application will be showing data from the Charity Navigator API, you will generally be required to attribute the data to Charity Navigator, in accordance with the User Agreement.

//! Turns out querying for 1000 charities each time is very bad for our rate limit, I created a new account and put in a new id and key but honestly, since on the first page, out of 1000 charities only 19 of them have a mission, randomly querying for them isn't really a good thing
// const API_ID = "2b74ce48";
// const API_KEY = "a0eb5c329730073569c97dcc1054e3d6";
const API_ID = "a588d034";
const API_KEY = "7ac037d8452ee77ca8e8431aa89dacb7";
const URL = `https://api.data.charitynavigator.org/v2/Organizations?app_id=${API_ID}&app_key=${API_KEY}&pageSize=1000`;

// https://api.data.charitynavigator.org/v2/Organizations?app_id=2b74ce48&app_key=a0eb5c329730073569c97dcc1054e3d6&pageSize=1000

const axios = require("axios").default;
const Charity = require("../models/Charity.js");

const getCharities = async () => {
  try {
    const { data } = await axios.get(URL);

    data.forEach((charity) => {
      if (charity.mission) {
        let charityObject = {
          name: charity.charityName,
          mission: charity.mission,
          charityNavigatorURL: charity.charityNavigatorURL,
          websiteURL: charity.websiteURL,
        };
        Charity.create(charityObject);
      }
    });
    console.log("Number of charities", data.length);
  } catch (error) {
    if (error) throw error;
  }
};

module.exports = getCharities;
