

// Code included inside $( document ).ready() will 
//only run once the page Document Object Model (DOM) is 
//ready for JavaScript code to execute.

$( document ).ready(function() {
  console.log( "ready!" );
  Canvas(10,10);
  PixelPainter(5,5);
});

var artboard = $('#artboard');  
var colors = ['#DC143C', '#FF3E96', '#DA70D6', '#EE82EE', '#9400D3', '#4B0082', '#9B30FF', 
'#000080', '#6495ED', '#63B8FF', '#87CEFF', '#98F5FF', '#00C78C', '#43CD80', '#228B22', 
'#C0FF3E', '#FFD700', '#FFA500','#CD6600', '#A0522D', '#FF4500', '#FF6347', '#FF4040', 
'#1E1E1E', '#FFFFFF'] //this will be the var to hold the colors in controls table


// Create a function called PixelPainter
// that will accept 2 arguments, width and height
// pixelPainter will return itself, which is done above in document.ready
function PixelPainter (width, height){
var fill = 0;
var gridHtml = ""; // This will hold the HTML elements as strings in var gridHTML
var controls = $("#controls");  // declaure a var for controls, connect to index
  gridHtml += '<table>'; 
  for (i = 0; i < width; i++){  // for loop to create the width of table
    gridHtml += '<tr>'; // capture the tr tags in gridhtml
    for (j = 0; j < height; j++){  // for loop to create the height of table
      gridHtml += '<td class = "cell"></td>'; // capture the td tags in gridhtml and call them cell
    }
    gridHtml += '</tr>'; // close tr
  }
  gridHtml += '</table>';  // close table
  controls.append(gridHtml);  //append elements captured in gridhtml to controls in DOM
}


// Create a function called Canvas
// that will accept 2 arguments, width and height
// Canvas will return itself, which is done above in document.ready
function Canvas (width, height){
var gridHtml = ""; // This will hold the HTML elements as strings in var gridHTML
var artboard = $("#artboard");  // declaure a var for controls, connect to index
  gridHtml += '<table>'; 
  for (i = 0; i < width; i++){  // for loop to create the width of table
    gridHtml += '<tr>'; // capture the tr tags in gridhtml
    for (j = 0; j < height; j++){  // for loop to create the height of table
      gridHtml += '<td class = "cell"></td>'; // capture the td tags in gridhtml and call them cell
    }
    gridHtml += '</tr>'; // close tr
  }
  gridHtml += '</table>';  // close table
  artboard.append(gridHtml);  //append elements captured in gridhtml to controls in DOM
}


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