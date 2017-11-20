cc.Class({
	extends: cc.Component,

    onLoad: function () {
        //Add this line to onLoad
        this.init();
    },

    init: function() {
        sdkbox.PluginFacebook.setListener({
            onLogin: function(isLogin, msg) {

            }
        });
    },

    login: function() {
        sdkbox.PluginFacebook.login();
    }
});
