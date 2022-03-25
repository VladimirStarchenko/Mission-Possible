//! If your application will be showing data from the Charity Navigator API, you will generally be required to attribute the data to Charity Navigator, in accordance with the User Agreement.
const API_ID = "2b74ce48";
const API_KEY = "a0eb5c329730073569c97dcc1054e3d6";
const URL = `https://api.data.charitynavigator.org/v2/Organizations?app_id=${API_ID}&app_key=${API_KEY}&pageSize=1000`;

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
