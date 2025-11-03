/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/597770e98b4b340e5b000071/
/* ========== ========== ========== ========== ========== ==========*/
/*
extract portion of file name

Description:
You have to extract a portion of the file name as follows:

    Assume it will start with date represented as long number
    Followed by an underscore
    You'll have then a filename with an extension
    it will always have an extra extension at the end

Inputs:

1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION

1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34

1231231223123131_myFile.tar.gz2

Outputs

FILE_NAME.EXTENSION

This_is_an_otherExample.mpg

myFile.tar

Acceptable characters for random tests:

abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-0123456789

The recommended way to solve it is using RegEx and specifically groups.

*/

// Solution
class FileNameExtractor {
	static extractFileName(dirtyFileName) {
		const parts = dirtyFileName.match(/^\d+_([\w-_]+\.[\w-_]+)/);
		return parts[1];
	}
}
// Test Codes
const strictEqual = (a, b) => {
	if (a === b) {
		console.log('Correct');
	} else {
		console.log('Incorrect', a, b);
	}
};
strictEqual(
	FileNameExtractor.extractFileName(
		'1_FILE_NAME.EXTENSION.OTHEREXTENSIONadasdassdassds34'
	),
	'FILE_NAME.EXTENSION'
);
strictEqual(
	FileNameExtractor.extractFileName(
		'1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION'
	),
	'FILE_NAME.EXTENSION'
);
