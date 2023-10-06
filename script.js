//Show function
const displayShows = async (show) => {
  let val = show.split(' ').join('%20');
  const res = await fetch(`https://api.tvmaze.com/search/shows?q=${val}`);
  const data = await res.json();

  console.log(data[0].show);

  //name
  console.log(data[0].show.name);

  //genres
  console.log(data[0].show.genres);

  //premiered
  console.log(data[0].show.premiered);

  //average rating
  console.log(data[0].show.rating.average);

  //type
  console.log(data[0].show.type);

  //summary
  console.log(data[0].show.summary);

  //image
  console.log(data[0].show.image.medium);
};

displayShows('stranger things');

const displayAllShows = async () => {
  const res = await fetch(`https://api.tvmaze.com/search/shows`);
  const data = await res.json();

  console.log(data);
};

// displayAllShows();
