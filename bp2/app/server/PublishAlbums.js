/*********************************************************/
/* Server Only ==> Publish  */
/*********************************************************/

Meteor.publish("singleAlbum", function (id) {

    // check(id, String);
    //
    // if (Match.Error) {
    //
    //     console.log('Matching Error ZZZ');
    // }

    return Albums.find({_id: id});

});
