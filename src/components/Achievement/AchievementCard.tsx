interface AchievementProps {
  image: string;
  title: string;
  description: string;
}

export default function AchievementCard({
  image,
  title,
  description,
}: AchievementProps) {
  return (
    <div
      className="dark:bg-neutral-800 bg-neutral-100 border-2 dark:border-green-400 border-green-600 rounded-lg dark:text-neutral-100 text-neutral-800 
    w-full max-w-5xl h-auto overflow-hidden transition-shadow duration-300 dark:hover:shadow-[0_0_20px_#00ff9d] hover:shadow-[0_0_20px_#4ade80]"
    >
      <div className="p-8">
        <img
          src={image}
          title={title}
          className="w-full h-full rounded-md mb-6"
        />
        <p className="dark:text-neutral-300 text-neutral-800 text-lg leading-relaxed mb-8">
          {description}
        </p>
      </div>
    </div>
  );
}
