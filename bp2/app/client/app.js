
// Customize the spinner shown during page loads
Meteor.Spinner.options = {
  lines: 16, // The number of lines to draw
  length: 20, // The length of each line
  width: 2, // The line thickness
  corners: 0.9, // Corner roundness (0..1)
  color: '#000000', // #rgb or #rrggbb
  speed: 2.5, // Rounds per second
  trail: 10 // Afterglow percentage
};

toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-center",
  "preventDuplicates": true,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
};

import { $ } from 'meteor/jquery';
import dataTablesBootstrap from 'datatables.net-bs';
import 'datatables.net-bs/css/dataTables.bootstrap.css';

// Buttons Core
import dataTableButtons from 'datatables.net-buttons-bs';

// Import whichever buttons you are using
import columnVisibilityButton from 'datatables.net-buttons/js/buttons.colVis.js';

dataTablesBootstrap(window, $);
dataTableButtons(window, $);
columnVisibilityButton(window, $);
