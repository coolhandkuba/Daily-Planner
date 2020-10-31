// Activate moment.js and choose the time stamp format
moment();
$('#currentDay').text(moment().format('dddd MMMM do YYYY, hh:mm A'));

// Variables
var currentTime = moment();
var startTime = moment().startOf('day').add(8, 'hours');
var x = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

// variables for all the work hours (8 AM - 6 PM) to populate in table
var time8 = startTime.add(0, 'h');
time8 = time8.format('hh:mm A');
$('.block8').text(time8);

var time9 = startTime.add(1, 'h');
time9 = time9.format('hh:mm A');
$('.block9').text(time9);

var time10 = startTime.add(1, 'h');
time10 = time10.format('hh:mm A');
$('.block10').text(time10);

var time11 = startTime.add(1, 'h');
time11 = time11.format('hh:mm A');
$('.block11').text(time11);

var time12 = startTime.add(1, 'h');
time12 = time12.format('hh:mm A');
$('.block12').text(time12);

var time13 = startTime.add(1, 'h');
time13 = time13.format('hh:mm A');
$('.block13').text(time13);

var time14 = startTime.add(1, 'h');
time14 = time14.format('hh:mm A');
$('.block14').text(time14);

var time15 = startTime.add(1, 'h');
time15 = time15.format('hh:mm A');
$('.block15').text(time15);

var time16 = startTime.add(1, 'h');
time16 = time16.format('hh:mm A');
$('.block16').text(time16);

var time17 = startTime.add(1, 'h');
time17 = time17.format('hh:mm A');
$('.block17').text(time17);

var time18 = startTime.add(1, 'h');
time18 = time18.format('hh:mm A');
$('.block18').text(time18);

// Need this to declare which hour we are currenlty on
currentTime = currentTime.startOf('hour');

// Function that adds the dynamic class based on what time it is
function run() {
    time8 = moment().startOf('day').add(8, 'hours');
    if (currentTime.isAfter(time8)){
        $('.form8').addClass('past');
    } else if (currentTime.isBefore(time8)){
        $('.form8').addClass('future');
    } else if (currentTime.isSame(time8)){
        $('.form8').addClass('present');
    };

    time9 = moment().startOf('day').add(9, 'hours');
    if (currentTime.isAfter(time9)){
        $('.form9').addClass('past');
    } else if (currentTime.isBefore(time9)){
        $('.form9').addClass('future');
    } else if (currentTime.isSame(time9)){
        $('.form9').addClass('present');
    };

    time10 = moment().startOf('day').add(10, 'hours');
    if (currentTime.isAfter(time10)){
        $('.form10').addClass('past');
    } else if (currentTime.isBefore(time10)){
        $('.form10').addClass('future');
    } else if (currentTime.isSame(time10)){
        $('.form10').addClass('present');
    };

    time11 = moment().startOf('day').add(11, 'hours');
    if (currentTime.isAfter(time11)){
        $('.form11').addClass('past');
    } else if (currentTime.isBefore(time11)){
        $('.form11').addClass('future');
    } else if (currentTime.isSame(time11)){
        $('.form11').addClass('present');
    };

    time12 = moment().startOf('day').add(12, 'hours');
    if (currentTime.isAfter(time12)){
        $('.form12').addClass('past');
    } else if (currentTime.isBefore(time12)){
        $('.form12').addClass('future');
    } else if (currentTime.isSame(time12)){
        $('.form12').addClass('present');
    };

    time13 = moment().startOf('day').add(13, 'hours');
    if (currentTime.isAfter(time13)){
        $('.form13').addClass('past');
    } else if (currentTime.isBefore(time13)){
        $('.form13').addClass('future');
    } else if (currentTime.isSame(time13)){
        $('.form13').addClass('present');
    };

    time14 = moment().startOf('day').add(14, 'hours');
    if (currentTime.isAfter(time14)){
        $('.form14').addClass('past');
    } else if (currentTime.isBefore(time14)){
        $('.form14').addClass('future');
    } else if (currentTime.isSame(time14)){
        $('.form14').addClass('present');
    };

    time15 = moment().startOf('day').add(15, 'hours');
    if (currentTime.isAfter(time15)){
        $('.form15').addClass('past');
    } else if (currentTime.isBefore(time15)){
        $('.form15').addClass('future');
    } else if (currentTime.isSame(time15)){
        $('.form15').addClass('present');
    };

    time16 = moment().startOf('day').add(16, 'hours');
    if (currentTime.isAfter(time16)){
        $('.form16').addClass('past');
    } else if (currentTime.isBefore(time16)){
        $('.form16').addClass('future');
    } else if (currentTime.isSame(time16)){
        $('.form16').addClass('present');
    };

    time17 = moment().startOf('day').add(17, 'hours');
    if (currentTime.isAfter(time17)){
        $('.form17').addClass('past');
    } else if (currentTime.isBefore(time17)){
        $('.form17').addClass('future');
    } else if (currentTime.isSame(time17)){
        $('.form17').addClass('present');
    };

    time18 = moment().startOf('day').add(18, 'hours');
    if (currentTime.isAfter(time18)){
        $('.form18').addClass('past');
    } else if (currentTime.isBefore(time18)){
        $('.form18').addClass('future');
    } else if (currentTime.isSame(time18)){
        $('.form18').addClass('present');
    };
};
// Calling the function 
run();

// Click event to call the hour and text to be saved in local storage
$(".saveBtn").click(function (event) {
    event.preventDefault();
    var valueHour = $(this).parent().data("hour");
    var valueText = $(this).siblings(".form-control").val();
    localStorage.setItem(valueHour, valueText);
});

// For loop to where x = the hours (8-18) and loops through the array to see which has data on the localstorage and keeps it on the page 
for (var i = 0; i < x.length; i++) {
    var hourVal = localStorage.getItem(x[i]);
    $(".form" + x[i]).val(hourVal);
}
// functions for the clear button - clears input as well as local storage
$(".clearBtn8").click(function () {
    $(".form8").val("");
    localStorage.removeItem(8);
});

$(".clearBtn9").click(function () {
    $(".form9").val("");
    localStorage.removeItem(9);
});

$(".clearBtn10").click(function () {
    $(".form10").val("");
    localStorage.removeItem(10);
});

$(".clearBtn11").click(function () {
    $(".form11").val("");
    localStorage.removeItem(11);
});

$(".clearBtn12").click(function () {
    $(".form12").val("");
    localStorage.removeItem(12);
});

$(".clearBtn13").click(function () {
    $(".form13").val("");
    localStorage.removeItem(13);
});

$(".clearBtn14").click(function () {
    $(".form14").val("");
    localStorage.removeItem(14);
});

$(".clearBtn15").click(function () {
    $(".form15").val("");
    localStorage.removeItem(15);
});

$(".clearBtn16").click(function () {
    $(".form16").val("");
    localStorage.removeItem(16);
});

$(".clearBtn17").click(function () {
    $(".form17").val("");
    localStorage.removeItem(17);
});

$(".clearBtn18").click(function () {
    $(".form18").val("");
    localStorage.removeItem(18);
});
