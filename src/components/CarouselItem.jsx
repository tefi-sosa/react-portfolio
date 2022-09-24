import Stack from 'react-bootstrap/Stack'  
import Carousel from 'react-bootstrap/Carousel';
import wanderlust from './images/wanderlust.png';

// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function CarouselItem() {

  const handleClickWebsite = () => {
    window.open("https://foundations26-capstone-project.herokuapp.com/");
  };

// {/* <Carousel className='carousel-container'>
//       <Carousel.Item interval={7000}>
//       <Stack
//     direction="horizontal"
//     className="h-100 justify-content-center align-items-center"
//     gap={3}
//   >
//         <div className='carousel-card'>
//           <h3>Hiking Webb App</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           <div className='view'>
//           <img className='project-img' src={wanderlust} alt="" />
//           <div class="mask flex-center rgba-green-strong">
//           </div>

//         <p class="white-text">strong overlay</p>
//     </div>
//           <div className='button-div'>
//             <button>GitHub Link</button>
//             <button>Video</button>  
//             <button onClick={handleClickWebsite} target="_blank">Live Website</button>          
//           </div>
//         </div>
//         <div className='carousel-card'>
//           <h3>Hiking Webb App</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           <img className='project-img' src={wanderlust} alt="" />
//           <div className="mask rgba-purple-slight"></div>
//           <div className='button-div'>
//             <button>GitHub Link</button>
//             <button>Video</button>  
//             <button onClick={handleClickWebsite} target="_blank">Live Website</button>          
//           </div>
//         </div>
//         </Stack>
//       </Carousel.Item>
//       <Carousel.Item interval={7000}>
//       <div className='carousel-card'
//           style={{
//             background: `linear-gradient(
//               190deg,
//               rgba(0, 0, 0, 0.8),
//               rgba(0, 0, 0, 0.8)),
//               url(${wanderlust})`,
//             backgroundSize: "cover",
//             width: `100vw`,
//             height: `500px`
//           }}
//         >
//         </div>          
//     <Carousel.Caption className='carousel-caption'>
//       <h3>Hiking Webb App</h3>
//       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//       <div className='button-div'>
//       <button>GitHub Link</button>
//       <button>Video</button>  
//       <button onClick={handleClickWebsite} target="_blank">Live Website</button>          
//     </div>
//     </Carousel.Caption>

//       </Carousel.Item>
//     </Carousel> */}



  return (
    <Carousel className='carousel-container'>
      <Carousel.Item interval={7000}>

      <div className='carousel-card'
            style={{
              // background: `linear-gradient(
              //   190deg,
              //   rgba(0, 0, 0, 0.8),
              //   rgba(0, 0, 0, 0.8)),
              //   url(${wanderlust})`,
              backgroundSize: "cover",
              width: `100vw`,
              height: `500px`
            }}
          >
        </div>          
        <Carousel.Caption className='carousel-caption'>
          <h3>Hiking Web App</h3>
          <img className='project-img' src={wanderlust} alt="" />
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <div className='button-div'>
          <button>GitHub Link</button>
          <button>Video</button>  
          <button onClick={handleClickWebsite} target="_blank">Live Website</button>          
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={7000}>
        <div className='carousel-card'
            style={{
              // background: `linear-gradient(
              //   190deg,
              //   rgba(0, 0, 0, 0.8),
              //   rgba(0, 0, 0, 0.8)),
              //   url(${wanderlust})`,
              backgroundSize: "cover",
              width: `100vw`,
              height: `500px`
            }}
          >
        </div>          
        <Carousel.Caption className='carousel-caption'>
          <h3>Hiking Web App</h3>
          <img className='project-img' src={wanderlust} alt="" />
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <div className='button-div'>
          <button>GitHub Link</button>
          <button>Video</button>  
          <button onClick={handleClickWebsite} target="_blank">Live Website</button>          
        </div>
        </Carousel.Caption>

      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselItem;