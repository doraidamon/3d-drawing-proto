import * as THREE from "three";

export class Canvas {
    private scene: THREE.Scene
    private camera: THREE.PerspectiveCamera
    private renderer: THREE.WebGLRenderer

    constructor() {
        this.scene = new THREE.Scene
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        this.renderer = new THREE.WebGLRenderer()

        this.renderer.setSize(window.innerWidth, window.innerHeight)
        document.body.appendChild(this.renderer.domElement)
    }
    
    private tick() {
        requestAnimationFrame(this.tick)

        this.renderer.render(this.scene, this.camera)
    }

    run() {
        this.tick()
    }
}

export function runCanvas() {
    let canvas = new Canvas
    canvas.run()
}
