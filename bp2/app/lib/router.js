Router.configure({
    layoutTemplate: 'AppLayout',
    loadingTemplate: 'PageLoading',
    notFoundTemplate: 'PageNotFound',
    yieldTemplates: {
        Header: {to: 'header'},
        Footer: {to: 'footer'},
    }
});

Router.map(function() {
    this.route('home', {
        path: '/',
    });

    this.route('albums');

    this.route('about');

    this.route('admin');
});

Router.plugin('ensureSignedIn', {
  only: ['admin']
});