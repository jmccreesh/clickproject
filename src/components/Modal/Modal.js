import React from 'react';
import './Modal.css';



function Modal() {
	return (
		<div className="instructionsModal">
			<div className="modal-content">
				<h1 className="center">Sports Logo Memory Game</h1>
				<h4 className="center">Game Instructions</h4>
				<ol>
					<li>Click Let's See how smart you are below to start the game.</li>
					<li>Click on an image</li>
					<li>Every time you click an image, the images get rearranged.</li>
					<li>If you select the same image twice...You Lose!</li>
					<li>Click all 16 images without repeating...You Win!</li>
				</ol>
			</div>
			<br />
			<div className="modal-footer white-text center">
				<a className="waves-effect waves-light btn" onClick={() => {
					document.getElementsByClassName('instructionsModal')[0].classList.add('hide');
				}}>Let's See How Smart you are...</a>
			</div>	
		</div>
	)
}





export default Modal;