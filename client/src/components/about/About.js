import React from 'react'

const About = props=>{
	return(
		<div className="card">
			<p className="text-center text-primary"><i className="far fa-address-book fa-4x"/> <span style={{fontSize:"3rem"}}>Contact Safe</span></p>
			<h1 className="my-1">About this app</h1>
			<p className="my-1">As the app name suggests, the app allows users to login and store their contacts.
			By doing this, users have the ability to retrieve their contacts at any <span className="text-primary">time</span>, any <span className="text-primary">place</span>, with any <span className="text-primary">device</span>, as long as they have internet connection services</p>
			<pre><strong>Version</strong> : 0.1.0</pre>
		</div>
	)
}

export default About