import React from "react";
import Card from "./Card";
import URLShortener from "./URLShortener"

export default function MiddleSection() {


  const cards = [
    {
      id: 0,
      image: "../images/icon-brand-recognition.svg",
      title: "Brand Recognition",
      paragraph: " Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
    }, {
      id: 1,
      image: "../images/icon-detailed-records.svg",
      title: "Detailed Records",
      paragraph: " Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
    }, {
      id: 2,
      image: "../images/icon-fully-customizable.svg",
      title: "Fully Customizable",
      paragraph: " Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
    }]


  return(
    <section className="bg-custom-gray mt-36 pb-20 w-full inline-block">
      <URLShortener />
      <h3 className="font-bold text-2xl mx-auto w-fit max-w-sm color-custom-blue lg:text-3xl lg:text-center mt-24">
        Advanced Statistics
      </h3>
      <p className="w-9/12 max-w-lg mx-auto text-center text-sm mt-5 color-custom-gray-violet lg:text-base">
        Track how your links are performing across the web with our advanced statistics dashboard.
      </p>
      <div className="lg:flex lg:h-96 max-w-screen-lg lg:mx-auto relative mt-2">
      {
        cards.map( element => {
          return <Card key={element.id} id={element.id} image={element.image} title={element.title} paragraph={element.paragraph} />
        })
      }
      <div className="card-line absolute"></div>
      </div>

    </section>
  )
}