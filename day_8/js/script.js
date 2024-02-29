const movie = {
    movieName: "12 Fail",
    movieGenre: "Drama",
    productionHouse: "H2 productions",
    origin: "India",
    budget: "20Cr",
    releasedYear: 2023,
    platform: "OTT",
    movieDetails: function () {
      return "Name: " + this.movieName + " Genre: " + this.movieGenre;
    },
  };
  
  console.log(movie.movieDetails());
  console.log(movie.origin);
  
  const author = {
    authorName: "Anish",
    authorRegNo: "AUTH-002",
    authorEmail: "anish@gmail.com",
    authorPassKey: "again",
  };
  
  const category = {
    catId: 1,
    catName: "General Post",
  };
  
  const post = {
    postId: 12,
    postCategory: "General Post",
    postDesc: "This is my general Post",
    postDate: "2024-1-2",
  };
  
  const postFile = {
    postFileId: 1,
    postFileName: "img123.jpg",
    postFileConfig: "JPEG",
    postFileStatus: true,
  };
  
  // date object
  
  const d1 = new Date("2024");
  console.log(d1);
  
  const d2 = new Date("2023", "01");
  console.log(d2);
  
  const d3 = new Date("2022", "01", "24");
  console.log(d3);
  
  // if we define date object in the following way then we get
  // undefined date format
  
  const d4 = new Date("2023-02-12");
  const d5 = new Date("2023/02/12");
  
  console.log(d4);
  console.log(d5);
  function Place(placeName, placeType, zipCode) {
    this.placeName = placeName;
    this.placeType = placeType;
    this.zipCode = zipCode;
  }
  
  //creating place object
  const place = new Place("Kathmandu", "Capital", 44600);
  console.log(place);
  console.log("Name: " + place.placeName);
  console.log("Type: " + place.placeType);
  console.log("Zip code: " + place.zipCode);  