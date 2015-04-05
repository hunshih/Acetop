var divStyle = {
  color: 'white',
  backgroundImage: 'url(../image/home.jpg)',
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all', // 'ms' is the only lowercase vendor prefix
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  paddingTop: '100',
  height: '600',
  WebkitFilter: 'opacity(.2)'
};

var About = React.createClass({
    render: function(){
        return (
            <div style={divStyle}>
            hiiii
            </div>
        );
    }
});

React.render(
    <About />,
    document.getElementById('content')
);