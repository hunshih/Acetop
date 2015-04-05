var bannerStyle = {
    WebkitTransition: 'all', // note the capital 'W' here
    msTransition: 'all', // 'ms' is the only lowercase vendor prefix
    textAlign:'center',
    marginTop: '15'
}

var containerStyle = {
};

var linkStyle = {
    display: 'inline-block',
    color: '#ddd',
    width:'150',
    top: '10',
    textDecoration: 'none'
};

var Banner = React.createClass({
    render: function(){
        return(
            <nav style={bannerStyle}>
                <LinkContainer />
            </nav>
        );
    }
});

var LinkContainer = React.createClass({
    render: function(){
        return(
            <div style={containerStyle}>
                <Sectionlink name="About"/>
                <Sectionlink name="Galary"/>
                <Sectionlink name="Stories"/>
                <Sectionlink name="Contact"/>
            </div>
        );
    }
});

var Sectionlink = React.createClass({
    render: function(){
        return(
            <a href="/#" style={linkStyle} onmouseover>
            {this.props.name}
            </a>
        );
    }
});

React.render(
<Banner />, document.getElementById('header')
);