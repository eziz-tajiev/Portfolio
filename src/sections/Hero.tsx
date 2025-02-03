import memoji from '@/assets/images/memoji-computer.png'
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg'
export const HeroSection = () => {
  return (
    <div>
      <div className='container'>
        <Image src={memoji} alt='Person with laptop' />
        <div>
          <div></div>
          <div>Available for new projects</div>
        </div>
        <h1>Building Exceptional User Experiences</h1>
        <p>
          I specialize in transforming designs into functional, high-performing
          web applications. Let's discuss your next project.
        </p>
        <div>
          <button>
            <span>Explore My Work</span>
            <ArrowDown />
          </button>
          <button>
            <span>👋🏽</span>
            <span>Let's Connect</span>
          </button>
        </div>

        
      </div>
    </div>
  );
};
