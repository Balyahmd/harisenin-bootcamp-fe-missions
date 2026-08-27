import starFilled from "../assets/icons/full-star.png";
import starHalf from "../assets/icons/half-star.png";
import starEmpty from "../assets/icons/empty-star.png";

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        let starImage;

        if (rating >= star) {
          starImage = starFilled;
        } else if (rating >= star - 0.5) {
          starImage = starHalf;
        } else {
          starImage = starEmpty;
        }

        return (
          <img key={star} src={starImage} alt="star" className="w-5 h-5" />
        );
      })}
    </div>
  );
}

export default StarRating;
