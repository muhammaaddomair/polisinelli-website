export default function CultureHero() {
  return (
    <div className="relative w-full h-[600px] md:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop')`,
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end  pl-[100px]  pb-10">
        <h1 className="text-[62px]  font-light text-white">our Diverse Culture</h1>
      </div>
    </div>
  );
}
