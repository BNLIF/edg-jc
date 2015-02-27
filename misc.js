$(document).ready(function() {

    var enrolledDays = ["2014-9-4", "2014-9-11", "2014-9-18", "2014-10-2", "2014-10-16", 
                        "2014-11-6", "2014-11-13", "2014-11-20", "2014-12-4",
                        "2015-1-29", "2015-2-12"
                       ];

    var disabledDays = ["2014-11-27", "2014-12-18", "2014-12-25", "2015-1-1", "2015-1-15", 
                        "2015-1-22" , "2015-2-5"
                       ];
    var date = new Date();

    $("#calendar").datepicker({ 
        dateFormat: 'yy-mm-dd',
        numberOfMonths: 3,
        beforeShowDay: function(date) {
            var m = date.getMonth(), d = date.getDate(), y = date.getFullYear();
            for (i = 0; i < enrolledDays.length; i++) {
                // console.log(y + '-' + (m+1) + '-' + d);
                if($.inArray(y + '-' + (m+1) + '-' + d,enrolledDays) != -1) {
                    //return [false];
                    // console.log(i);
                    return [true, 'ui-state-active', ''];
                }
            }
            for (i = 0; i < disabledDays.length; i++) {
                // console.log(y + '-' + (m+1) + '-' + d);
                if($.inArray(y + '-' + (m+1) + '-' + d,disabledDays) != -1) {
                    //return [false];
                    // console.log(i);
                    return [true, 'ui-state-disabled', ''];
                }
            }
            return [true];

        }
    });

    // $('#calendar').datepicker();

});