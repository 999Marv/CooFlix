"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const displayShows = (show) => __awaiter(void 0, void 0, void 0, function* () {
    let val = show.split(' ').join('%20');
    const res = yield fetch(`https://api.tvmaze.com/search/shows?q=${val}`);
    const data = yield res.json();
    const fullShow = data[0].show;
    const showName = data[0].show.name;
    const genres = data[0].show.genres;
    const premiered = data[0].show.premiered;
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
});
displayShows('stranger things');
//# sourceMappingURL=script.js.map