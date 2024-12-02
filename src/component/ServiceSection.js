import Image from 'next/image';
import Link from 'next/link';
import img1 from "../../public/img/s-1.svg"
import img2 from "../../public/img/s-2.svg"
import img3 from "../../public/img/s-3.svg"
import img4 from "../../public/img/s-4.svg"

const services = [
  {
    imgSrc: img1,
    title: 'Agriculture',
    paragraph: 'We facilitate trades in grains, livestock, and other agricultural commodities.',
     link:'',
    linkText:''
  },
  {
    imgSrc:img2,
    title: 'Energy',
    paragraph: 'We link you to the right providers and buyers in sectors like oil, natural gas, and coal.',
    link:'',
    linkText:''
  },
  {
    paragraph: 'We leverage digital solutions to analyze and compile market trends and data in the commodity industry. This ensures that you always have access to the most current and relevant information for your decisions',
    link:'/contact',
    linkText:'CONTACT US'
  },
  {
    imgSrc: img3,
    title: 'Metals',
    paragraph: 'Connecting buyers and suppliers in industrial metals (e.g., copper, aluminum) and precious metals (e.g., gold, silver).',
    link:'',
    linkText:''
  },
  {
    imgSrc: img4,
    title: 'Recycling.',
    paragraph: 'Recycling materials are essential for sustainable business models, and we help you find the right partners in this growing sector.',
    link:'',
    linkText:''
  }
  
];

export default function ServiceSection() {
  return (
    <>
    <section className="service py py-b">
      <div className="container">
        <div className="service-wrapper">
          {/* <div className="com-title">
            <span>WAS WIR BIETEN</span>
            <h2>Leistungsbeschreibung EAS Cockpit</h2>
          </div> */}
          <div className="service-boxs">
            {services.map((service, index) => (
              <div className="service-box" key={index}>
                <div className="service-img">
                  <Image src={service.imgSrc} alt="service image" width={100} height={100} />
                </div>
                <div className="service-title">
                <p>{service.title}</p>
                </div>
                <div className="service-text">
                  <p>{service.paragraph}</p>
                </div>
                 <Link href={service.link}>
                    {service.linkText}
                 </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
    
  );
}
