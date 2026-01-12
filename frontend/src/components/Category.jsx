import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import { useNavigate } from "react-router-dom";

const ROTATION_RANGE = 24;

const CATEGORY_DATA = {
  women: {
    label: "Women",
    image:
      "https://ctfassetsprod.tatacliq.com/?url=https://images.ctfassets.net/69qx72t49ip2/6MsGuQIgSwLyOfQd5cORQh/356e9979153c355c9923f829dfa4a4e1/Frame_1244836544-4.jpg",
    gradient: "from-[#1c1c1c] via-[#141414] to-[#0b0b0b]",
  },
  men: {
    label: "Men",
    image:
      "https://ctfassetsprod.tatacliq.com/?url=https://images.ctfassets.net/69qx72t49ip2/4YLOH4aXdulJ7uoz6WFVm0/50dadfa6fa2fbf970d47288f4a810234/Frame_1244836544-2.jpg",
    gradient: "from-[#222222] via-[#161616] to-[#0d0d0d]",
  },
  kids: {
    label: "Kids",
    image:
      "https://ctfassetsprod.tatacliq.com/?url=https://images.ctfassets.net/69qx72t49ip2/2kGgWlluLm78D9CNvtppaZ/a6ce9c2824be8c51eb00bbbd54d424c4/Frame_1244836544-7.jpg",
    gradient: "from-[#262626] via-[#1a1a1a] to-[#101010]",
  },
};

const Category = ({ categoryKey }) => {
  const ref = useRef(null);
  const navigate = useNavigate();

  const data = CATEGORY_DATA[categoryKey];
  if (!data) return null;

  const { label, image, gradient } = data;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 120, damping: 18 });
  const ySpring = useSpring(y, { stiffness: 120, damping: 18 });

  const transform = useMotionTemplate`
    rotateX(${xSpring}deg)
    rotateY(${ySpring}deg)
  `;

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    x.set((py - 0.5) * -ROTATION_RANGE);
    y.set((px - 0.5) * ROTATION_RANGE);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onClick={() => navigate(`/collection?category=${label}`)}
      style={{ transformStyle: "preserve-3d", transform }}
      className={`relative h-72 w-56 rounded-2xl cursor-pointer
      bg-gradient-to-br ${gradient}
      shadow-md hover:shadow-2xl
      transition-shadow duration-300`}
    >
      <div
        style={{ transform: "translateZ(50px)" }}
        className="absolute inset-3 overflow-hidden rounded-xl"
      >
        <img
          src={image}
          alt={label}
          className="h-full w-full object-cover scale-105 transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 flex items-end justify-center
        bg-gradient-to-t from-black/75 via-black/35 to-transparent">
          <h2
            style={{ transform: "translateZ(35px)" }}
            className="mb-5 text-2xl font-medium tracking-[0.35em] text-white uppercase"
          >
            {label}
          </h2>
        </div>
      </div>
    </motion.div>
  );
};

export default Category;
