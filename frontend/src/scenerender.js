import *as THREE from 'three'

//canvas 
const canvas = document.querySelector('canvas.webgl')

//scene
const scene = new THREE.Scene()

//object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color:0Xff0000 })
const mesh = new THREE.Mesh(geometry, material)
// mesh.position.x =0.7
// mesh.position.x= -0.6
// mesh.position.y=-1
scene.add(mesh)


//sizes
const sizes = {
    width:700,
    height: 500
}


//camera
const camera =new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z =3

scene.add(camera)

mesh.position.set( 0.7, -0.6, 1 )
mesh.position.normalize()
console.log(mesh.position.length());

//renderer
const renderer = new THREE.WebGLRenderer({
    canvas:canvas
})

renderer.setSize(sizes.width,sizes.height)

renderer.render(scene, camera)