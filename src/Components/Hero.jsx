//Project files
import TypeAnimation from 'react-type-animation';


export default function Hero() {
  return (
    <div className="hero" id="hero">
      <div style={{ width: '100%' }} className='hero-heading ' >
            <TypeAnimation
            cursor={true}
            sequence={[
              "I'm just a human like you...",
              4000,
              "I am extremely passionate about technology...",
              3000,
              " Hi there! I'm Tanim, A self-taught fullstack Developer...",
              2000,
            ]}
            wrapper="h2"
            repeat={1}
           />
            </div>
    </div>
  );
}
