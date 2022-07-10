/**
 * 
 * @authors Benjamin (zuojj.com@gmail.com)
 * @date    2016-08-17 11:53:24
 * @version $Id$
 */


var webpage = require('webpage'),
    page = webpage.create(),
    args = require('system').args,
    html = ['---'        + args[0],
            'url: '      + args[1],
            'filepath: ' + args[2],
            'width: '    + args[3],
            'height: '   + args[4],
            'format: '   + args[5],
            'quality: '  + args[6]
            ];

if(args.length === 7) {
    // console.log(html.join('\n'));

    // page.settings.userAgent = 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:31.0) Gecko/20100101 Firefox/31.0';
    page.viewportSize = { width: args[3], height: args[4] };
    page.open(window.decodeURIComponent(args[1]), function(status) {
        page.evaluate(function() {
            document.body.style.backgroundColor = 'white';
            document.documentElement.style.backgroundColor = 'white';
        });
        if('success' !== status) {
            console.log('fail');
        }else {
            console.log('success');

            window.setTimeout(function () {
                var rendered = page.render(args[2], {format: args[5], quality: args[6]});
                
                console.log(rendered);
                phantom.exit();
            }, 1000);
        }
    }); 
} else {
    console.log('args.length = ' + args.length);
}

