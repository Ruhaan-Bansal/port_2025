  // To build GameLevels, each contains GameObjects from below imports
  import GameEnv from './GameEnv.js';
  import Background from './Background.js';
  import Player from './Player.js';
  import Npc from './Npc.js';

  class GameLevelJungle {
    constructor(path) {
      const header = document.querySelector('header');
      const footer = document.querySelector('footer');
      // Values dependent on GameEnv.create()
      let width = GameEnv.innerWidth;
      let height = GameEnv.innerHeight;


      // Background data
      const image_src_jungle = path + "/images/gamify/jungle.png"; // be sure to include the path
      const image_data_jungle = {
          name: 'desert',
          greeting: "Welcome to the jungle! It is hot and lush here, but there are many adventures to be had!",
          src: image_src_jungle,
          pixels: {height: 580, width: 1038}
      };


      // Player data for Chillguy
      const sprite_src_chillguy = path + "/images/gamify/steve.png"; // be sure to include the path
      const CHILLGUY_SCALE_FACTOR = 5;
      const sprite_data_chillguy = {
          id: 'Chill Guy',
          greeting: "Hi I am Chill Guy, the desert wanderer. I am looking for wisdome and adventure!",
          src: sprite_src_chillguy,
          SCALE_FACTOR: CHILLGUY_SCALE_FACTOR,
          STEP_FACTOR: 5000,
          ANIMATION_RATE: 50,
          INIT_POSITION: { x: 0, y: height - (height/CHILLGUY_SCALE_FACTOR) }, 
          pixels: {height: 512, width: 512},
          orientation: {rows: 4, columns: 4 },
          down: {row: 0, start: 0, columns: 4 },
          left: {row: 1, start: 0, columns: 4 },
          right: {row: 2, start: 0, columns: 4 },
          up: {row: 3, start: 0, columns: 4 },
          hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
          keypress: { up: 87, left: 65, down: 83, right: 68 } // W, A, S, D
      };
      


      // NPC data for Panda
      const sprite_src_panda = path + "/images/gamify/panda.png"; // be sure to include the path
      const sprite_data_panda = {
          id: 'Panda',
          greeting: "Hi, I am Panda! I’m so excited to spend some fun time with you in the jungle! Let’s explore together!",
          src: sprite_src_panda,
          SCALE_FACTOR: 5,  // Adjust this based on your scaling needs
          ANIMATION_RATE: 50,
          pixels: {height: 316, width: 627},
          INIT_POSITION: { x: (width / 2), y: (height * 3/5)},
          orientation: {rows: 3, columns: 6 },
          down: {row: 1, start: 0, columns: 6 },  // This is the stationary npc, down is default 
          hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
          // Linux command quiz
          quiz: {
            "title": "Panda Coding Quiz",
            "questions": [
              "Which command is used to list files in a directory?\n1. ls\n2. dir\n3. list\n4. show",
              "Which command is used to change directories?\n1. cd\n2. chdir\n3. changedir\n4. changedirectory",
              "Which command is used to create a new directory?\n1. mkdir\n2. newdir\n3. createdir\n4. makedir",
              "Which command is used to remove a file?\n1. rm\n2. remove\n3. delete\n4. erase",
              "Which command is used to remove a directory?\n1. rmdir\n2. removedir\n3. deletedir\n4. erasedir",
              "Which command is used to copy files?\n1. cp\n2. copy\n3. duplicate\n4. xerox",
              "Which command is used to move files?\n1. mv\n2. move\n3. transfer\n4. relocate",
              "Which command is used to view a file?\n1. cat\n2. view\n3. show\n4. display",
              "Which command is used to search for text in a file?\n1. grep\n2. search\n3. find\n4. locate",
              "Which command is used to view the contents of a file?\n1. less\n2. more\n3. view\n4. cat"
            ]
          }        
        };

        // NPC data for Elpehant
      const sprite_src_elephant = path + "/images/gamify/elephant.png"; // be sure to include the path
      const sprite_data_elephant = {
          id: 'Elephant',
          greeting: "Hi, I am the ginormous elephant! I’m so excited to spend some time with you in the jungle! Let’s explore together and have some good fun!",
          src: sprite_src_elephant,
          SCALE_FACTOR: 5,  // Adjust this based on your scaling needs
          ANIMATION_RATE: 50,
          pixels: {height: 316, width: 627},
          INIT_POSITION: { x: (width / 4), y: (height * 11/20)},
          orientation: {rows: 3, columns: 6 },
          down: {row: 1, start: 0, columns: 1 },  // This is the stationary npc, down is default 
          hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
          // Linux command quiz
          quiz: {
            "title": "Elephant HTML Coding Quiz",
            "questions": [
              "Which HTML tag is used to define the largest heading?\n1. <h1>\n2. <h6>\n3. <header>\n4. <h0>",
              "Which tag is used to create a hyperlink in HTML?\n1. <a>\n2. <link>\n3. <href>\n4. <url>",
              "Which CSS property is used to change text color?\n1. color\n2. text-color\n3. font-color\n4. bgcolor",
              "Which unit is relative to the font size of the root element in CSS?\n1. rem\n2. em\n3. px\n4. vh",
              "What is the correct way to reference an external CSS file?\n1. <link rel='stylesheet' href='styles.css'>\n2. <style src='styles.css'>\n3. <css file='styles.css'>\n4. <script href='styles.css'>",
              "How do you center an element horizontally using CSS?\n1. margin: auto;\n2. align: center;\n3. text-align: middle;\n4. float: center;",
              "Which HTML tag is used for creating an unordered list?\n1. <ul>\n2. <ol>\n3. <list>\n4. <li>",
              "What is the purpose of the <meta> tag in HTML?\n1. To provide metadatasrc: sprite_src_elephant, about the document\n2. To create a navigation menu\n3. To define the main content area\n4. To embed images"
            ]
          }        
        };

        const sprite_src_colllision = path + "/images/gamify/collision.png"; // be sure to include the path
        const sprite_data_collision = {
            id: 'Collision',
            greeting: "Hi, to move on in this game, you must answer some questions about the sport of coding. Press e to answer!",
            src: sprite_src_colllision,
            SCALE_FACTOR: 5,  // Adjust this based on your scaling needs
            ANIMATION_RATE: 50,
            pixels: {height: 128, width: 128},
            INIT_POSITION: { x: (width / 6), y: (height * 5/6)},
            orientation: {rows: 1, columns: 1 },
            down: {row: 1, start: 0, columns: 1 },  // This is the stationary npc, down is default 
            hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
            // Linux command quiz
            quiz: {
              "title": "Tennis Quiz",
              "questions": [
                "Which data structure follows Last In, First Out (LIFO) principle?\n1. Queue\n2. Stack\n3. Linked List\n4. Heap",  
                "What is the time complexity of searching an element in a balanced binary search tree (BST)?\n1. O(1)\n2. O(log n)\n3. O(n)\n4. O(n log n)",  
                "Which of the following is NOT a valid variable name in Java?\n1. _myVariable\n2. 1stVariable\n3. $money\n4. camelCase",  
                "What does the following JavaScript code output?\nconsole.log(typeof null);\n1. 'null'\n2. 'undefined'\n3. 'object'\n4. 'string'",  
                "In SQL, which command is used to remove all records from a table without deleting the table itself?\n1. DELETE\n2. DROP\n3. TRUNCATE\n4. REMOVE",  
                "What is the output of the following C code?\n#include <stdio.h>\nint main() { int x = 5; printf('%d', x++); return 0; }\n1. 4\n2. 5\n3. 6\n4. Undefined behavior",  
                "What will be the output of this Python code?\nx = [1, 2, 3]\ny = x\ny.append(4)\nprint(x)\n1. [1, 2, 3]\n2. [1, 2, 3, 4]\n3. [1, 2, 3], [1, 2, 3, 4]\n4. Error",  
                "What does the len() function return when applied to a dictionary in Python?\n1. Number of keys\n2. Number of values\n3. Number of key-value pairs\n4. The size in bytes",  
                "What will be the output of this JavaScript snippet?\nconsole.log(0 == '0');\nconsole.log(0 === '0');\n1. true, true\n2. false, false\n3. true, false\n4. false, true",  
                "Which sorting algorithm has the worst-case time complexity of O(n²)?\n1. Merge Sort\n2. Quick Sort\n3. Bubble Sort\n4. Heap Sort"  
              ]
            }        
          }; 

        // NPC data for Parrot
        const sprite_src_parrot = path + "/images/gamify/parrot.png"; // be sure to include the path
        const sprite_data_parrot = {
          id: 'Parrot',
          greeting: "Hi I am Parrot! I am the multi-colored bird who is fls in the jungle!",
          src: sprite_src_parrot,
          SCALE_FACTOR: 5,  // Adjust this based on your scaling needs
          ANIMATION_RATE: 100,
          pixels: {height: 301, width: 801},
          INIT_POSITION: { x: (width * 2/3), y: (height * 1/6)},
          orientation: {rows: 1, columns: 4 },
          down: {row: 0, start: 0, columns: 3 },  // This is the stationary npc, down is default 
          hitbox: { widthPercentage: 0.1, heightPercentage: 0.1 },
          // GitHub command quiz 
          quiz: { 
            title: "Parrot Coding Command Quiz",
            questions: [
              "Which command is used to clone a repository?\n1. git clone\n2. git fork\n3. git copy\n4. git download",
              "Which command is used to add changes to the staging area?\n1. git add\n2. git stage\n3. git commit\n4. git push",
              "Which command is used to commit changes?\n1. git commit\n2. git add\n3. git save\n4. git push",
              "Which command is used to push changes to a remote repository?\n1. git push\n2. git upload\n3. git send\n4. git commit",
              "Which command is used to pull changes from a remote repository?\n1. git pull\n2. git fetch\n3. git receive\n4. git update",
              "Which command is used to check the status of the working directory and staging area?\n1. git status\n2. git check\n3. git info\n4. git log",
              "Which command is used to create a new branch?\n1. git branch\n2. git create-branch\n3. git new-branch\n4. git checkout",
              "Which   command is used to switch to a different branch?\n1. git checkout\n2. git switch\n3. git change-branch\n4. git branch",
              "Which command is used to merge branches?\n1. git merge\n2. git combine\n3. git join\n4. git integrate",
              "Which command is used to view the commit history?\n1. git log\n2. git history\n3. git commits\n4. git show"
            ] 
          }
      }

      const sprite_src_monkey = path + "/images/gamify/monkey.png"; // be sure to include the path
      const sprite_data_monkey = {
          id: 'Monkey',
          greeting: "Hi I am Monkey, the jumping and banana eater.  I am very happy to spend some time with you eating bananas!",
          src: sprite_src_monkey,
          SCALE_FACTOR: 5,  // Adjust this based on your scaling needs
          ANIMATION_RATE: 100,
          pixels: {height: 316,width: 627},
          INIT_POSITION: { x: (width * 3 / 4), y: (height * 3 / 4)},
          orientation: {rows: 3, columns: 6 },
          down: {row: 1, start: 0, columns: 6 },  // This is the stationary npc, down is default 
          hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
          // Linux command quiz
          quiz: { 
            title: "Monkey Notebook Command Quiz",
            questions: [
              "Which shortcut is used to run a cell in Jupyter Notebook?\n1. Shift + Enter\n2. Ctrl + Enter\n3. Alt + Enter\n4. Tab + Enter",
              "Which shortcut adds a new cell above the current cell?\n1. A\n2. B\n3. C\n4. D",
              "Which shortcut adds a new cell below the current cell?\n1. B\n2. A\n3. C\n4. D",
              "Which shortcut changes a cell to Markdown format?\n1. M\n2. Y\n3. R\n4. K",
              "Which shortcut changes a cell to Code format?\n1. Y\n2. M\n3. C\n4. D",
              "Which shortcut deletes the current cell?\n1. D, D\n2. X\n3. Del\n4. Ctrl + D",
              "Which shortcut saves the current notebook?\n1. Ctrl + S\n2. Alt + S\n3. Shift + S\n4. Tab + S",
              "Which shortcut restarts the kernel?\n1. 0, 0\n2. R, R\n3. K, K\n4. Shift + R",
              "Which shortcut interrupts the kernel?\n1. I, I\n2. Ctrl + C\n3. Shift + I\n4. Alt + I",
              "Which shortcut toggles line numbers in a cell?\n1. L\n2. N\n3. T\n4. G"
            ] 
          }
        };
    

      // List of objects defnitions for this level
      this.objects = [
        { class: Background, data: image_data_jungle },
        { class: Player, data: sprite_data_chillguy },
        { class: Npc, data: sprite_data_panda },
        { class: Npc, data: sprite_data_elephant},
        { class: Npc, data: sprite_data_parrot},
        { class: Npc, data: sprite_data_monkey },
        { class: Npc, data: sprite_data_collision}
      ];
    }

  }

  export default GameLevelJungle;