import { Cross as Progress, Link2, MessageCircle } from 'lucide-react';

interface TaskCardProps {
  id: string;
  title: string;
  description: string;
  priority: 'High' | 'Low';
  type: string;
  progress: number;
  comments: number;
  links: number;
  assignees: string[];
  image: string;
}

export function ToDoCard(props: TaskCardProps) {
  return <BaseCard {...props} bgClass="bg-gray-100" />;
}

export function OnProgressCard(props: TaskCardProps) {
  return <BaseCard {...props} bgClass="bg-yellow-100" />;
}

export function InReviewCard(props: TaskCardProps) {
  return <BaseCard {...props} bgClass="bg-blue-100" />;
}

export function CompletedCard(props: TaskCardProps) {
  return <BaseCard {...props} bgClass="bg-green-100 mt-5" />;
}

function BaseCard({ id, title, description, priority, type, progress, comments, links, assignees, image, bgClass }: TaskCardProps & { bgClass: string }) {
  return (
    <div className={`rounded-lg p-4 mt-2 shadow-sm hover:shadow-md transition-shadow  ${bgClass}`}>
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-1">
          <span className={`text-xs px-2 py-0.5 rounded ${priority === 'High' ? 'bg-red-50 text-red-600' : 'bg-gray-50 text-gray-600'}`}>
            {priority}
          </span>
          <span className="text-xs text-white bg-blue-500 px-2 py-0.5 rounded">{type}</span>
        </div>
        <span className="text-sm text-gray-500">{id}</span>
      </div>
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg mb-4" />
      <h3 className="text-gray-900 font-medium mb-1">{title}</h3>
      <p className="text-sm text-gray-600 mb-2">{description}</p>
      {bgClass !== 'bg-green-100' && (
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1">
            <Progress className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">Progress</span>
            <span className="text-sm text-gray-600 ml-auto">{progress}%</span>
          </div>
          <div className="h-1.5 w-full bg-gray-100 rounded-full">
            <div className="h-full bg-blue-600 rounded-full" style={{ width: `${progress}%` }} />
          </div>
        </div>
      )}
      <div className="flex items-center justify-between">
        <div className="flex -space-x-2">
          {assignees.map((assignee, i) => (
            <img key={i} src={assignee || 'https://via.placeholder.com/40'} alt={`Assignee ${i + 1}`} className="w-8 h-8 rounded-full border-2 border-white object-cover" />
          ))}
        </div>
        <div className="flex items-center gap-3 text-gray-500">
          <div className="flex items-center gap-1">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm">{comments}</span>
          </div>
          <div className="flex items-center gap-1">
            <Link2 className="w-4 h-4" />
            <span className="text-sm">{links}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
