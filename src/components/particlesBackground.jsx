import Particles from "react-tsparticles";
import particlesConfig from "./config/ParticlesConfig"
import { loadFull } from "tsparticles";

import React from 'react'

function ParticlesBackground() {
  return (
	<Particles params={particlesConfig}>

	</Particles>
  )
}

export default ParticlesBackground