import { Cross as Progress, Link2, MessageCircle } from 'lucide-react';
import ButtonDestructiveC from './components.tsx';

interface TaskCardProps {
  id: string;
  title: string;
  description: string;
  priority: 'High' | 'Low';
  type: string;
  progress: number;
  comments: number;
  links: number;
  assignees: string[]; // Array of image URLs for assignees
  image: string; // Task image
}

function TaskCard({ id, title, description, priority, type, progress, comments, links, assignees, image }: TaskCardProps) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      {/* Task Image */}
      

      {/* Priority and Type */}
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-1">
          <span className={`text-xs px-2 py-0.5 rounded ${priority === 'High' ? 'bg-red-50 text-red-600' : 'bg-gray-50 text-gray-600'}`}>
            {priority}
          </span>
          <span className="text-xs text-white bg-blue-500 px-2 py-0.5 rounded">{type}</span> {/* Highlighted type */}
        </div>
        <span className="text-sm text-gray-500">{id}</span>
      </div>
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg mb-4" />
      {/* Title & Description */}
      <h3 className="text-gray-900 font-medium mb-1">{title}</h3>
      <p className="text-sm text-gray-600 mb-2">{description}</p>
      
      {/* Progress Bar */}
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

      {/* Assignees, Comments & Links */}
      <div className="flex items-center justify-between">
        {/* Assignee Images */}
        <div className="flex -space-x-2">
          {assignees.map((assignee, i) => (
            <img
              key={i}
              src={assignee || "https://via.placeholder.com/40"} // Default image if no URL
              alt={`Assignee ${i + 1}`}
              className="w-8 h-8 rounded-full border-2 border-white object-cover"
            />
          ))}
        </div>

        {/* Comments & Links */}
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

function AppAC() {
  return (
    <div className="min-h-screen bg-gray-200 p-5 w-70 rounded-md">
      <div className="max-w-md mx-auto space-y-2">
        <div className="flex items-center justify-between mb-3">
          <ButtonDestructiveC />
          <h2 className="text-xl font-semibold text-gray-900">
            compl <span className="mr-31 text-sm text-gray-500">4</span>
          </h2>
          <button className="text-gray-400 hover:text-gray-600">
            <span className="sr-only">More options</span>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>

        {/* Task Cards with Assignee Images */}
        <TaskCard
          id="D-49"
          title="wire framing"
          description="Build low wireframing"
          priority="High"
          type="Back-End"
          progress={100}
          comments={20}
          links={10}
          assignees={[
            "https://randomuser.me/api/portraits/men/10.jpg",
            "https://randomuser.me/api/portraits/women/20.jpg",

          ]}
          image="https://cdn.dribbble.com/userupload/5512108/file/original-10f19367920b7b2b870d1cc7473f259e.png?format=webp&resize=320x240&vertical=center"
        />

        <TaskCard
          id="D-128"
          title="conduct market reserch"
          description="reasearch similar app in market"
          priority="Low"
          type="ideation"
          progress={100}
          comments={8}
          links={7}
          assignees={[
            "https://randomuser.me/api/portraits/women/6.jpg",
            "https://randomuser.me/api/portraits/men/9.jpg"
          ]}
          image="https://via.placeholder.com/400"
        />

        <TaskCard
          id="D-150"
          title="Database Optimization"
          description="Optimize database queries and indexing"
          priority="High"
          type="Database"
          progress={100}
          comments={50}
          links={30}
          assignees={[
            "https://randomuser.me/api/portraits/men/1.jpg",
            "https://randomuser.me/api/portraits/women/2.jpg",
            "https://randomuser.me/api/portraits/men/3.jpg"
          ]}
          image="https://via.placeholder.com/400"
        />
      </div>
    </div>
  );
}

export default AppAC;
