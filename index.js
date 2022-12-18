const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "e9a5c027",
      //   s: "avengers",
      s: searchTerm,
    },
  });

  console.log(response.data);
};

const input = document.querySelector("input");
input.addEventListener("input", (event) => {
  fetchData(event.target.value);
});
