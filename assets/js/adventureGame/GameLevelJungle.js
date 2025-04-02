import GameEnv from './GameEnv.js';
import Background from './Background.js';
import Player from './Player.js';
import Npc from './Npc.js';
import Enemy from './enemy.js';

class GameLevelJungle {
  constructor(path) {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    
    // Values dependent on GameEnv.create()
    let width = GameEnv.innerWidth;
    let height = GameEnv.innerHeight;

    // Background data
    const image_src_jungle = path + "/images/gamify/jungle.png"; // Make sure the path is correct
    const image_data_jungle = {
      name: 'jungle',
      greeting: "Welcome to the jungle! It is hot and lush here, but there are many adventures to be had!",
      src: image_src_jungle,
      pixels: { height: 580, width: 1038 }
    };

    // Player data for Chillguy
    const sprite_src_chillguy = path + "/images/gamify/steve.png"; // Ensure the path is correct
    const CHILLGUY_SCALE_FACTOR = 5;
    const sprite_data_chillguy = {
      id: 'player',
      greeting: "Hi I am Chill Guy, the jungle wanderer. I am looking for wisdom and adventure!",
      src: sprite_src_chillguy,
      SCALE_FACTOR: CHILLGUY_SCALE_FACTOR,
      STEP_FACTOR: 5000,
      ANIMATION_RATE: 50,
      INIT_POSITION: { x: 0, y: height - (height / CHILLGUY_SCALE_FACTOR) },
      pixels: { height: 512, width: 512 },
      orientation: { rows: 4, columns: 4 },
      down: { row: 0, start: 0, columns: 4 },
      left: { row: 1, start: 0, columns: 4 },
      right: { row: 2, start: 0, columns: 4 },
      up: { row: 3, start: 0, columns: 4 },
      hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
      keypress: { up: 87, left: 65, down: 83, right: 68 } // W, A, S, D
    };

    // NPC data for Panda
    const sprite_src_panda = path + "/images/gamify/panda.png";
    const sprite_data_panda = {
      id: 'Panda',
      greeting: "Hi, I am Panda! I'm so excited to spend some fun time with you in the jungle!",
      src: sprite_src_panda,
      SCALE_FACTOR: 5,
      ANIMATION_RATE: 50,
      pixels: { height: 316, width: 627 },
      INIT_POSITION: { x: (width / 2), y: (height * 3 / 5) },
      orientation: { rows: 3, columns: 6 },
      down: { row: 1, start: 0, columns: 6 },
      hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
      quiz: {
        title: "Panda Coding Quiz",
        questions: [
          "Which command is used to list files in a directory?\n1. ls\n2. dir\n3. list\n4. show",
          // Add more questions here...
        ]
      }
    };

    // Convert Elephant NPC to Enemy
    const sprite_src_elephant = path + "/images/gamify/elephant.png";
    const sprite_data_elephant = {
      id: 'Elephant',
      greeting: "Watch out! I'm a dangerous elephant that will push you back when you get too close!",
      src: sprite_src_elephant,
      SCALE_FACTOR: 5,
      ANIMATION_RATE: 50,
      pixels: { height: 316, width: 627 },
      INIT_POSITION: { x: (width / 4), y: (height * 11 / 20) },
      orientation: { rows: 3, columns: 6 },
      down: { row: 1, start: 0, columns: 1 },
      hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
      speed: 3,
      immune: 0
    };

    // Add other NPCs and enemies as needed...

    // List of objects definitions for this level
    this.objects = [
      { class: Background, data: image_data_jungle },
      { class: Player, data: sprite_data_chillguy },
      { class: Npc, data: sprite_data_panda },
      { class: Enemy, data: sprite_data_elephant },
      // Add more NPCs and enemies...
    ];
  }

  render() {
    // Iterate through the objects and render them on the screen
    this.objects.forEach(object => {
      const gameObject = new object.class(object.data);
      gameObject.render(); // Assuming `render` method is implemented in each class (Background, Player, etc.)
    });
  }
}

export default GameLevelJungle;
