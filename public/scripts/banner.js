var navStyle = {
    
    position: 'fixed',
    WebkitTransition: 'all', // note the capital 'W' here
    msTransition: 'all', // 'ms' is the only lowercase vendor prefix
    backgroundColor: '#2D2D2D',
    outerWidth: 200,
    height: 60,
    top: '0',
    left: '0',
    right: '0'
};


var linkStyle = {
  boxSizing: 'content-box',
  display: 'inline-block',
  color: '#ddd',
    width:'100',
    fontFamily:'Century Gothic'
};

var Banner = React.createClass({
    render: function(){
        return(
            <nav style={navStyle}>
                <Sectionlink name="About"/>
                <Sectionlink name="Galary"/>
                <Sectionlink name="Stories"/>
                <Sectionlink name="Contact"/>
            </nav>
        );
    }
});

var Sectionlink = React.createClass({
    render: function(){
        return(
            <li style={linkStyle}>
            {this.props.name}
            </li>
        );
    }
});

React.render(
<Banner />, document.getElementById('content')
);