var TableSymptoms = function () {

    var initTableSymptoms = function() {
         
        /*
         * Initialse DataTables, with no sorting on the 'details' column
         */
        var oTable = $('#table_symptoms').dataTable( {
             "aLengthMenu": [
                [5, 15, 20, -1],
                [5, 15, 20, "All"] // change per page values here
            ],
            // set the initial value
            "iDisplayLength": 20,
        });

        jQuery('#table_symptoms_wrapper .dataTables_filter input').addClass("m-wrap small"); // modify table search input
        jQuery('#table_symptoms_wrapper .dataTables_length select').addClass("m-wrap small"); // modify table per page dropdown
        jQuery('#table_symptoms_wrapper .dataTables_length select').select2(); // initialzie select2 dropdown
    }

    return {

        //main function to initiate the module
        init: function () {
            
            if (!jQuery().dataTable) {
                return;
            }

            initTableSymptoms();
        }

    };

}();