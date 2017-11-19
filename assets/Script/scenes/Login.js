cc.Class({
    extends: cc.Component,

    properties: {
        btn_fb : cc.Sprite
    },

    // use this for initialization
    onLoad: function () {
        this.btn_fb.node.setPosition(0,0)
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
