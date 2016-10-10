// (done) 1. Add a search bar and search button when the page loads
// (done) 2. Add navigation at the bottom of the page
$(document).ready(function(){
  $('.page-header').append('<div class="student-search"><input type="search" name="search-box" placeholder="Search..."><button id="search-button">Search</button></div>');
  $('.add').append('<div class="pagination"><ul><li class="button1"><a href="#">1</a></li><li class="button2"><a href="#">2</a></li><li class="button3"><a href="#">3</a></li><li class="button4"><a href="#">4</a></li></ul></div>');
});


//(done) 3. Hide all but the first 10 students when the page loads.

var allStudents = $('ul.student-list').children().length;

function calculatePageLoad(){
  for (var i = 0; i < allStudents; i++){
    if ( i > 9) {
      $("li.student-item").eq(i).hide();
    }
  }
}

calculatePageLoad();

//  4. When a user clicks on “2” in the pagination, students 11 through 20 are shown. When a user clicks “3”, students 21 through 30 are shown. And so on. When “6” is clicked 51 through 55 should be shown.

//trying to find where I need to click, so I can use the function below, but can't find it.

var button2 = $('li.button2');
console.log(button2);

button2.addEventlistener('click', function(){
  for(var i = 0; i < allStudents; i++) {
    if (i <= 9 || i > 19) {
      $("li.student-item").eq(i).hide();
    }
  }
});
