import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const team = [
    {
      name: "Dr. Priya Sharma",
      role: "Medical Director & Aesthetic Physician",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      bio: "Dr. Sharma brings over 15 years of experience in aesthetic medicine. She is internationally recognized for her expertise in non-surgical facial rejuvenation and is committed to providing personalized care with natural-looking results.",
    },
    {
      name: "Dr. Arjun Mehta",
      role: "Senior Aesthetic Physician",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
      bio: "With a background in dermatology and advanced training in laser treatments, Dr. Mehta specializes in skin rejuvenation and body contouring procedures. His approach combines scientific precision with an artistic eye.",
    },
    {
      name: "Ananya Reddy",
      role: "Lead Aesthetician",
      image:
        "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
      bio: "Ananya has trained with leading skincare experts across Europe and Asia. Her extensive knowledge of advanced facial techniques and product formulations ensures each client receives a customized treatment plan.",
    },
    {
      name: "Vikram Singh",
      role: "Clinic Manager",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      bio: "Vikram ensures our clinic runs seamlessly, creating a welcoming environment where clients feel valued and cared for. His background in hospitality brings an exceptional level of service to every aspect of the client experience.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh]">
        <Image
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1153&q=80"
          alt="Elegant clinic interior"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-light text-white mb-4">
            About Us
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            Dedicated to excellence in aesthetic medicine and personalized care
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-serif text-gray-800 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                {`Elegance Aesthetics was founded in 2010 with a vision to create
                a sanctuary where art and science converge to enhance natural
                beauty. What began as a small clinic with a dedicated team of
                two has grown into one of India's premier aesthetic
                destinations.`}
              </p>
              <p className="text-gray-600 mb-4">
                {`Our philosophy is rooted in the belief that aesthetic treatments
                should enhance, not alter. We take pride in our personalized
                approach, taking the time to understand each client's unique
                concerns and desires before recommending treatments.`}
              </p>
              <p className="text-gray-600">
                Over the years, we have continuously evolved, investing in the
                latest technologies and techniques while maintaining our
                commitment to safety, efficacy, and natural-looking results.
              </p>
            </div>
            <div className="w-full md:w-1/2 relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1153&q=80"
                alt="Our clinic interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-gray-800 mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description:
                  "We are committed to the highest standards in every aspect of our practice, from our medical expertise to our client service.",
                icon: (
                  <div className="flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 text-gray-800 mb-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                ),
              },
              {
                title: "Integrity",
                description:
                  "We provide honest recommendations based on what's best for our clients, not what's most profitable. Your trust is our most valued asset.",
                icon: (
                  <div className="flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 text-gray-800 mb-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                ),
              },
              {
                title: "Innovation",
                description:
                  "We continuously seek out the most advanced, scientifically-proven treatments to offer our clients the best possible results.",
                icon: (
                  <div className="flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 text-gray-800 mb-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                ),
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300 rounded-sm"
              >
                {value.icon}
                <h3 className="text-2xl font-serif text-gray-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-gray-800 mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {team.map((member, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/3 relative h-[200px] md:h-auto">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-xl font-serif text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clinic */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-serif text-gray-800 mb-6">
                Our Clinic
              </h2>
              <p className="text-gray-600 mb-4">
                Located in the heart of the city, our clinic has been designed
                to provide a serene and luxurious environment where clients can
                relax and rejuvenate. Every detail, from the soothing color
                palette to the comfortable furnishings, has been carefully
                selected to create a tranquil atmosphere.
              </p>
              <p className="text-gray-600 mb-4">
                Our treatment rooms are equipped with state-of-the-art
                technology, ensuring we can offer the most advanced procedures
                with optimal safety and efficacy. We maintain the highest
                standards of cleanliness and hygiene throughout our facility.
              </p>
              <p className="text-gray-600">
                We invite you to experience the Elegance Aesthetics difference,
                where clinical excellence meets luxury and comfort.
              </p>
            </div>
            <div className="w-full md:w-1/2 relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1519494140681-8b17d830a3e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1153&q=80"
                alt="Our clinic reception"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 px-4 bg-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif mb-6">
            Begin Your Journey With Us
          </h2>
          <p className="mb-8 text-gray-300">
            {`We'd love to welcome you to our clinic and discuss how we can help
            you achieve your aesthetic goals.`}
          </p>
          <Link
            href="/contact"
            className="bg-white text-gray-900 px-8 py-3 rounded-sm hover:bg-opacity-90 transition duration-300 font-light tracking-wide inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
