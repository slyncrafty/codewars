/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/53e248c9af0d91a45b000e71/
/* ========== ========== ========== ========== ========== ==========*/
/*
mkdir -p

Description:
Write a synchronous function that makes a directory and recursively makes all of its parent directories as necessary.

A directory is specified via a sequence of arguments which specify the path. For example:

mkdirp('/','tmp','made','some','dir')

...will make the directory /tmp/made/some/dir.

Like the shell command mkdir -p, the function you program should be idempotent if the directory already exists.

HINT:

    In javascript/coffescript, you will want to require('fs') and use functions in that library.
        Documentation on fs.

    In python, you will want to use the os module and os.path
        Documentation on os module
        Documentation on os.path module

*/

// Solution
const fs = require('fs');
const path = require('path');

function mkdirp(...args) {
	const fullPath = path.join(...args);
	const parts = fullPath.split(path.sep);
	let currentPath = parts[0] === '' ? path.sep : parts[0];
	for (let i = 1; i < parts.length; i++) {
		if (!parts[i]) continue;
		currentPath = path.join(currentPath, parts[i]);
		if (!fs.existsSync(currentPath)) {
			fs.mkdirSync(currentPath);
		}
	}
	return fullPath;
}
