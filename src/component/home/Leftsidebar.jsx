/** @format */

import React from "react";
import "./Leftsidebar.css";
import khan from "../../assite/images/khan.jpg";
import Ellipse1 from "../../Images/Ellipse1.png";

const Leftsidebar = () => {
	return (
		<div className='Leftsidebar-main'>
			
			{/* Copmpass */}
			<div className='Leftsidebar-icon-top-box'>
				<div className='Leftsidebar-icon-box'>
					<div className='Leftsidebar-icon-top-circle-top'>
					<img src={Ellipse1} alt='Ellipse1' />
					</div>
				</div>
				<br />
				{/* star  */}
				<div className='Leftsidebar-icon-box'>
					<div className='Leftsidebar-icon-top-circle-top'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							fill='currentColor'
							class='bi bi-star-fill'
							viewBox='0 0 16 16'>
							<path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
						</svg>
					</div>
				</div>
				<br />
				{/* Graphup arrow */}
				<div className='Leftsidebar-icon-box'>
					<div className='Leftsidebar-icon-top-circle-top'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							fill='currentColor'
							class='bi bi-graph-up-arrow'
							viewBox='0 0 16 16'>
							<path
								fill-rule='evenodd'
								d='M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z'
							/>
						</svg>
					</div>
				</div>
				<br />
				{/* Globe */}
				<div className='Leftsidebar-icon-box'>
					<div className='Leftsidebar-icon-top-circle-top'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							fill='currentColor'
							class='bi bi-globe-asia-australia'
							viewBox='0 0 16 16'>
							<path d='m10.495 6.92 1.278-.619a.483.483 0 0 0 .126-.782c-.252-.244-.682-.139-.932.107-.23.226-.513.373-.816.53l-.102.054c-.338.178-.264.626.1.736a.476.476 0 0 0 .346-.027ZM7.741 9.808V9.78a.413.413 0 1 1 .783.183l-.22.443a.602.602 0 0 1-.12.167l-.193.185a.36.36 0 1 1-.5-.516l.112-.108a.453.453 0 0 0 .138-.326ZM5.672 12.5l.482.233A.386.386 0 1 0 6.32 12h-.416a.702.702 0 0 1-.419-.139l-.277-.206a.302.302 0 1 0-.298.52l.761.325Z' />
							<path d='M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM1.612 10.867l.756-1.288a1 1 0 0 1 1.545-.225l1.074 1.005a.986.986 0 0 0 1.36-.011l.038-.037a.882.882 0 0 0 .26-.755c-.075-.548.37-1.033.92-1.099.728-.086 1.587-.324 1.728-.957.086-.386-.114-.83-.361-1.2-.207-.312 0-.8.374-.8.123 0 .24-.055.318-.15l.393-.474c.196-.237.491-.368.797-.403.554-.064 1.407-.277 1.583-.973.098-.391-.192-.634-.484-.88-.254-.212-.51-.426-.515-.741a6.998 6.998 0 0 1 3.425 7.692 1.015 1.015 0 0 0-.087-.063l-.316-.204a1 1 0 0 0-.977-.06l-.169.082a1 1 0 0 1-.741.051l-1.021-.329A1 1 0 0 0 11.205 9h-.165a1 1 0 0 0-.945.674l-.172.499a1 1 0 0 1-.404.514l-.802.518a1 1 0 0 0-.458.84v.455a1 1 0 0 0 1 1h.257a1 1 0 0 1 .542.16l.762.49a.998.998 0 0 0 .283.126 7.001 7.001 0 0 1-9.49-3.409Z' />
						</svg>
					</div>
				</div>
				<br />
				{/* Building */}
				<div className='Leftsidebar-icon-box'>
					<div className='Leftsidebar-icon-top-circle-top'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							fill='currentColor'
							class='bi bi-buildings'
							viewBox='0 0 16 16'>
							<path d='M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z' />
							<path d='M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z' />
						</svg>
					</div>
				</div>
			</div>
			<div className='Leftsidebar-icon-bottom-box'>
				<div className='Leftsidebar-icon-box'>
					<div className='Leftsidebar-icon-top-circle'>
					<img src={khan} alt='khan' />
					</div>
				</div>
				<div className='Leftsidebar-icon-box'>
					<div className='Leftsidebar-icon-top-circle'>
						<img src={khan} alt='khan' />
					</div>
				</div>
				<div className='Leftsidebar-icon-box'>
					<div className='Leftsidebar-icon-top-circle'>
					<img src={khan} alt='khan' />
					</div>
				</div>
				<div className='Leftsidebar-icon-box'>
					<div className='Leftsidebar-icon-top-circle'>
					<img src={khan} alt='khan' />
					</div>
				</div>
				<div className='Leftsidebar-icon-box'>
					<div className='Leftsidebar-icon-top-circle'>
					<img src={khan} alt='khan' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Leftsidebar;
