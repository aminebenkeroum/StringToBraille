var alphabets = {
  "a": [[1,0],[0,0],[0,0]],
  "b": [[1,0],[1,0],[0,0]],
  "c": [[1,1],[0,0],[0,0]],
  "d": [[1,1],[0,1],[0,0]],
  "e": [[1,0],[0,1],[0,0]],
  "f": [[1,1],[1,0],[0,0]],
  "g": [[1,1],[1,1],[0,0]],
  "h": [[1,0],[1,1],[0,0]],
  "i": [[0,1],[1,0],[0,0]],
  "j": [[0,1],[1,1],[0,0]],
  "k": [[1,0],[0,0],[1,0]],
  "l": [[1,0],[1,0],[1,0]],
  "m": [[1,1],[0,0],[1,0]],
  "n": [[1,1],[0,1],[1,0]],
  "o": [[1,0],[0,1],[1,0]],
  "p": [[1,1],[1,0],[1,0]],
  "q": [[1,1],[1,1],[1,0]],
  "r": [[1,0],[1,1],[1,0]],
  "s": [[0,1],[1,0],[1,0]],
  "t": [[0,1],[1,1],[1,0]],
  "u": [[1,0],[0,0],[1,1]],
  "v": [[1,0],[1,0],[1,1]],
  "w": [[0,1],[1,1],[0,1]],
  "x": [[1,1],[0,0],[1,1]],
  "y": [[1,1],[0,1],[1,1]],
  "z": [[1,0],[0,1],[1,1]]
};

var numbers = {
  "1": [[1,0],[0,0],[0,0]],
  "2": [[1,0],[1,0],[0,0]],
  "3": [[1,1],[0,0],[0,0]],
  "4": [[1,1],[0,1],[0,0]],
  "5": [[1,0],[0,1],[0,0]],
  "6": [[1,1],[1,0],[0,0]],
  "7": [[1,1],[1,1],[0,0]],
  "8": [[1,0],[1,1],[0,0]],
  "9": [[0,1],[1,0],[0,0]],
  "0": [[0,0],[0,1],[1,1]],
};

// input paragraph to transform

var input = "Justin Bieber";

var lowerCaser = function(char){
    if(char === char.toUpperCase() )
    {
      return char.toLowerCase();
    }
    return char;
};

var transformer = function(paragraphe){
      var character = '';
      var textToMatrix = [];
      for(var i = 0;i < paragraphe.length;i++){
          character = paragraphe.charAt(i);
          // Space case
          if(character === " "){
            textToMatrix.push([[0,0],[0,0],[0,0]]);
          }
          character = lowerCaser(character);
        //  console.log(character);
          if(isNaN( parseInt(character) ) ){
              // parcourir les alphabets
              for(alphabet in alphabets){
                if(alphabet === character){
                  var matrix = alphabets[alphabet];
                  textToMatrix.push(matrix);
                }
              }
          }
          else {
            // number case
            for(number in numbers){
              if(number === character){
                var matrix = numbers[number];
                textToMatrix.push(matrix);
              }
            }
          }
      }
      // return the Matrix of full text
      return textToMatrix;
}

var matrix = transformer(input);
// write it to DOM Elements
var output = "";
var domIt = function(matrix){
  for(var i = 0;i < matrix.length;i++){

      for(var j = 0; j < matrix[i].length ;j++){
          if(j%3 === 0 ){
            output += "</div><div class='char'>";
          }
          var cases = matrix[i][j];
          output += "<div class='case'>";
          for(cas in cases){

            if(cases[cas]){
              output += "<div class='full'></div>";
            }
            else
            {
              output += "<div class='blank'></div>";
            }

          }
          output += "</div>";
      }

  }

  output += "";

};



domIt(matrix);

document.write(output);
