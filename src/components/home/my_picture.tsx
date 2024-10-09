import Image from "next/image";

export const MyPicture = () => {
  return (
    <Image
      src="/photo.jpg"
      alt="Aina"
      width={200}
      height={200}
      className="mt-5 aspect-square rounded-full border-4 border-white object-cover shadow-lg transition-shadow duration-300 hover:shadow-2xl dark:border-onyx"
    />
  );
};
