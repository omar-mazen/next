import UserDefaulPictureIcon from "./../assets/icons-jsx/UserDefaulPictureIcon";
interface ProfilePicProps {
  src?: string | null;
  size?: "sm" | "md" | "lg" | "xl";
  title?: string | null;
}

export default function ProfilePic({
  src,
  size = "sm",
  title = null,
}: ProfilePicProps) {
  const imgSize: Record<NonNullable<ProfilePicProps["size"]>, number> = {
    sm: 25,
    md: 50,
    lg: 100,
    xl: 125,
  };

  return (
    <figure
      className="overflow-hidden rounded-full"
      title={title ?? undefined}
      style={{ height: imgSize[size], width: imgSize[size] }}
    >
      {src ? (
        <img
          src={src}
          alt="profile picture"
          style={{ height: imgSize[size], width: imgSize[size] }}
          className="aspect-square overflow-hidden rounded-full object-cover object-center"
        />
      ) : (
        <span>
          <UserDefaulPictureIcon size={imgSize[size]} />
        </span>
      )}
    </figure>
  );
}
