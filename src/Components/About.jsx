//Project files
import AboutPhoto from "../assets/images/my.jpg";


export default function About() {
  return (
    <div className="about" id="about">
      <h2 className="about-title">About me</h2>
      <div className="about-content">
        <div className="about-left">
          <p>
          Hi, I am MD. Mizanur Rahman, <span className="yccmt"> You can call me Tanim </span>, a Frontend developer as well as Backend API developer. 
          Welcome to my website, here you can check the projects I have developed so far and also what I will do in the near future.
          </p>
          <p>
          Currently I am deep learning about the <span className="yccmt">Javascript framework like Reactjs, Nodejs</span> and <span className="yccmt">Python framework like FastAPI.</span> 
          I am also familiar with python/Django and  programmable hardwares like PIC microcontroller, 
          Arduino etc. I completed my BSc in Electronics and Communication Engineering From Sylhet International University. You can go down to see my work in more detail.
          </p>
        </div>
        <div className="about-right">
          <img className="myimg" src={AboutPhoto} alt=" " />
        </div>
      </div>
    </div>
  );
}
