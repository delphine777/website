import React, { Component } from 'react'

export default class Blog extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-blog" data-section="blog">
			<div className="colorlib-narrow-content">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
					<span className="heading-meta">Share</span>
					<h2 className="colorlib-heading">What makes my life</h2>
					<p>I can play two instruments. I like traveling, reading and cosmetics. </p>
					<span>I am also a crazy food lover! </span>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="blog.html" className="blog-img"><img src="images/blog-1.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small>April, 2019 </small> | <small> Hawaii </small> | <small> <i className="icon-bubble3" /> 4</small></span>
							<h3><a href="blog.html">Hawaii Beach</a></h3>
							<p>I accidentally met a wild sea turtle bathing in the sunshine and took this photo with Mr. Turtle.</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
					<div className="blog-entry">
						<a href="blog.html" className="blog-img"><img src="images/IMG_5244.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small>December, 2018 </small> | <small> The grand Canyon</small> | <small> <i className="icon-bubble3" /> 2</small></span>
							<h3><a href="blog.html">Road trip</a></h3>
							<p>The beautiful sunset at the grand canyon national park.</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="blog.html" className="blog-img"><img src="images/img_1017.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small>June, 2017 </small> | <small> Wuhan </small> | <small> <i className="icon-bubble3" /> 7</small></span>
							<h3><a href="blog.html">Graduation</a></h3>
							<p>I graduated!!! I will miss you all!!</p>
						</div>
					</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 animate-box">
					<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
					</div>
				</div>
			</div>
			</section>
      </div>
    )
  }
}
