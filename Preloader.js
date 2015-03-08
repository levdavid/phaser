BunnyDefender.Preloader = function(game) {
    this.preloadBar = null;
    this.titleText = null;
    this.ready = false
};

BunnyDefender.Preloader.prototype = {
	
	preload: function () {
		this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
		this.preloadBar.anchor.setTo(0.5, 0.5);
		this.load.setPreloadSprite(this.preloadBar);
		this.titleText = this.add.image(this.world.centerX, this.world.centerY-220, 'titleimage');
		this.titleText.anchor.setTo(0.5, 0.5);
	   this.load.image('titlescreen', 'img/TitleBG.png');
        this.load.bitmapFont('eightbitwonder', 'fonts/font.png','fonts/font.fnt');
    },

	create: function () {
		this.preloadBar.cropEnabled = false;
	},

	update: function () {
	   	this.ready = true;
        this.state.start('StartMenu');
	}
};