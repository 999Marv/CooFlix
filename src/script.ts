//Show function
const displayShows = async (show: string) => {
  let val = show.split(' ').join('%20');
  const res = await fetch(`https://api.tvmaze.com/search/shows?q=${val}`);
  const data = await res.json();

  const fullShow = data[0].show;

  //name
  const showName: number = data[0].show.name;

  const genres = data[0].show.genres;

  const premiered: string = data[0].show.premiered;

  const averageRating = data[0].show.rating.average;

  const showType = data[0].show.type;

  const summary = data[0].show.summary;

  const image = data[0].show.image.medium;

  console.log(fullShow);
  console.log(showName);
  console.log(genres);
  console.log(premiered);
  console.log(averageRating);
  console.log(showType);
  console.log(summary);
  console.log(image);
};

displayShows('stranger things');

// const displayAllShows = async () => {
//   const res = await fetch(`https://api.tvmaze.com/search/shows`);
//   const data = await res.json();

//   console.log(data);
// };

// displayAllShows();
