
import { memo } from 'react';

function Contact() {
	console.log('CONTACT RENDER COMPONENT')
  
	return (<h1>Contact</h1>)
}

export default memo(Contact)