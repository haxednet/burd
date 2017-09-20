var ignore = {
	matchUser: function( e ){
		for( var i in settings.ignore.users ) {
			if( e.match( this.userAsRegex( settings.ignore.users[i] ) ) ) {
				return true;
			}
		}
		return false;
	},
	matchRegex: function( e ){
		for( var i in settings.ignore.regex ) {
			var re = new RegExp( settings.ignore.regex[i], "ig" );
			if( e.match( re ) ){
				return true;
			}
		}
		return false;
	},
	matchBoth: function( e ){
		if( this.matchUser( e ) ) return true;
		if( this.matchRegex( e ) ) return true;
		return false;
	},
	userAsRegex: function( e ){
		var returnStr = "";
		for( var i in e ) {
			returnStr += e[i].replace( /[^a-zA-Z\d\s\*:]/, "\\" + e[i] );
		}
		returnStr = returnStr.replace( /\s/g, "\\s" );
		returnStr = returnStr.replace( /\*/g, "(.*)" );
		return new RegExp(returnStr, "ig");
	}
}