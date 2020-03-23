import React, {Fragment} from 'react'
import Contacts from '../contacts/Contacts'
import ContactForm from '../contacts/contactForm/ContactForm'
import ContactFilter from '../contacts/contactFilter/ContactFilter'


const Home = props=>{
	return(
		<Fragment>
			<div className="grid-2">
				<div>
					<ContactFilter/>
					<Contacts/>
				</div>
				<div>
					<div className="card bg-primary text-white">
						<ContactForm/>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default Home