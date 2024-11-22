import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ServiceProfile {
  name: string;
  age: number;
  recentProjects: string[];
  imageUrl: string;
}

interface ServiceProfileProps {
  profile: ServiceProfile;
}

export const ServiceProfile = ({ profile }: ServiceProfileProps) => {
  return (
    <div className="p-6 bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg hover:shadow-xl transition-all">
      <div className="flex items-center space-x-4 mb-4">
        <Avatar className="w-16 h-16">
          <AvatarImage src={profile.imageUrl} alt={profile.name} />
          <AvatarFallback>{profile.name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-lg font-semibold dark:text-glow">{profile.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Age: {profile.age}</p>
        </div>
      </div>
      <div className="mt-4">
        <h4 className="font-medium mb-2 dark:text-glow">Recent Projects</h4>
        <ul className="space-y-1">
          {profile.recentProjects.map((project, index) => (
            <li key={index} className="text-sm text-gray-600 dark:text-gray-300">
              {project}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};