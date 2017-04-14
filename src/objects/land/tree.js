import * as THREE from 'three'
import Tree from '../../models/Tree'

/**
 * 每次生成的数的形状都不一样
 */

class ThreeTree{
	constructor(){
		let size = 10;
		let tree = new Tree({
		    generations : 4,        // # for branch' hierarchy
		    length      : 30,      // length of root branch
		    uvLength    : 120.0,     // uv.v ratio against geometry length (recommended is generations * length)
		    radius      : 3,      // radius of root branch
		    radiusSegments : 8,     // # of radius segments for each branch geometry
		    heightSegments : 8      // # of height segments for each branch geometry
		});

		let geometry = THREE.TreeGeometry.build(tree);

		this.mesh = new THREE.Mesh(
		    geometry, 
		    new THREE.MeshPhongMaterial({}) // set any material
		);

		this.mesh.position.set(15, 80, -10); // set position
		
	}

	getMesh() {
		return this.mesh
	}
}

export default ThreeTree