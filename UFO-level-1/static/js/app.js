// from data.js
var tableData = data;
console.log(tableData);

// YOUR CODE HERE!
var tbody = d3.select("tbody");
console.log(data);

// Use d3 to update each cell's text with
// table values (date/time, city, state, country, shape, comment)
data.forEach(function(ufoSighting) {
  console.log();ufoSighting
  var row = tbody.append("tr");
  Object.entries(ufoSighting).forEach(function([key, value]) {
    console.log(key, value);
    var cell = tbody.append("td");
    cell.text(value);
  });
}); 

// Select the button 
var button = d3.select("#filter-btn");

// Create event handlers and complete the event handler function
// Prevent page from refreshing
// Select the input element and get the raw HTML node
// Get the value property of the input element
button.on("click", function(event){
    d3.event.preventDefault();
    tbody.html("");

var inputElement = d3.select("#datetime");
var inputValue = inputElement.property("value");

var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
filteredData.forEach(function(date) {
    var row = tbody.append("tr");
    Object.entries(date).forEach(function([key, value]){
        var cell = tbody.append("td");
        cell.text(value);
    });
});
});