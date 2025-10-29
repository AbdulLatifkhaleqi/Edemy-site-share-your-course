import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

function Course({ title, discount, price, id, imgUrl }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/detail/${id}`)}
      className="flex w-[18rem] flex-col justify-center gap-2 rounded-md shadow-md max-sm:w-[90%]"
    >
      <img
        className="w-full cursor-pointer rounded-md"
        src={imgUrl}
        alt={title}
      />
      <div className="flex w-full flex-col gap-1 px-3 py-2">
        <h1 className="text-[18px] font-semibold text-black">{title}</h1>
        <div className="flex items-center gap-2">
          <p>4.5</p>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <img
                className="cursor-pointer"
                src={assets.star}
                alt="star"
                key={i}
              />
            ))}
          </div>
          <p>{discount}</p>
        </div>
        <p>
          <span className="font-semibold text-black">$ </span> {price}
        </p>
      </div>
    </div>
  );
}

export default Course;
