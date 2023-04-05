$(function () {
    $('input[name="daterange"]').daterangepicker({
        "autoApply": true,
        "startDate": "03/19/2023",
        "endDate": "03/25/2023"
    }, function (start, end, label) {
        $('input[name="daterange"] .form-control').val(start.format('YYYY/MM/DD') )
    });

});
