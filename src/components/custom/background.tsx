import Image from "next/image";

const CustomBackground = () => {
  return (
    <div className="relative h-[95vh] clip-path-custom md:clip-path-phone">
      <style jsx>{`
        .clip-path-custom {
          clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
          -webkit-clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
        }

        @media (max-width: 640px) {
          .clip-path-phone {
            clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);
          }
        }
      `}</style>
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,0,0,0.8)] to-[rgba(255,255,255,0.2)]">
        <Image
          src="/images/project_1.png"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default CustomBackground;
