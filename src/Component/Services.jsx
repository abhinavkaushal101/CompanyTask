import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Development",
    desc: "Create a platform with the best and coolest quality from us.",
    icon: "https://theme.madsparrow.me/most/wp-content/uploads/2022/10/code-1.svg",
    color: "#EEF2FF",
  },
  {
    title: "UI/UX Designer",
    desc: "We provide UI/UX Design services, and of course with the best quality",
    icon: "https://theme.madsparrow.me/most/wp-content/uploads/2022/10/layer.svg",
    color: "#FFF1F2",
  },
  {
    title: "Graphic Designer",
    desc: "We provide Graphic Design services, with the best designers",
    icon: "https://theme.madsparrow.me/most/wp-content/uploads/2022/10/code-2.svg",
    color: "#ECFEFF",
  },
  {
    title: "Motion Graphic",
    desc: "Create a platform with the best and coolest quality from us.",
    icon: "https://theme.madsparrow.me/most/wp-content/uploads/2022/10/align-vertically.svg",
    color: "#FDF2F8",
  },
  {
    title: "Photography",
    desc: "We provide Photography services, and of course with the best quality",
    icon: "https://theme.madsparrow.me/most/wp-content/uploads/2022/10/camera.svg",
    color: "#ECFDF5",
  },
  {
    title: "Videography",
    desc: "We provide UI/UX Design services, and of course with the best quality",
    icon: "https://theme.madsparrow.me/most/wp-content/uploads/2022/10/video-play.svg",
    color: "#FFF7ED",
  },
];

const Services = () => {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
