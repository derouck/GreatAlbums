import Tabular from 'meteor/aldeed:tabular';

new Tabular.Table({
    name: "AlbumsList",
    collection: Albums,
    columns: [
        {
            data: "artNr",
            titleFn: () => "Art.Nr",
            class: "col-md-1",
            visible: false
        },
        {
            data: "artistName",
            titleFn: () => "Artist",
            class: "col-md-3"
        },
        {
            data: "albumTitle",
            titleFn: () => "Title",
            class: "col-md-4"
        },
        {
            data: "inStock",
            titleFn: () => "In stock",
            class: "col-md-1",
            visible: false
        },
        {
            data: "backOrdersPossible",
            titleFn: () => "Backorders Possible",
            class: "col-md-1"
        },
        {
            data: "price",
            titleFn: () => "Price",
            class: "col-md-1"
        },
        {
            tmpl: Meteor.isClient && Template.AlbumActionBtns,
            class: "col-md-1"
        }

    ],
    stateSave: true,
    buttons: ['colvis'],
    dom: 'Bfrtip',
});
