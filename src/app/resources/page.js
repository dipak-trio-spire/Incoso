import unterBG from "../../../public/img/unter-bg.png";
import unter1 from "../../../public/img/unter-1.png";
import unter2 from "../../../public/img/unter-2.png";
import unter3 from "../../../public/img/unter-3.png";
import unter4 from "../../../public/img/unter-4.png";
import unterS1 from "../../../public/img/s-1.svg";
import unterS2 from "../../../public/img/s-2.svg";
import unterS3 from "../../../public/img/s-3.svg";
import unterS4 from "../../../public/img/s-4.svg";
import Image from "next/image";
import Link from "next/link";


const page = () => {
  return (
    <>
    <section className="hero-banner">
        <div className="hero-wrapper">
            <div className="hero-img">
                <Image src={unterBG} alt="hero"/>
            </div>
        </div>
    </section>
    <div className="unter-analytes py py-b">
        <section className="unter-analy py py-b">
            <div className="container">
                <div className="analytics-wrapper">
                    <div className="com-title">
                        <h2>Increasing Complexity in the Resource Market</h2>
                    </div>
                    <div className="unter-analy-box">
                        <ul>
                            <li>The complexity in the raw materials brokerage market is growing disproportionately across various dimensions. 
                            </li>
                            <li>Market demands are continually evolving due to innovation, artificial intelligence, political regulations, environmental considerations, and sustainability initiatives.</li>
                            <li>An increasing number of unpredictable and unquantifiable factors affect the value chain and stakeholder networks, posing significant challenges to our operations.</li>
                            <li>Framework conditions, including ESG (Environmental, Social, and Governance) guidelines, compliance requirements, and supply chain legislation, require constant adaptation.</li>
                        </ul>
                        <Image src={unter1} alt="unter image"/>
                    </div>
                </div>
            </div>
        </section>
        <section className="unter-about py ">
        <div className="container">
            <div className="unter-about-wrapper">
            <div className="unter-about-title">
            <h2 >What we offer</h2>
            </div>
                
                <div className="unter-about-boxs">
                    <div className="unter-about-box">
                        <div className="unter-about-no">
                        <Image src={unterS1} alt="unters1"/>
                        </div>
                        <div className="unter-about-box-title">
                            <p>Agriculture</p>
                        </div>
                        <div className="unter-about-text">
                            <p>We facilitate trades in grains, livestock, and other agricultural commodities.</p>
                        </div>
                    </div>
                    <div className="unter-about-box">
                        <div className="unter-about-no">
                        <Image src={unterS2} alt="unters2"/>
                        </div>
                        <div className="unter-about-box-title">
                            <p>Energy</p>
                        </div>
                        <div className="unter-about-text">
                            <p>We link you to the right providers and buyers in sectors like oil, natural gas, and coal.</p>
                        </div>
                    </div>
                    <div className="unter-about-box">
                        <div className="unter-about-no">
                        <Image src={unterS3} alt="unters3"/>
                        </div>
                        <div className="unter-about-box-title">
                        <p>Metals</p>
                        </div>
                        <div className="unter-about-text">
                            <p>Connecting buyers and suppliers in industrial metals (e.g., copper, aluminum) and precious metals (e.g., gold, silver).</p>
                        </div>
                    </div>
                    <div className="unter-about-box">
                        <div className="unter-about-no">
                            <Image src={unterS4} alt="unters4"/>
                        </div>
                        <div className="unter-about-box-title">
                        <p>Recycling</p>
                        </div>
                        <div className="unter-about-text">
                            <p>Recycling materials are essential for sustainable business models, and we help you find the right partners in this growing sector.</p>
                        </div>
                    </div>
                </div>
                <div className="unter-content">
                    <p>We leverage digital solutions to analyze and compile market trends and data in the commodity industry. This ensures that you always have access to the most current and relevant information for your decisions
                    </p>
                    <Link href="/contact">
                        CONTACT US
                    </Link>
                </div>
            </div>
        </div>
        </section>
        <section className="unter-analy py py-b">
            <div className="container">
                <div className="analytics-wrapper">
                    <div className="com-title">
                        <span> RESOURCE CONSUMPTION</span>
                        <h2>Resource consumption is increasing across all areas of our brokerage operations and within the entire value chain and stakeholder network.</h2>
                    </div>
                    <div className="unter-analy-box">
                        {/* <div className="analytics-text">
                            <p>Daten, IT-Systeme, Personal, Organisationseinheiten vor allem indirekte Bereiche etc.
                                Zusätzliche Organisationseinheiten mit eigenen Strukturen, Datenbanken, Daten und
                                damit
                                auch Redundanz werden geschaffen und müssen verwaltet werden (Bsp.
                                Standardkomponente
                                wird mit unterschiedlichen Artikelnummern in verschiedenen Systemen verwaltet)
                            </p>
                        </div> */}
                        <div className="unter-img">
                        <Image src={unter2} alt="unter image"/>
                        <Image src={unter3} alt="unter image"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="unter-analy py py-b">
            <div className="container">
                <div className="analytics-wrapper py py-b">
                    <div className="com-title">
                        <span> VERBRAUCH </span>
                        <h2>Decision-Making in Complex Commodity Networks</h2>
                    </div>
                    <div className="unter-analy-box">
                        <div className="analytics-text">
                            <p>In the commodity sector, characterized by global supply chains, regulatory demands, and volatile markets, decisions are often made under challenging conditions. The availability of data is frequently incomplete, contradictory, or quickly outdated. These uncertainties make it difficult to make precise decisions throughout the value chain— from raw material procurement to production and logistics. Despite these challenges, it is crucial to rely on solid information to make informed decisions that promote both efficiency and sustainability.
                            </p>
                        </div>
                        <Image src={unter4} alt="unter image"/>
                    </div>
                </div>
            </div>
        </section>
    </div>
  
    <section className="unter-analy py py-b">
        <div className="container">
          
                <div className="unter-analy-box unter-analy-bg-none">
                    <div className="unter-img">
                        <div className="unter-img-text">
                            <div className="com-title">
                                <h2 className="unter">Clients and Markets </h2>
                            </div>
                            <ul>
                                <li>The commodities or materials involved must exhibit a high level of complexity (e.g., multi-tiered supply chains or interrelated production processes).</li>
                                <li>Complex procurement structures are essential, often involving numerous suppliers and varying volumes of resources.</li>
                                <li>The development and delivery of these commodities frequently require a multi-phase approach, with continuous coordination between suppliers and clients across the value chain to meet evolving regulatory and environmental standards.</li>
                                <li>Whether its custom manufacturing or large-scale production, our facilitation is adaptable to various production processes, ensuring that all partners in the supply chain benefit from efficient, sustainable, and transparent operations.</li>
                            </ul>
                        </div>
                </div>
            </div>
        </div>
    </section>
</>
  )
}

export default page