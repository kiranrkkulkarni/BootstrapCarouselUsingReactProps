import React, { Component } from 'react';

class Slider extends Component {
    
    render2() {
      return this.props.children;
    }
    render() {
        //  let countImg=0;// Intialise props image count to zerp
        //  const slideimages = this.props.images.map(si => {
        //      countImg=countImg+1;// Increments image count valie based on props
        //     const active= countImg==1 ? "item active" : "item"; // Assings Active class to first Image
        //     return(<div className={active} ><img src={si} alt="sliderImage" data-animation="animated bounceInLeft"/></div>)// Appends all images to slideImages variable
        //  });
        

        // Lets count the display indiacators based on total numner of images
        const totChilds = this.props.children.length;
        const carouselIndicators="";
         for(let i=0;i<=this.props.children.length;i++)
         {
            const indicatoractive = i == 1 ? "active" : "";// Sets first indicatore as active
            const carouselIndicators = carouselIndicators + <li data-target={"#"+this.props.settings.sliderID} data-slide-to={i}  className= {indicatoractive}></li>
        
         }
        // const leftSierspors={
        //   href:`#${this,}`
        // }
        


        return (
           <div className="container">
            
  <h2>React Slider </h2>  
  {/* Add setting parameter to main div to controll the sliding of images*/}
  <div className="carousel slide" id={this.props.settings.sliderID}  data-interval={this.props.settings.datainterval} data-pause={this.props.settings.datapause}>
  
    <ol className="carousel-indicators">
      {carouselIndicators} {/*Show all indicators*/}
    </ol>

    <div className="carousel-inner">
      {this.props.children}{/*Displays  all Images*/}
    </div>
      {/*Print slider ID from props in href to slide the images onclick of arrow bottons*/}
      <a className="left carousel-control"  href={"#"+this.props.settings.sliderID} data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href={"#"+this.props.settings.sliderID} data-slide="next">
      <span className="glyphicon glyphicon-chevron-right"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>
        );
    }
}
export default Slider;