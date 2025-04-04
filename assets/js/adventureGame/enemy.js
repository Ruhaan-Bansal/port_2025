import Character from './Character.js';
import Player from './Player.js';

class Enemy extends Character {
    constructor(data = null, gameEnv = null) {
        super(data, gameEnv);
        this.playerDestroyed = false; // Tracks if the player has been "killed"
        this.speed = 3; // Default speed
        this.immune = 0; // Immunity tracker
    }

    // Overrides the update method to handle collision detection.
    update() {
        // Start by drawing the object
        this.draw();

        // Check if the enemy collides with the player
        if (!this.playerDestroyed && this.collisionChecks()) {
            this.handleCollisionEvent();
        }
    }

    // Checks if the Enemy collides with the Player.
    // Returns true if a collision is detected, otherwise false.
    collisionChecks() {
        for (const gameObj of this.gameEnv.gameObjects) {
            if (gameObj instanceof Player) {
                this.isCollision(gameObj);
                if (this.collisionData.hit) {
                    return true;
                }
            }
        }
        return false;
    }

    // Handles what happens when the player collides with the enemy.
    handleCollisionEvent() {
        console.log("Player collided with the Enemy.");
        
        if (this.collisionData.touchPoints.other.id === "player") {
            this.speed = 0;  // Stop movement
            setTimeout(() => {
                this.speed = 3;  // Restore original speed after delay
            }, 3000);  // Time in milliseconds
        }
        
        if (this.collisionData.touchPoints.other.id === "player") {
            if (this.collisionData.touchPoints.other.left && this.immune == 0) {
                this.speed = -this.speed;  // Reverse speed
                this.x += 10;  // Move enemy back slightly
            }
        }
        
        // Original behavior - only if we still need it
        // If not needed, these lines can be removed
        // this.playerDestroyed = true; // Mark the player as "dead"
        // this.gameEnv.gameControl.currentLevel.continue = false; // Restart the level
    }
}

export default Enemy;