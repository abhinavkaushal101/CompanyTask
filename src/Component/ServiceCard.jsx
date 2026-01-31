import useScrollFade from "../ThemeProvider/useScrollFade";


const ServiceCard = ({ icon, title, desc, color }) => {
  const [ref, visible] = useScrollFade();

  return (
    <div
      ref={ref}
      className={`bg-base-300 rounded-2xl p-4 shadow-sm transition-all duration-700 ease-out
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
    >
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-full mb-4`}
        style={{ backgroundColor: color }}
      >
        {/* <span className="text-xl">{icon}</span> */}
        <img src={icon} alt="" />
      </div>

      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
};

export default ServiceCard;
