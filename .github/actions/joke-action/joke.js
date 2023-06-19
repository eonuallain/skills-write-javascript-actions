const request = require("request-promise");

const options = {
  method: "GET",
  uri: "https://icanhazdadjoke.com/",
  headers: {
    Accept: "application/json",
    "User-Agent": "Writing JavaScript action GitHub Skills course.",
  },
  json: true,
};

async function getJoke() {
  console.log('getJoke() called')
  const res = await request(options);
  console.log('getJoke() done')
  return res.joke;
}

module.exports = getJoke;
