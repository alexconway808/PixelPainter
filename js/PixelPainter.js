// Create a function called PixelPainter
// that will accept 2 arguments, width and height
// pixelPainter will return itself


function PixelPainter (width, height){
var gridHtml = "";
var controls = $("#controls");
  gridHtml += '<table border = "1" cellspacing = "1" cellpadding = "1">';
  for (i = 0; i < 10; i++){
    gridHtml += '<tr>';
    for (j = 0; j < 10; j++){
      gridHtml += '<td>' + (i + j) + '</td>';
    }
    gridHtml += '</tr>';
  }
  gridHtml += '</table>';
  controls.append(gridHtml);
}


$( document ).ready(function() {
  console.log( "ready!" );
  PixelPainter(10,10);
});


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