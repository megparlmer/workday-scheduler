$(document).ready(function () {
    //displays current date
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    //when button is clicked, data is put into localStorage
    $(".saveBtn").on("click", function() {
        console.log(this);
        var time = $(this).parent().attr('id');

        var textInput = $(this).siblings('.description').val();
        localStorage.setItem(time, textInput);
    });

    //loads saved local storage data

    //$('.notification').addClass('show');
    //timeblocks change color if they are in the past
    function trackTime() {
        var currentTime = moment().hours();
        //loop over the timeblocks to see which ones are in the past
        $(".time-block").each(function() {
            var blockHour = parseInt($(this).attr('id').split('-')[1]);
            console.log(blockHour, currentTime);

            if (blockHour < currentTime) {
                $(this).addClass('past');
            } else if (blockHour === currentTime) {
                $(this).removeClass('past');
                $(this).addClass('present');
            } else {
                $(this).removeClass('present');
                $(this).removeClass('past');
                $(this).addClass('future');
            }
        
        })
    }
    trackTime();

    $('#hour-nine .description').val(localStorage.getItem('hour-nine'));
    $('#hour-ten .description').val(localStorage.getItem('hour-ten'));
    $('#hour-eleven .description').val(localStorage.getItem('hour-eleven'));
    $('#hour-twelve .description').val(localStorage.getItem('hour-twelve'));
    $('#hour-thirteen .description').val(localStorage.getItem('hour-thirteen'));
    $('#hour-fourteen .description').val(localStorage.getItem('hour-fourteen'));
    $('#hour-fifteen .description').val(localStorage.getItem('hour-fifteen'));
    $('#hour-sixteen .description').val(localStorage.getItem('hour-sixteen'));
    $('#hour-seventeen .description').val(localStorage.getItem('hour-seventeen'));


    $('#currentDay').text(moment().format('dddd, MMMM Do'));
});