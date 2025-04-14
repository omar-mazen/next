import Star from "@/assets/icons-jsx/Star";

const STARS_NUMBER = 5;

interface StaticRatingStarsProps {
  ratingPercentage?: number;
  size: number;
}

export default function StaticRatingStars({
  ratingPercentage = 0,
  size,
}: StaticRatingStarsProps) {
  return (
    <ul className="flex w-fit justify-center">
      {Array.from({ length: STARS_NUMBER }, (_, i) => (
        <Star
          size={size}
          key={i}
          fill={i + 1 <= Math.round(ratingPercentage * STARS_NUMBER)}
        />
      ))}
    </ul>
  );
}
