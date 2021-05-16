import * as THREE from "three"
import * as game from "../core/game"

let hello: THREE.TextGeometry

/**
 * After resources is loaded, setup your Game
 */
export async function setup() {
  const loader = new THREE.FontLoader()

  loader.load("assets/Roboto-Regular.json", function (font) {
    hello = new THREE.TextGeometry("Hello World", {
      font: font,
      size: 80,
      height: 5,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 10,
      bevelSize: 8,
      bevelOffset: 0,
      bevelSegments: 5,
    })
  })
}

/**
 * Called for each Game tick
 */
export async function update() {
  const oscillation = Math.sin(Date.now() / 100) * 10
  //hello.position.set(game.getWidth() / 2, game.getHeight() / 2 + oscillation)
}
