
function PixelPainter (width, height){
  this.artboard = $('<div id="pixelPainter_artboard"></div>');
  this.controls = $('<div id="pixelPainter_controls"></div>');
  var colors = ['#DC143C', '#FF3E96', '#DA70D6', '#EE82EE', '#9400D3', '#4B0082', '#9B30FF', 
  '#000080', '#6495ED', '#63B8FF', '#87CEFF', '#98F5FF', '#00C78C', '#43CD80', '#228B22', 
  '#C0FF3E', '#FFD700', '#FFA500','#CD6600', '#A0522D', '#FF4500', '#FF6347', '#FF4040', 
  '#1E1E1E', '#FFFFFF'] //this var holds the colors in controls table


  var hold = 0;
  var table = $('<table></table>');
    for (var i = 0; i < 5; i++) {
      var tableRow = $('<tr></tr>');
      for (var j = 0; j < 5; j++)  {
        var tableData = $('<td></td>');
        $(tableRow).append(tableData);
        tableData.css({'background-color': colors[hold]});
        hold++;
      };
    $(table).append(tableRow);
    };
    this.controls.append(table);



  var Canvas = $('<table id="Canvas"></table>');
    for (var k = 0; k < width; k++) {
      var canvasRow = $('<tr/>'); 
      for (var l = 0; l < height; l++) {
        $(canvasRow).append('<td></td>');
      };
    $(Canvas).append(canvasRow);
    };
    this.artboard.append(Canvas);


  var captureColor;
  this.controls.find("td").on("click", function() {
    captureColor = $(this).css("background-color");
    });  
    

  var placeColor;
  this.artboard.find("td").on("click", function() {
    placeColor = $(this).css("background-color", captureColor);
  });


  var clearButton = $('<button id="clear">clear</button>');
  this.controls.append(clearButton);
    $(clearButton).on("click", function() {
      artboard.find("td").css('background-color', '#FFFFFF');
  });


  var eraseButton = $('<button id="erase">erase</button>');
  this.controls.append(eraseButton);
    $(eraseButton).on("click", function() {
      $(this).css("background-color", "white");
        captureColor = "#FFFFFF";
  });
    return this;
}

$( document ).ready(function() {
  var p = PixelPainter(10,10);
  $("#controls").append(p.controls);
  $("#artboard").append(p.artboard);
});


//Attempt to create a function for PixelPainter

// Canvas(10,10);
// PixelPainter(5,5);

// Create a function called PixelPainter
// that will accept 2 arguments, width and height
// pixelPainter will return itself, which is done above in document.ready
// function PixelPainter (width, height){
//   var fill = 0;
//   var tableCells = ""; // This will hold the HTML elements as strings in var tableCells
//   var controls = $("#controls");  // declaure a var for controls, connect to index
//     tableCells += '<table>'; 
//     for (i = 0; i < width; i++){  // for loop to create the width of table
//       tableCells += '<tr>'; // capture the tr tags in tableCells
//       for (j = 0; j < height; j++){  // for loop to create the height of table
//         tableCells += '<td class = "cell"></td>'; // capture the td tags in tableCells and call them cell
//       }
//       tableCells += '</tr>'; // close tr
//     }
//     tableCells += '</table>';  // close table
//     tableCells.css({'background-color' : colors [fill]}) // This should add background color to fill
//     fill++;
//     controls.append(tableCells);  //append elements captured in tableCells to controls in DOM
// }
//Jquery method
// var container = $("container")
// table = $('<table')

// Create a function called Canvas
// that will accept 2 arguments, width and height
// Canvas will return itself, which is done above in document.ready
// function Canvas (width, height){
// var tableCells = ""; // This will hold the HTML elements as strings in var tableCells
// var artboard = $("#artboard");  // declaure a var for controls, connect to index
//   tableCells += '<table>'; 
//   for (i = 0; i < width; i++){  // for loop to create the width of table
//     tableCells += '<tr>'; // capture the tr tags in tableCells
//     for (j = 0; j < height; j++){  // for loop to create the height of table
//       tableCells += '<td class = "cell"></td>'; // capture the td tags in tableCells and call them cell
//     }
//     tableCells += '</tr>'; // close tr
//   }
//   tableCells += '</table>';  // close table
//   artboard.append(tableCells);  //append elements captured in gridhtml to controls in DOM
// }


// var controls = $("td");

// // Capture the css attribute of the control section
// controls.click.function(){
//   console.log("captured color");
// };

// $("#red").click(function(){
//   $(this).css(background)
// });


// // Change the cell to the color capture by the previous click
// $().click(function(){
//   $(this).attr("red")
// });


// pixelPainter binds #artboard and #controls as its properties

// The grid will be width cells wide and height cells tall

// Each cell can be any width or height, but must be a square




// var pixelPainter = PixelPainter(20,20);
//   $("#controls").append(pixelPainter.controls);
//   $("#artboard").append(pixelPainter.artboard);


// }