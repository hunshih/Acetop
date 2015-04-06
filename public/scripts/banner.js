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
                <Sectionlink name="About" location="#about"/>
                <Sectionlink name="Customers" location="#customer"/>
                <Sectionlink name="Galary" location="#galary"/>
                <Sectionlink name="Contact" location="#contact"/>
            </div>
        );
    }
});

var Sectionlink = React.createClass({
    render: function(){
        return(
            <a href={this.props.location} style={linkStyle}>
            {this.props.name}
            </a>
        );
    }
});

React.render(
<Banner />, document.getElementById('header')
);

$('a').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 2000, "easeInOutQuart");
    //alert($(this).attr('href'));
    return false;
});