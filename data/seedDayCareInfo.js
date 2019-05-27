const data = require("./dayCareInfo");

const eccArray = data.result.records;

const filteredEccArray = eccArray.filter(ecc => ecc.Add1_City == "Invercargill");

console.log(filteredEccArray.length);

const eccdata = filteredEccArray.map(ecc => {
  return {
    center_name: ecc.Org_Name,
    ph_number: ecc.Telephone,
    email: ecc.Email,
    address: ecc.Add1_Line1,
    suburb: ecc.Add1_Suburb + ", " + ecc.Add1_City,
    description: ecc.Org_Type + ", " + ecc.Authority,
    age: ecc.All_Children,
    photo: '/public/images/dropbox-abc-blocks.jpeg',
    username: ecc.Email,
    hash_password:'$2b$12$MruTWZcAw/NY2T5ZOAn4iuGo5DwQbC4TLO5ymSgrW3gBGQvOYqCWa',
    
  };
});

function apiSeed() {
  return eccdata;
}

function apiSeedOld() {
  return [
    {
      id: 4,
      center_name: "Brooklyn Kids Childcare Center",
      ph_number: "048025782",
      url: "https://www.brooklynkids.co.nz/",
      email: "manager@brooklynkids.co.nz",
      address: "37-41 Cleveland Street",
      suburb: "Brooklyn",
      description:
        "At Brooklyn Kids Childcare Center, we believer in providing a holistic learning environment where children have the time and space to develop. We want to support children to become lifelong learners, who are passionate and curious about the world around them.",
      age: "all ages",
      photo: "ecc.jpeg",
      username: "BKCC",
      hash_password: "BKCC"
    }
  ];
}

module.exports = apiSeed;
