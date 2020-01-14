import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
						<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/proj-1.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">AI CAM</a></h3>
											<span>To be updated soon!</span>
										

												<span><a href="#"><i className="icon-github" /></a></span>
										
											
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/proj-2.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://youtu.be/1kdfk80YAVQ">CheXplain</a></h3>
											<span>Designed an AI embedded system to help non-computing physicians to understand how AI makes decisions in medical image processing and assist physicians to make diagnosis. Conducted several user studies to understand medical professionals' needs for AI's explanations and implemented some functions with DenseNet121 and real-time saliency map algorithm.</span>
											<span><a href="#"><i className="icon-github" /></a></span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/proj-3.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">DOCi</a></h3>
											<span>This method enables better tissue characterization by utilizing wide-field signal integration, eliminating constraints of uniform illumination, and reducing time-intensive computations compared with other fluorescence lifetime imaging technique. Applied Scale Invariant Feature Transform (SIFT) algorithm to achieve auto-motion correction and unsupervised ML algorithm K-Means in python to classify different tissues to help detect cancer.</span>
											<span><a href="#"><i className="icon-github" /></a></span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/proj-4.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Underwater Localization</a></h3>
											<span>Established an experimental environment, implemented single scatter model for raw image pre-processing and built a CNN-based regression model to simulate the localization in underwater environment using polarization, which potentially can be applied in underwater navigation. The accuracy reached 98% at some positions.</span>
												<span><a href="#"><i className="icon-github" /></a></span>

										</div>
									</div>
								</div>
							</div>
							
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/proj-5.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">EEG Data Classification</a></h3>
											<span>Preprocessed the raw EEG data. Built CNN, RNN, C-RNN, and R-CNN models to handle the task of EEG data classification and evaluated the performance of each model. Received around 70% accuracy in the end. </span>
							
												<span><a href="#"><i className="icon-github" /></a></span>
											
											
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/proj-6.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Stock Prediction</a></h3>
											<span>Built a LSTM model and tuned the GridSearchCV class parameters based on the stock price of Google from 2012-2016 to predict the upward and downward trends of Google's stock price. Visulized the predicted results and compared it with actually stock price fluctuation, which is surprisingly similar to the predicted one.</span>
											<span><a href="#"><i className="icon-github" /></a></span>
										</div>
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
