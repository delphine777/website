import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am a graduate student from UCLA. My major is Electrical and Computer Engineering and my research interest is Human-Computer Interaction, especially human-centered AI. I love exploring the latest AI technologies and the most advanced products. </p>
                    <p>I am eagerly looking for a SWE/UX researcher position in industry. Feel free contact me if you have any questions for me or would like to communicate research projects with me ;)</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I did?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Artificial Intelligence </h3>
                    <p>I am interested in AI development, especially medical AI. I had experience building deep learning models for multiple tasks and implement algorithms for explainable AI. I am also familiar with TensorFlow and PyTorch. </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-user" />
                </span>
                <div className="desc">
                    <h3>UX Research</h3>
                    <p>As having HCI background, I am experienced with conducting user-center activities such as survey, interview, and co-design to understand user. I can also do simple UI design with Figma.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-camera" />
                </span>
                <div className="desc">
                    <h3>Image processing</h3>
                    <p>I have optical background and interested in image processing and camera. I had experience in fluorescence medical imaging and is curious about lastest development in related field.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
