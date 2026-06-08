export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      {/* Page Title */}
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold">About Us</h1>
        <p className="mt-4 text-gray-600">
          Your trusted destination for quality fashion products.
        </p>
      </section>

      {/* Company Intro */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
        <p className="text-gray-700 leading-7">
          We are a modern fashion e-commerce platform dedicated to
          bringing high-quality clothing and accessories to customers
          across the country. Our goal is to make online shopping
          simple, affordable, and enjoyable for everyone.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
          <p className="text-gray-700">
            To provide stylish, affordable, and high-quality fashion
            products while delivering an excellent shopping experience.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
          <p className="text-gray-700">
            To become the most trusted online fashion destination by
            focusing on customer satisfaction and innovation.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border p-5 rounded-lg">
            <h3 className="font-semibold text-xl mb-2">
              Quality Products
            </h3>
            <p>Carefully selected products with premium quality.</p>
          </div>

          <div className="border p-5 rounded-lg">
            <h3 className="font-semibold text-xl mb-2">
              Fast Delivery
            </h3>
            <p>Quick and reliable delivery service nationwide.</p>
          </div>

          <div className="border p-5 rounded-lg">
            <h3 className="font-semibold text-xl mb-2">
              Secure Payments
            </h3>
            <p>Safe and trusted payment options for customers.</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-black text-white rounded-lg p-8">
        <div className="grid md:grid-cols-3 text-center gap-6">
          <div>
            <h3 className="text-4xl font-bold">10K+</h3>
            <p>Happy Customers</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">500+</h3>
            <p>Products</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">5+</h3>
            <p>Years Experience</p>
          </div>
        </div>
      </section>
    </main>
  );
}