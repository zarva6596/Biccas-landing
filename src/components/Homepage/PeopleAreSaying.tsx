import Image from "next/image";
import quote from "@/assets/icons/quote.svg";
import client1 from "@/assets/images/client1.png";
import client2 from "@/assets/images/client2.png";
import client3 from "@/assets/images/client3.png";
import client4 from "@/assets/images/client4.png";
import playIcon from "@/assets/icons/play-button-testemonials.svg";
import GetStartedForm from "../universal/form/GetStartedForm";

const data = {
  title: "People are Saying About Biccas",
  description:
    "Everything you need to accept payments and grow your money or manage anywhere on the planet.",
};
const testimonial = {
  text: "I am very helped by this E-wallet application , my days are very easy to use this application and its very helpful in my life , even I can pay a short time 😍",
  author: "Aria Zinanrio",
};

const clientsPhotos = [client1, client2, client3, client4];


export default function PeopleAreSaying() {
  return (
    <section className="flex flex-row align-baseline justify-between mt-[133px] px-[130px] pt-[130px] pb-[170px]
       bg-bg-footer gap-[101px]">
      <div className="flex flex-col items-center gap-[42px] max-w-[466px] text-left">
        <div className="flex flex-col gap-[20px]">
          <h2 className="text-[50px] font-semibold text-bg">
            {data.title}
          </h2>
          <p className="text-lg font-medium leading-[30px] text-text-secondary-grey">
            {data.description}
          </p>
        </div>

        <div className="flex flex-col gap-[40px] text-left">
          <Image src={quote} alt="quote" width={45} height={38} color="#D9D9D9" />

          <p className="text-lg font-medium leading-[30px] text-text-secondary-grey">
            {testimonial.text}
          </p>

          <p className="text-lg font-medium leading-[30px] text-text-secondary-grey">
            {testimonial.author}
          </p>

          <div className='flex flex-row gap-[20px]'>
            {clientsPhotos.map((photo, index) => (
              <Image key={index} src={photo} alt={`client photo ${index + 1}`} width={66} height={66} />
            ))}
            <button className="transform hover:scale-110 transition-transform duration-200 cursor-pointer">
              <Image src={playIcon} alt="play icon" width={66} height={66} />
            </button>
          </div>
        </div>
      </div>

      <div>
        <GetStartedForm/>
      </div>
    </section>
  );
}