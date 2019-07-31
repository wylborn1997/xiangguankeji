// Theme color settings
$(document).ready(function() {
    function store(name, val) {
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem(name, val);
        } else {
            window.alert('请使用新版浏览器查看!');
        }
    }
    $("*[data-theme]").click(function(e) {
        e.preventDefault();
        var currentStyle = $(this).attr('data-theme');
        /*store('theme', currentStyle);*/
        $('#theme').attr({ href: 'css/colors/' + currentStyle + '.css' })
    });

    var currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
        $('#theme').attr({ href: 'css/colors/' + currentTheme + '.css' });
    }
    // color selector
    $('#themecolors').on('click', 'a', function() {
        $('#themecolors li a').removeClass('working');
        $(this).addClass('working')
    });

});