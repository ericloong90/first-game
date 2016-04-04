// We create our only state, called mainState

var mainState = {

	// We define the 3 default Phaser functions

	preload: function () {
		// This function will be executed at the beginning
		// That's where we load the game assets

		game.load.image('player', 'assets/player.png');
		game.load.image('wallV', 'assets/wallVertical.png');
		game.load.image('wallH', 'assets/wallHorizontal.png');
	},

	create: function () {
		// This function is called after the preload function
		// Here, we set up the game, isplay sprites, etc

		game.stage.backgroundColor = '3498db';
		// This specifies the system to use ARCADE as our physics engine
		game.physics.startSystem(Phaser.Physics.ARCADE);
		// Create a local variable
		this.player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
		// Center the sprite
		this.player.anchor.setTo(0.5, 0.5);
		// Add arcade physics to the player sprite
		game.physics.arcade.enable(this.player);
		// Add vertical gravity to the player
		this.player.body.gravity.y = 500;

		// This line adds the keyboard arrow functionality to the game
		this.cursor = game.input.keyboard.createCursorKeys();

		// Create a new group
		this.walls = game.add.group();

		// Add arcade physics to the whole group
		this.walls.enableBody = true;

		// Create two walls in the group
		game.add.sprite(0, 0, 'wallV', 0, this.walls); // Left wall
		game.add.sprite(480, 0, 'wallV', 0, this.walls); // Right wall

		game.add.sprite(0, 0, 'wallH', 0, this.walls);
		game.add.sprite(300, 0, 'wallH', 0, this.walls);
		game.add.sprite(0, 320, 'wallH', 0, this.walls);
		game.add.sprite(320, 320, 'wallH', 0, this.walls);

		game.add.sprite(-100, 160, 'wallH', 0, this.walls);
		game.add.sprite(400, 160, 'wallH', 0, this.walls);

		var middleTop = game.add.sprite(100, 80, 'wallH', 0, this.walls);
		middleTop.scale.setTo(1.5, 1);

		var middleBottom = game.add.sprite(100, 240, 'wallH', 0, this.walls);
		middleBottom.scale.setTo(1.5, 1);

		// Set all the walls to be immovable
		this.walls.setAll('body.immovable', true);


	},

	update: function () {
		// This function is called 60 times per second
		// It contains the game's logic

		this.movePlayer();
	},

	// And here we will later add some of our own functions

	// This function is used to move player in the game
	movePlayer: function () {
		// if the left arrow key is pressed
		if (this.cursor.left.isDown) {
			// Move player to the left
			this.player.body.velocity.x = -200;
		}

		// if the right arrow key is pressed
		else if (this.cursor.right.isDown) {
			// Move player to the right
			this.player.body.velocity.x = 200;
		}

		else {
			this.player.body.velocity.x = 0;
		}

		// if the up arrow key is pressed and the player is touching the ground
		if (this.cursor.up.isDown && this.player.body.touching.down) {
			// Move the player upward/jump
			his.player.boy.velocity.y = -320;
		}
	},

	createWorld: function() {
		
	}
};

var game = new Phaser.Game(500, 340, Phaser.AUTO, 'gameDiv');
game.state.add('main', mainState);

game.state.start('main');

