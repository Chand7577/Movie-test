const API_KEY = "d320b1dd0002eb57d0ba9fc61ed1d4c2";

// fun to generate random page
const getRandomPageNo = () => {
  return Math.floor(Math.random() * 500 + 1);
};

export { API_KEY, getRandomPageNo };
