import {useEffect} from "react";
import {useRef} from "react";
import gsap from "gsap";

const AnimatedTitle = ({title, containerClass}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const tilteAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });

      tilteAnimation.to(".animated-word", {
        opacity: 1,
        transform: "translate3d(0,0,0) rotateY(0deg) rotateX(0deg)",
        ease: "power2.inOut",
        stagger: 0.02,
      }); 
    }, containerRef);

    return () => context.revert();
  }, []);

  return (
    <div className={`animated-title ${containerClass}`} ref={containerRef}>
      {title.split("<br />").map((line, index) => (
        <div key={index} className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3">
          {line.split(" ").map((word, i) => (
            <span key={i} className="animated-word" dangerouslySetInnerHTML={{__html: word}}/>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
