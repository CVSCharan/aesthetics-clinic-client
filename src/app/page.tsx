import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh]">
        <Image
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Elegant clinic interior"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-light text-white mb-4">
            Timeless Beauty, <span className="italic">Modern Science</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
            Experience the perfect blend of artistry and advanced aesthetics
            treatments
          </p>
          <Link
            href="/services"
            className="bg-white text-gray-900 px-8 py-3 rounded-sm hover:bg-opacity-90 transition duration-300 font-light tracking-wide"
          >
            Explore Our Services
          </Link>
        </div>
      </section>

      {/* Featured Services */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-16 text-gray-800">
            Our Signature Treatments
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Facial Rejuvenation",
                image:
                  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                description:
                  "Restore your skin's natural radiance with our customized facial treatments.",
              },
              {
                title: "Advanced Skin Therapy",
                image:
                  "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                description:
                  "Cutting-edge treatments to address specific skin concerns and conditions.",
              },
              {
                title: "Body Contouring",
                image:
                  "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
                description:
                  "Sculpt and define your body with our non-invasive contouring procedures.",
              },
            ].map((service, index) => (
              <div key={index} className="group">
                <div className="relative h-64 mb-4 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-serif mb-2 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href="/services"
                  className="text-gray-800 border-b border-gray-400 pb-1 inline-block hover:border-gray-800 transition duration-300"
                >
                  Learn more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-16 text-gray-800">
            Client Experiences
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                quote:
                  "The attention to detail and personalized care I received was exceptional. My skin has never looked better.",
                name: "Emily Johnson",
                title: "Facial Rejuvenation Client",
              },
              {
                quote:
                  "The staff's expertise and the clinic's serene atmosphere made my treatments both effective and relaxing.",
                name: "Michael Chen",
                title: "Regular Client",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 shadow-sm">
                <p className="text-gray-600 italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-medium text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-sm">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-4 bg-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif mb-6">
            Begin Your Transformation Today
          </h2>
          <p className="mb-8 text-gray-300">
            Schedule a consultation with our expert aestheticians to discover
            the perfect treatment plan for your unique needs.
          </p>
          <Link
            href="/contact"
            className="bg-white text-gray-900 px-8 py-3 rounded-sm hover:bg-opacity-90 transition duration-300 font-light tracking-wide inline-block"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
