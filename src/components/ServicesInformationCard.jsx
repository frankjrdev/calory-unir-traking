// eslint-disable-next-line react/prop-types
export default function ServicesInformationCard({ image, number, title }) {
  return (
    <div className="flex flex-col items-center gap-4 justify-between">
      <img src={image} alt="image" />
      <span className="text-3xl font-bold">{number}</span>
      <span className="text-xl font-semibold">{title}</span>
    </div>
  );
}
