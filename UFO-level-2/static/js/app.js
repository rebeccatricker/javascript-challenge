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
var inputCity = d3.select("#city").property("value");
var inputState = d3.select("#state").property("value");
var inputCountry = d3.select("#country").property("value");
var inputShape = d3.select("#shape").property("value");

var filteredData = tableData;
if (inputValue) {
    filteredData = filteredData.filter(row => row.datetime === inputValue);
}
if (inputCity) {
    filteredData = filteredData.filter(row => row.city === inputCity);
}
if (inputState) {
    filteredData = filteredData.filter(row => row.state === inputState);
}
if (inputCountry) {
    filteredData = filteredData.filter(row => row.country === inputCountry);
}
if (inputShape) {
    filteredData = filteredData.filter(row => row.shape === inputShape);
}

filteredData.forEach(function(sections) {
    var row = tbody.append("tr");
    Object.entries(sections).forEach(function([key, value]){
        var cell = tbody.append("td");
        cell.text(value);
    });
   });
});