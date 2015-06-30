Albums.permit(['insert', 'update', 'remove']).ifLoggedIn().apply();

//Albums.permit(['insert', 'update', 'remove']).never().apply();
