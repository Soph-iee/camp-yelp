import data from "./data";
import { useEffect, useState } from "react";
export default function Carousel() {
  const [currentImage, setCurrentImage] = useState(data[1]);
  useEffect(() => {
    const interValid = setInterval(() => {
      setCurrentImage(data[Math.floor(Math.random() * data.length)]);
    }, 3000);
    return () => clearInterval(interValid);
  });
  return (
    <div className="p-20 flex flex-row m-auto justify-around">
      <div className="border-2 p-10">
        <img className="object-contain " src={"/Assets/map.png"} alt="" />
      </div>
      <div className="w-1/2 h-30  p-10 rounded-lg border-2 flex flex-col gap-5">
        <h2 className="text-2xl uppercase bold">{currentImage.name}</h2>
        <img
          className="w-30 h-30"
          src={currentImage.image}
          alt={currentImage.name}
        />
        <p>{currentImage.description}</p>
        <div className="border-2 p-4 flex flex-col gap-4 rounded-lg">
          <p>
            <p className="flex justify-between">
              <b> Atlas</b> <span> time</span>
            </p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque uto
            ex perspiciatis reprehenderit quidem, provident repellat enim eum!
          </p>
          <p>
            <p className="flex justify-between">
              <b> Atlas</b> <span> time</span>
            </p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ut
          </p>
          <p>
            <p className="flex justify-between">
              <b> Atlas</b> <span> time</span>
            </p>
            cabo ex perspiciatis reprehenderit quidem, provident repellat enim
            eum!
          </p>
          <p>
            <p className="flex justify-between">
              <b> Atlas</b> <span> time</span>
            </p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ut
            numqu quidem, provident repellat enim eum!
          </p>
        </div>
      </div>
    </div>
  );
}

// export default function Carousel() {
//   const pictures = [];
//   const [currentImage, setCurrentImage] = useState(null);
//   useEffect(() => {
//     const interValid = setInterval(() => {
//       setCurrentImage(pictures[Math.floor(Math.random() * pictures.length)]);
//     }, 5000);
//     return () => clearInterval(interValid);
//   }, []);
//   return (
//     <>
//       <div>
//         {data.map((object, index) => (
//           <div key={object.id}>
//             {pictures.push(object.image)}

//             <p> {object.name}</p>
//             <img className="w-30 h-20" src={object.image} alt={object.name} />
//           </div>
//         ))}
//       </div>
//       {console.log(pictures.length)}
//       <img className="w-30 h-20 mx-auto" src={currentImage} />
//     </>
//   );
// }
