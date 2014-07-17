var args = arguments[0] || {};

/**
  * /////////////////// /////////////////// /////////////////// ///////////////////
  * * LOCAL variables
  * /////////////////// /////////////////// /////////////////// ///////////////////
  */
var dataitems = [];
var json = {
	"glossary" : [{
		"word" : "Amazon",
		"meaning" : "This is meaning of word Amazon",
	}, {
		"word" : "Goolge",
		"meaning" : "Lorem ipsum dolor sit amet, This is meaning of word."
	}, {
		"word" : "Facebook",
		"meaning" : "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}, {
		"word" : "Twitter",
		"meaning" : "Lorem ipsum dolor sit amet,  sunt in culpa qui officia deserunt mollit anim id est laborum."
	}, {
		"word" : "Linked in",
		"meaning" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}, {
		"word" : "Core data",
		"meaning" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}, {
		"word" : "Mazna",
		"meaning" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}, {
		"word" : "Zattterdag",
		"meaning" : "This is meaning of word 8",
	}, {
		"word" : "Raod star",
		"meaning" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}, {
		"word" : "Jayesh",
		"meaning" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}, {
		"word" : "NickNock",
		"meaning" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}, {
		"word" : "Diago Garcia",
		"meaning" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}, {
		"word" : "Water Cooler",
		"meaning" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}, {
		"word" : "Hem Radio",
		"meaning" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}, {
		"word" : "Osaka",
		"meaning" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}, {
		"word" : "Den heg",
		"meaning" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}, {
		"word" : "Doodle",
		"meaning" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}, {
		"word" : "Koop",
		"meaning" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}, {
		"word" : "Whoor",
		"meaning" : "Lorem ipsum dolor sit amet."
	}]
};

/**
  * /////////////////// /////////////////// /////////////////// ///////////////////
  * * SEARCH VIEW
  * /////////////////// /////////////////// /////////////////// ///////////////////
  */

if (OS_IOS) {

	if (Titanium.Platform.osname == 'ipad') {
		var listSearch = Titanium.UI.createSearchBar({
			barColor : Alloy.CFG.app_color.color_title,
			height : 50,
			top : 0,
			hintText : 'Search',
			showCancel : true,

		});
	} else {
		var listSearch = Titanium.UI.createSearchBar({
			barColor : Alloy.CFG.app_color.color_title,
			height : 50,
			top : 0,
			hintText : 'Search',
			showCancel : true
		});
	}
} else {
	var listSearch = Titanium.UI.createSearchBar({
		barColor : Alloy.CFG.app_color.color_title,
		height : 50,
		top : 0,
		hintText : 'Search',
		softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS,
		showCancel : true
	});
	listSearch.addEventListener('click', function(e) {
		listSearch.softKeyboardOnFocus = Ti.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS;
	});
}
//$.glossary_listview.searchView = listSearch;

if (OS_IOS) {
	$.win_glossary.add(listSearch);
} else {
	$.main_view_android.add(listSearch);
}

listSearch.addEventListener('return', function(e) {
	listSearch.blur();
});
listSearch.addEventListener('cancel', function(e) {
	listSearch.blur();

	$.glossary_listview.sections[0].items = dataitems;
});

/**
  * /////////////////// /////////////////// /////////////////// ///////////////////
  * * NAVIGAGTION ANDROID
  * /////////////////// /////////////////// /////////////////// ///////////////////
  */

if (OS_ANDROID) {
	$.navBar.rightBtn.backgroundImage = '/images/drawer_icon.png';
	$.navBar.rightBtn.addEventListener('click', function(e) {
		Alloy.Globals.ToggleRight();
	});
	//$.navBar.rightBtn.visible = false;
	$.navBar.leftBtn.visible = false;
	$.navBar.win_title.text = "Glossary";
}

/**
  * /////////////////// /////////////////// /////////////////// ///////////////////
  * * FILL LISTVIEW
  * /////////////////// /////////////////// /////////////////// ///////////////////
  */

var get_words = function() {
	dataitems = [];
	var db = Titanium.Database.install('/city.db', 'city');

	for (var i = 0; i < json.glossary.length; i++) {

		var sel = db.execute("select * from glossary where word=?", json.glossary[i].word);

		if (sel.getRowCount() > 0) {

		} else {
			db.execute("insert into glossary(word,meaning)values(?,?)", json.glossary[i].word, json.glossary[i].meaning);
		}

		sel.close();
		dataitems.push({
			word_data : json.glossary[i].word,
			meaning_data : json.glossary[i].meaning,
			lbl : {
				text : json.glossary[i].word
			},
			lbl_desc : {
				text : ''
			},
			image_right : {
				image : '/images/arrow_icon.png'
			},
			image_right_down : {
				image : '',
			},
			bottom_view_gray : {
				backgroundColor : Alloy.CFG.app_color.color_gray
			}
		});
	}

	db.close();

	//Ti.API.info('------dataitems:' + dataitems);

	$.glossary_listview.sections[0].items = dataitems;

};
get_words();

