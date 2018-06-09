require('./word.js');
require('style-loader!css-loader!./src/assets/css/main.css');

function hello(str){
    alert(str);
}

// temp.showmessage();

hello('hello webpack demo with chunkhash code');