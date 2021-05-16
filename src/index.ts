import * as game from "./core/game"
import * as webgl from "./core/webgl"
import * as sketch from "./app/sketch"

if (webgl.isWebGLAvailable()) setup().then(update)
else {
  const warning = webgl.getWebGLErrorMessage()
  document.getElementById("container").appendChild(warning)
}

async function setup() {
  game.renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(game.renderer.domElement)

  await sketch.setup()
}

function update() {
  sketch.update().catch(console.error)
  requestAnimationFrame(update)
}
