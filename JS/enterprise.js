$('#OP').timepicker({
    icons:{
        up: 'bi bi-chevron-up',
        down: 'bi bi-chevron-down'
    }
});
$('#ED').timepicker({
    icons:{
        up: 'bi bi-chevron-up',
        down: 'bi bi-chevron-down'
    }
});
$('#breakOP').timepicker({
    icons:{
        up: 'bi bi-chevron-up',
        down: 'bi bi-chevron-down'
    }
});
$('#breakED').timepicker({
    icons:{
        up: 'bi bi-chevron-up',
        down: 'bi bi-chevron-down'
    }
});

var KTBootstrapDaterangepicker = function () {
    // Private functions
    var demos = function () {
        // date picker
        $('#Spe1').daterangepicker({
            buttonClasses: ' btn',
            applyClass: 'btn-primary',
            cancelClass: 'btn-secondary',
            
            singleDatePicker: true,
            showDropdowns: true,
            autoApply: true,
            locale: {
                format: 'YYYY/MM/DD'
            }
        }, function (start) {
            $('#Spe1 .form-control').val(start.format('YYYY/MM/DD'));
        });

        $('#Spe2').daterangepicker({
            buttonClasses: ' btn',
            applyClass: 'btn-primary',
            cancelClass: 'btn-secondary',

            singleDatePicker: true,
            showDropdowns: true,
            autoApply: true,
            locale: {
                format: 'YYYY/MM/DD'
            }
        }, function (start) {
            $('#Spe2 .form-control').val(start.format('YYYY/MM/DD'));
        });
        // predefined ranges
        var start = moment().subtract(29, 'days');
        var end = moment();
    }

    return {
        // public functions
        init: function () {
            demos();
        }
    };
}();

jQuery(document).ready(function () {
    KTBootstrapDaterangepicker.init();
});