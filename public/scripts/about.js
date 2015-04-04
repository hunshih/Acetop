var divStyle = {
    color: 'white',
    WebkitTransition: 'all', // note the capital 'W' here
    msTransition: 'all', // 'ms' is the only lowercase vendor prefix
    backgroundColor: '#2D2D2D'
};

var About = React.createClass({
    render: function(){
        return (
            <div style={divStyle}>
            This is the about section!
            </div>
        );
    }
});

React.render(
    <About />,
    document.getElementById('content')
);