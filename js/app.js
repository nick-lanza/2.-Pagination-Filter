// (done) 1. Add a search bar and search button when the page loads
// (done) 2. Add navigation at the bottom of the page

$(document).ready(function(){
  $('.page-header').append('<div class="student-search"><input type="search" name="search-box" placeholder="Search..." id="searchAll"><button id="search-button">Search</button></div>');
  $('.student-list').append('<div class="pagination"><ul><li><a href="#">1</a></li><li><a href="#">2</a></li><li><a href="#">3</a></li><li><a href="#">4</a></li><li><a href="#">5</a></li><li><a href="#">6</a></li></div>');
});

$(document).ready(function(){
  $('.pagination ul li:nth-child(1)').addClass('button1');
  $('.pagination ul li:nth-child(2)').addClass('button2');
  $('.pagination ul li:nth-child(3)').addClass('button3');
  $('.pagination ul li:nth-child(4)').addClass('button4');
  $('.pagination ul li:nth-child(5)').addClass('button5');
  $('.pagination ul li:nth-child(6)').addClass('button6');
  button1();
  button2();
  button3();
  button4();
  button5();
  button6();
  searchAll();
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

// (done) 4. When a user clicks on “2” in the pagination, students 11 through 20 are shown. When a user clicks “3”, students 21 through 30 are shown. And so on. When “6” is clicked 51 through 55 should be shown.

function button1() {
  $('.button1').on('click', function(){
      for(var i = 0; i < allStudents; i++) {
        if (i <= 9) {
          $("li.student-item").eq(i).show();
        } else if (i > 9) {
          $("li.student-item").eq(i).hide();
        }
      }
    });
}

function button2() {
  $('.button2').on('click', function(){
      for(var i = 0; i < allStudents; i++) {
        if (i <= 9 || i >= 20) {
          $("li.student-item").eq(i).hide();
        } else if (i > 9 || i < 20) {
          $("li.student-item").eq(i).show();
        }
      }
    });
}

function button3() {
  $('.button3').on('click', function(){
    for(var i = 0; i < allStudents; i++) {
      if (i <= 19 || i >= 30) {
        $("li.student-item").eq(i).hide();
      } else if (i > 19 || i < 31) {
        $("li.student-item").eq(i).show();
      }
    }
  });
}

function button4() {
  $('.button4').on('click', function(){
    for(var i = 0; i < allStudents; i++) {
      if (i <= 29 || i >=40) {
        $("li.student-item").eq(i).hide();
      } else if (i > 29 || i < 41) {
        $("li.student-item").eq(i).show();
      }
    }
  });
}
function button5() {
  $('.button5').on('click', function(){
    for(var i = 0; i < allStudents; i++) {
      if (i <= 39 || i >= 50) {
        $("li.student-item").eq(i).hide();
      } else if (i >= 39 || i < 51) {
        $("li.student-item").eq(i).show();
      }
    }
  });
}
function button6() {
  $('.button6').on('click', function(){
    for(var i = 0; i < allStudents; i++) {
      if (i <= 49) {
        $("li.student-item").eq(i).hide();
      } else if (i >= 50) {
        $("li.student-item").eq(i).show();
      }
    }
  });
}

// 5. Add an event listener to the search button. When the user clicks on the button it should use the text in the search input to filter the results. Searching should be case insensitive. e.g. a search for “Susan” should return results for “susan” and “Susan".

function searchAll(){
  $('#searchAll').on('click',function(){

  });
}
