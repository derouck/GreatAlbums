/*********************************************************/
/* Server Only Methods */
/*********************************************************/

Meteor.methods({

	'submitAlbum': function(album){

		Albums.insert(album);

	}

});