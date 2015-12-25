#! /usr/bin/env node

/**
 * Created by apizzimenti on 12/9/15.
 */

var date = new Date(),
    fs = require('fs'),
    path = require('path'),
    clc = require('cli-color'),
    col = clc.xterm(21),
    rel = path.dirname(require.main.filename),
    json = JSON.parse(fs.readFileSync(rel + '/compliments.json', 'utf8'));

require('./compliments.json');

if (json.times === 0) {
    console.log('All you gotta do is type ' + col('loveme') + ' and a nice lil message will come up :3');
    json.times++;
    fs.writeFileSync(rel + '/compliments.json', JSON.stringify(json, null, 2));
}

if (date.getMonth() === 0 && date.getDay() === 29) {
    console.log(col(json.seasonal[4]));
    process.exit();
} else if (date.getMonth() === 6 && date.getDay() === 12) {
    console.log(col(json.seasonal[1]));
    process.exit();
} else if (date.getMonth() === 11 && date.getDay() === 25) {
    console.log(col(json.seasonal[Math.floor(Math.random() * 3)]));
    process.exit();
} else if (date.getMonth() === 4 && date.getDay() === 25) {
    console.log(col(json.seasonal[2]));
    console.log(col(json.seasonal[3]));
    process.exit();
} else {
    var rC = Math.floor(Math.random() * 2);

    if (rC === 0) {
        console.log(col(json.happy[Math.floor(Math.random() * json.happy.length)]));
    } else {
        console.log(col(json.compliments[Math.floor(Math.random() * json.compliments.length)]));
    }
}

if (process.argv[2] === 'reset') {
    json.times = 0;
    fs.writeFileSync(rel + '/compliments.json', JSON.stringify(json, null, 2));
}