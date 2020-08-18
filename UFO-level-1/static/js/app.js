// from data.js
var tableData = data;
console.log(tableData);

// YOUR CODE HERE!
//Form an array of javascript objects from data
//Write code that appends a table to your web page and then 
//adds new rows of data for each UFO sighting

//Columns : data/time, city, state, country, shape, duration, comment.
// use a date form in html and write javascipt code
//that will listen to events and search through the date/time column 
//to find rows that match user input

//Select the table body
var tbody = d3.select("tbody")

//clearing the table body
tbody.html("")

//Loop through data and append rows to the table body
tableData.forEach(function(UFOsighting) {
    var row = tbody.append("tr");
    //append method to insert table data for each row
    Object.values(UFOsighting).forEach(function(value) {
        console.log(value)
            //append to insert a cell for each value, text to insert data to each cell
        var cell = row.append("td").text(value);
    });
});

//select the button and create function
var button = d3.select("#filter-btn");

button.on("click", function() {
    //select the input element and get the html node
    var inputElement = d3.select(".form-control");
    //get the value property of the input element
    var inputDate = inputElement.property("value");
    console.log(inputDate)
        //filter data for the date value to get data that is searched for
    var filteredData = tableData.filter(UFOsighting => UFOsighting.datetime === inputDate);
    console.log(filteredData);

    //select the table body to insert table rows and cells
    var tbody = d3.select("tbody")
        //clean the table body to insert selected date values
    tbody.html("");

    //loop through filtered data to insert rows and cells for each object
    filteredData.forEach(function(UFOsighting) {
        var row = tbody.append("tr");
        Object.values(UFOsighting).forEach(function(value) {
            var cell = row.append("td").text(value);
        })
    })

});