
function WhyChooseUs() {
  const features = [
    {
      icon: "✧",
      title: "Exceptional Craftsmanship",
      description:
        "Every detail is thoughtfully designed, bringing together beautiful finishes and intricate artistry."
    },
    {
      icon: "♡",
      title: "Made for You",
      description:
        "Personal touches and thoughtful designs that celebrate your individuality and unique style."
    },
    {
      icon: "❀",
      title: "Timeless Elegance",
      description:
        "Discover creations that beautifully blend traditional inspiration with contemporary fashion."
    },
    {
      icon: "✦",
      title: "A Thoughtful Experience",
      description:
        "From discovering your favourite designs to your final purchase, we make every moment special."
    }
  ];

  return (
    <section className="bg-[#F8F3EF] px-5 py-20 md:px-12 lg:px-20">

      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-[#98676A] uppercase tracking-[4px] text-xs mb-4">
          The CERO Difference
        </p>

        <h2 className="text-3xl md:text-5xl font-serif text-[#382522]">
          Why Choose CERO?
        </h2>

        <p className="text-[#8B7B76] mt-5 leading-7 text-sm md:text-base">
          More than just an outfit, a reflection of you.
          We bring together creativity, craftsmanship and
          elegance to make every occasion unforgettable.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        {features.map((feature, index) => (
          <div
            key={index}
            className="group text-center border border-[#E9DDD6] bg-[#FFFCF9] px-6 py-10 "
          >
            <div className="w-16 h-16 rounded-full border border-[#D9BFC0] flex items-center justify-center mx-auto mb-6 ">
              <span className="text-3xl text-[#98676A] ">
                {feature.icon}
              </span>
            </div>

            <h3 className="font-serif text-xl text-[#382522] mb-4">
              {feature.title}
            </h3>

            <p className="text-sm text-[#8B7B76] leading-7">
              {feature.description}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

// ART BEHIND EVERY CREATION

function ArtBehindEveryCreation() {
  return (
    <section className="bg-[#F0E1DA] px-5 py-20 md:px-12 lg:px-20">

      <div className="max-w-5xl mx-auto text-center">

        <div className="text-[#98676A] text-3xl mb-5">
          ✧ &nbsp; ❀ &nbsp; ✧
        </div>

        <p className="text-[#98676A] uppercase tracking-[4px] text-xs mb-5">
          A Story of Artistry
        </p>

        <h2 className="font-serif text-3xl md:text-5xl text-[#382522] leading-tight">
          The Art Behind
          <br />
          Every Creation
        </h2>

        <div className="w-16 h-px bg-[#98676A] mx-auto my-8"></div>

        <p className="text-[#705C57] text-sm md:text-base leading-8 max-w-3xl mx-auto">
          Behind every CERO creation lies a story of inspiration,
          creativity and attention to detail. Inspired by the
          richness of Indian traditions and the beauty of
          contemporary design, we bring together exquisite
          aesthetics and thoughtful craftsmanship.
        </p>

        <p className="text-[#705C57] text-sm md:text-base leading-8 max-w-3xl mx-auto mt-5">
          We believe true beauty lies in the little details.
          Every design is an expression of artistry, envisioned
          to celebrate individuality and make your most
          cherished moments even more special.
        </p>

        <div className="mt-10">
          <span className="font-serif italic text-lg md:text-2xl text-[#98676A]">
            Crafted with passion. Inspired by tradition.
          </span>
        </div>

        <div className="text-[#98676A] text-3xl mt-8">
          ✧
        </div>

      </div>

    </section>
  );
}


function AboutSections() {
  return (
    <>
      <WhyChooseUs />
      <ArtBehindEveryCreation />
    </>
  );
}

export default AboutSections;
