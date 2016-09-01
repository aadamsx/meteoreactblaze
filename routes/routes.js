FlowRouter.route( '/hello', {
  action: function() {
    BlazeLayout.render( 'layoutMain', { header: 'header', main: 'hello' } ); 
  },
  name: 'hello.view'
});

FlowRouter.route( '/bye', {
  action: function() {
    BlazeLayout.render( 'layoutAlt', { main: 'bye', footer: 'footer' } ); 
  },
  name: 'bye.view'
});

FlowRouter.route( '/', {
  action: function() {
    BlazeLayout.render( 'layoutMain', { header: 'header', main: 'home'} ); 
  },
  name: 'home.view'
});