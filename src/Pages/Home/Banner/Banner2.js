import React from 'react';

const Banner2 = () => {
	return (
		<div className="carousel mt-20 rounded-xl mx-auto w-3/4">
		<div id="slide1" className="carousel-item relative w-full">
		  <img src="https://images.unsplash.com/photo-1513267048331-5611cad62e41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="w-full" alt='' />
		  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
			<a href="#slide4" className="btn btn-circle">❮</a> 
			<a href="#slide2" className="btn btn-circle">❯</a>
		  </div>
		</div> 
		<div id="slide2" className="carousel-item relative w-full">
		  <img src="https://images.unsplash.com/photo-1597528662465-55ece5734101?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" className="w-full" alt='' />
		  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
			<a href="#slide1" className="btn btn-circle">❮</a> 
			<a href="#slide3" className="btn btn-circle">❯</a>
		  </div>
		</div> 
		<div id="slide3" className="carousel-item relative w-full">
		  <img src="https://images.unsplash.com/photo-1518481335010-06c24f4626de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="w-full" alt=''/>
		  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
			<a href="#slide2" className="btn btn-circle">❮</a> 
			<a href="#slide4" className="btn btn-circle">❯</a>
		  </div>
		</div> 
		<div id="slide4" className="carousel-item relative w-full">
		  <img src="https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="w-full" alt='' />
		  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
			<a href="#slide3" className="btn btn-circle">❮</a> 
			<a href="#slide1" className="btn btn-circle">❯</a>
		  </div>
		</div>
	  </div>
	);
};

export default Banner2;