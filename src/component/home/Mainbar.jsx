/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "./Mainbar.css";
import pic from '../../assite/images/city-4.jpg'
import tic from '../../assite/images/right-tic.jpg'

const Mainbar = () => {
	return (
		<div className='Mainbar-main'>
			<div className='sub-navbar'>
				<div className='Mainbar-main-sub-navbar-products'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='16'
						fill='currentColor'
						class='bi bi-basket3-fill'
						viewBox='0 0 16 16'>
						<path d='M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z' />
					</svg>
					<Link to={"/addpolicy"}>Products</Link>
				</div>

				<div className='Mainbar-main-sub-navbar-links'>
					<Link to={"/addpolicy"}>Active</Link>
					<Link to={"/addpolicy"}>Draft</Link>
					<Link to={"/addpolicy"}>Assembely</Link>
				</div>
				<div className='Mainbar-main-sub-navbar-button'>
					<button>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							fill='currentColor'
							class='bi bi-plus-circle'
							viewBox='0 0 16 16'>
							<path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
							<path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z' />
						</svg>
						Add Products
					</button>
				</div>
			</div>
			<div className='sub-navbar-filterbar-main'>
				<div className="sub-navbar-filterbar-left">
					<input type='checkbox' /> <span>Select All</span>
				</div>
				<div className='sub-navbar-filterbar'>
					<button>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							fill='currentColor'
							class='bi bi-filter'
							viewBox='0 0 16 16'>
							<path d='M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z' />
						</svg>
						<span>Filter</span>
						
					</button>
					<button>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							fill='currentColor'
							class='bi bi-search'
							viewBox='0 0 16 16'>
							<path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
						</svg>
						<span>Search</span>
						
					</button>
					<button>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							fill='currentColor'
							class='bi bi-pencil'
							viewBox='0 0 16 16'>
							<path d='M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z' />
						</svg>
						<span>Edit</span>
						
					</button>
					<button>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							fill='currentColor'
							class='bi bi-trash'
							viewBox='0 0 16 16'>
							<path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z' />
							<path
								fill-rule='evenodd'
								d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'
							/>
						</svg>
						<span>Delete</span>
						
					</button>
				</div>
				<div className='sub-navbar-filterbar-right'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='16'
						fill='currentColor'
						class='bi bi-justify'
						viewBox='0 0 16 16'>
						<path
							fill-rule='evenodd'
							d='M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z'
						/>
					</svg>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='16'
						fill='currentColor'
						class='bi bi-grid-3x2-gap-fill'
						viewBox='0 0 16 16'>
						<path d='M1 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V4zM1 9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V9zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V9z' />
					</svg>
				</div>
			</div>

      <div className="Mainbar-main-products-box">
        <div className="Mainbar-main-product">
          <input type='checkbox'  className="checkbox-round" />
          <img src={pic} />
          <p>Product name</p>
          <button>&600</button>
        </div>

        <div className="Mainbar-main-product">
		<input type='checkbox'  className="checkbox-round" />
          <img src={pic} />
          <p>Product name</p>
          <button>&600</button>
        </div>

        <div className="Mainbar-main-product">
		<input type='checkbox'  className="checkbox-round" />
          <img src={pic} />
          <p>Product name</p>
          <button>&600</button>
        </div>

        <div className="Mainbar-main-product">
		<input type='checkbox'  className="checkbox-round" />
          <img src={pic} />
          <p>Product name</p>
          <button>&600</button>
        </div>

        <div className="Mainbar-main-product">
		<input type='checkbox'  className="checkbox-round" />
          <img src={pic} />
          <p>Product name</p>
          <button>&600</button>
        </div>

        <div className="Mainbar-main-product">
		<input type='checkbox'  className="checkbox-round" />
          <img src={pic} />
          <p>Product name</p>
          <button>&600</button>
        </div>

        <div className="Mainbar-main-product">
        <input type='checkbox'  className="checkbox-round" />
          <img src={pic} />
          <p>Product name</p>
          <button>&600</button>
        </div>

        <div className="Mainbar-main-product">
		<input type='checkbox'  className="checkbox-round" />
          <img src={pic} />
          <p>Product name</p>
          <button>&600</button>
        </div>

        <div className="Mainbar-main-product">
		<input type='checkbox'  className="checkbox-round" />
          <img src={pic} />
          <p>Product name</p>
          <button>&600</button>
        </div>

        <div className="Mainbar-main-product">
		<input type='checkbox'  className="checkbox-round" />
          <img src={pic} />
          <p>Product name</p>
          <button>&600</button>
        </div>

        <div className="Mainbar-main-product">
		<input type='checkbox'  className="checkbox-round" />
          <img src={pic} />
          <p>Product name</p>
          <button>&600</button>
        </div>

        <div className="Mainbar-main-product">
		<input type='checkbox'  className="checkbox-round" />
          <img src={pic} />
          <p>Product name</p>
          <button>&600</button>
        </div>

       
      </div>
		</div>
	);
};

export default Mainbar;