listSearch.addEventListener('change', function(e) {
	try {
		var data2 = [];
		var db = Titanium.Database.install('/city.db', 'city');
		var cal_data2 = db.execute('SELECT * FROM glossary WHERE word LIKE "%' + listSearch.value + '%"');
		Ti.API.info('=----------cal_data.getRowCount():' + cal_data2.getRowCount());
		if (cal_data2.getRowCount() > 0) {
			while (cal_data2.isValidRow()) {
				Ti.API.info('=----------word:' + cal_data2.fieldByName('word'));
				Ti.API.info('=----------meaning:' + cal_data2.fieldByName('meaning'));
				data2.push({
					word_data : cal_data2.fieldByName('word'),
					meaning_data : cal_data2.fieldByName('meaning'),
					lbl : {
						text : cal_data2.fieldByName('word')
					},
					lbl_desc : {
						text : ''
					},
					image_right : {
						image : '/images/arrow_icon.png'
					},
					image_right_down : {
						image : '',
					},
					bottom_view_gray : {
						backgroundColor : Alloy.CFG.app_color.color_gray
					}
				});
				Ti.API.info('---next -----');
				cal_data2.next();
			}
			cal_data2.close();
			db.close();
			$.glossary_listview.setItems = [];
			Ti.API.info('===========data1 : ' + data2);
			Ti.API.info('===========data2  : ' + JSON.stringify(data2));
			Ti.API.info('----- ok-----');
			$.glossary_listview.sections[0].items = data2;
		}
	} catch(ex) {
		Ti.API.info('-ex:' + ex);
	}
});

/**
  * /////////////////// /////////////////// /////////////////// ///////////////////
  * LISTVIEW MRAKER EVENT
  * /////////////////// /////////////////// /////////////////// ///////////////////
  */
$.glossary_listview.addEventListener('marker', function(e) {

});
/**
  * /////////////////// /////////////////// /////////////////// ///////////////////
  * LISTVIEW ITEMCLICK
  * /////////////////// /////////////////// /////////////////// ///////////////////
  */
$.glossary_listview.addEventListener('itemclick', function(e) {

	listSearch.blur();

	Ti.API.info('-------- click here');

	var item = e.section.getItemAt(e.itemIndex);
	var theSection = e.section;
	var pos = e.itemIndex;

	if (item.lbl_desc.cust_data == true) {
		return;
	}

	if (item.image_right_down.image == "") {
		Ti.API.info('-------- click here2');
		var insarr = [];
		insarr.push({
			lbl : {
				text : ''
			},
			lbl_desc : {
				text : item.meaning_data,
				cust_data : true
			},
			image_right : {
				image : null
			},
			image_right_down : {
				image : '/images/arrow_downt.png'
			},
			bottom_view_gray : {
				backgroundColor : 'transparent'
			}
		});
		if (OS_IOS) {
			Ti.API.info('---insert');
			theSection.insertItemsAt(pos + 1, insarr, {
				animationStyle : Titanium.UI.iPhone.RowAnimationStyle.BOTTOM
			});
		} else {
			theSection.insertItemsAt(pos + 1, insarr);
		}

		item.image_right_down.image = '/images/arrow_icon.png';
		item.bottom_view_gray.backgroundColor = 'transparent';
		theSection.updateItemAt(pos, item);

	} else {
		Ti.API.info('-------- deleteItemsAt');
		if (OS_IOS) {
			theSection.deleteItemsAt(pos + 1, 1, {
				animationStyle : Titanium.UI.iPhone.RowAnimationStyle.LEFT
			});
		} else {
			theSection.deleteItemsAt(pos + 1, 1);
		}
		item.image_right_down.image = "";
		item.bottom_view_gray.backgroundColor = Alloy.CFG.app_color.color_gray;
		theSection.updateItemAt(pos, item);
	}
});
/**
  * /////////////////// /////////////////// /////////////////// ///////////////////
  * WINDOWS LEVEL EVENTS
  * /////////////////// /////////////////// /////////////////// ///////////////////
  */
$.win_glossary.addEventListener("close", function() {
	$.destroy();
});
