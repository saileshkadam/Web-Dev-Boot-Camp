var movieObj = [
    {
        movieName: "Harry Potter",
        movRating: 5,
        hasWatched: true

    },
    {
        movieName: "Mad Max",
        movRating: 4,
        hasWatched: false

    },
    {
        movieName: "Hot Rod",
        movRating: 3.5,
        hasWatched: false

    },
    {
        movieName: "Chicken Little",
        movRating: 2.4,
        hasWatched: true

    }
]

for(i=0;i<movieObj.length;i++){
    console.log("You have ");
    if (!movieObj[i].hasWatched){
        console.log("not");
    }else{

    }
    
    console.log(" watched "+ movieObj[i].movieName + " - " + movieObj[i].movRating +"\n");
}