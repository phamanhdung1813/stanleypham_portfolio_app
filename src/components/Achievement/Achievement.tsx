import { AchievementAPI } from "./AchievementAPI";
import AchievementCard from "./AchievementCard";

const Achievement: React.FC = () => {
  return (
    <main className="flex-1 p-8">
      <div className="flex min-h-screen mt-16 mb-4 dark:bg-neutral-800 bg-neutral-100 dark:text-neutral-100 text-neutral-800">
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-12 p-5">
            {AchievementAPI.map((achievement: any) => (
              <AchievementCard
                image={achievement.image}
                title={achievement.title}
                description={achievement.description}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Achievement;
