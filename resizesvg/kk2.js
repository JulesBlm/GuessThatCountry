import @turf/bbox
var fs = require('fs');

res = 

kkk = JSON.stringify(res)

fs.readdir(path, function(err, items) {
    console.log(items);
 
    for (var i=0; i<items.length; i++) {
        console.log(items[i]);
    }
});


fo
var bbox = turf.bbox(line);

fs.writeFile('new.js', kkk, 'utf8', (err) => {  
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log('Lyric saved!');
});
