/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/515bb423de843ea99400000a
/* ========== ========== ========== ========== ========== ==========*/
/*
PaginationHelper

Description:
For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

The following are some examples of how this class is used:

var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
helper.pageCount(); // should == 2
helper.itemCount(); // should == 6
helper.pageItemCount(0); // should == 4
helper.pageItemCount(1); // last page - should == 2
helper.pageItemCount(2); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
helper.pageIndex(5); // should == 1 (zero based index)
helper.pageIndex(2); // should == 0
helper.pageIndex(20); // should == -1
helper.pageIndex(-10); // should == -1

*/

// Solution
class PaginationHelper {
	constructor(collection, itemsPerPage) {
		this.collection = collection;
		this.itemsPerPage = itemsPerPage;
	}
	itemCount() {
		return this.collection.length;
	}
	pageCount() {
		return Math.ceil(this.collection.length / this.itemsPerPage);
	}
	pageItemCount(pageIndex) {
		const totalItems = this.collection.length;
		const totalPages = this.pageCount();

		if (pageIndex < 0 || pageIndex >= totalPages) return -1;
		if (pageIndex === totalPages - 1) {
			return totalItems % this.itemsPerPage || 0;
		}
		return this.itemsPerPage;
	}
	pageIndex(itemIndex) {
		if (itemIndex < 0 || itemIndex >= this.itemCount()) return -1;
		return Math.floor(itemIndex / this.itemsPerPage);
	}
}

// Test Codes
const strictEqual = (actual, expected) => {
	if (actual === expected) console.log('✅PASSED');
	else console.log('❌FAILED');
};

function doTest(instance, methodName, expected, ...args) {
	const actual = instance[methodName](...args);
	strictEqual(actual, expected, `for ${methodName}(${args.join(', ')})`);
}

const collection = [
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
	23, 24,
];

const helper = new PaginationHelper(collection, 10);

doTest(helper, 'pageCount', 3);
doTest(helper, 'itemCount', 24);

doTest(helper, 'pageItemCount', 10, 1);
doTest(helper, 'pageItemCount', 4, 2);
doTest(helper, 'pageItemCount', -1, 3);
doTest(helper, 'pageIndex', -1, 40);

doTest(helper, 'pageIndex', 2, 22);
doTest(helper, 'pageIndex', 0, 3);
doTest(helper, 'pageIndex', 0, 0);
doTest(helper, 'pageIndex', -1, -1);
doTest(helper, 'pageIndex', -1, -23);
doTest(helper, 'pageIndex', -1, -15);

const empty = new PaginationHelper([], 10);
doTest(empty, 'pageCount', 0);
doTest(empty, 'itemCount', 0);
doTest(empty, 'pageIndex', -1, 0);
doTest(empty, 'pageItemCount', -1, 0);
