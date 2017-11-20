cc.Class({
	extends: cc.Component,

    onLoad: function () {
        //Add this line to onLoad
        this.init();
    },

    init: function() {
	    if(cc.sys.os === cc.sys.OS_IOS || cc.sys.os === cc.sys.OS_ANDROID){
            sdkbox.PluginFacebook.setListener({
                onLogin: function(isLogin, msg) {
                    cc.log("yyyy")
                }
            });
        }
    },

    login: function() {
        if(cc.sys.os === cc.sys.OS_IOS || cc.sys.os === cc.sys.OS_ANDROID){
            sdkbox.PluginFacebook.login();
        }

        cc.log("xxxxxx")
    }
});
