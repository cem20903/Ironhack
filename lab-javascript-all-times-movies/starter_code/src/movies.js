/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
//object.assign({},object,{})


// var duration = films.duration.split(" ");
// if(duration.length == 2){
//     return films.duration = parseInt(duration[0].replace("h","")) * 60 
//     + parseInt(duration[1].replace("min",""));
// } else {
//   return Object.assign({

//   },movies,{
//     duration: parseInt(duration[0].replace("h","")) * 60;
//   })

function turnHoursToMinutes(movies){

var moviesAll = movies.map(function(films){

///Esto 
  if(typeof(films.duration) == "number"){
    return Object.assign({},films,{duration: films.duration });
  }
 ////Esto
    var duration = films.duration.split(" ");

if(duration.length==2){
 var durMin = parseInt(duration[0].replace("h","")) * 60  + parseInt(duration[1].replace("min",""));
} else {
  if(duration[0].indexOf("min") !== -1){
    var durMin = parseInt(duration[0].replace("min",""));
  } else if(duration[0].indexOf("h") !== -1){
    var durMin = parseInt(duration[0].replace("h","")) * 60;
  } else {
    var durMin = parseInt(duration[0]);
  }

}

return Object.assign({},films,{duration: durMin });
      
    })
    return moviesAll;
  }

  
  




// Get the average of all rates with 2 decimals 

function ratesAverage(movies){

  var average = movies.reduce(function(total,films){
    total += parseFloat(films.rate);
      return total;
  },0);

  return parseFloat(parseFloat(average/movies.length).toFixed(2));
}



// Get the average of Drama Movies

function dramaMoviesRate(films){

var onlyDramas = films.filter(function(movies){
//indexOf
  var moviesForGenre = movies.genre
  var flag = false;
  
  if(moviesForGenre.indexOf("Drama")=== 0){
    
      if(movies.rate === ''){
        movies.rate = 0;
      }
    flag = true;
  }

 

  return flag;
});

if(onlyDramas.length === 0){
  return undefined;
}
return ratesAverage(onlyDramas);

}

// Order by time duration, in growing order

function orderByDuration(movies){

 var arrayBueno = turnHoursToMinutes(movies);
 
 var newArray = arrayBueno.sort(function(a,b){

  if(a.duration > b.duration){
  return 1;
  } 
  if(a.duration < b.duration){ 
    return -1;
  }
  if(a.title > b.title){
    return 1;    
  }
  if(a.title < b.title){
    return -1;
    
  }
  return 0;
 
});

return newArray;
}

console.log(orderByDuration(movies));

// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
