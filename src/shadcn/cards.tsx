import React, { useState } from 'react';
import { ToDoCard, OnProgressCard, InReviewCard, CompletedCard } from './TaskCards';
import TopCardTodo from './TopCardTodo.tsx';
import TopCardReview from './TopCardReview.tsx';
import TopCardProgress from './TopCardProgress.tsx';
import TopCardComplete from './TopCardComplete.tsx';
interface TaskInput {
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
  status: 'to-do' | 'on progress' | 'in review' | 'completed';
}

function App() {
  const [tasks, setTasks] = useState<TaskInput[]>([]);
  const [formData, setFormData] = useState<TaskInput>({
    id: '',
    title: '',
    description: '',
    priority: 'Low',
    type: '',
    progress: 0,
    comments: 0,
    links: 0,
    assignees: [],
    image: '',
    status: 'to-do',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'progress' ? parseInt(value) : value, 
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const normalizedTask = { ...formData, status: formData.status.toLowerCase() }; 
    setTasks((prev) => [...prev, normalizedTask]);
    setFormData({
      id: '',
      title: '',
      description: '',
      priority: 'Low',
      type: '',
      progress: 0,
      comments: 0,
      links: 0,
      assignees: [],
      image: '',
      status: 'to-do',
    }); // Reset form
    setIsModalOpen(false);
  };

  // Filter tasks by category
  const filterTasksByStatus = (status: string) =>
    tasks.filter((task) => task.status === status);

  return (
    <div className="bg-gray-200 p-5 w-280 mb-2">
      {/* Button to Open Modal */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 text-white py-2 px-4 rounded mb-5"
      >
        Create New Task
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded shadow-md w-full max-w-lg h-full max-h-screen overflow-y-auto p-6">
            <h6 className="text-xl font-semibold text-gray-900 mb-4">Create a New Task</h6>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="id"
                placeholder="Task ID"
                value={formData.id}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
              <input
                type="text"
                name="title"
                placeholder="Task Title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
              <textarea
                name="description"
                placeholder="Task Description"
                value={formData.description}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              ></textarea>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              >
                <option value="High">High</option>
                <option value="Low">Low</option>
              </select>
              <input
                id="id"
                type="text"
                name="type"
                placeholder="Task Type"
                value={formData.type}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
              <label>Progress %</label>
              <input
                type="number"
                name="progress"
                placeholder="Progress (%)"
                value={formData.progress}
                onChange={handleChange}
                min="0"
                max="100"
                required
                className="w-full px-3 py-2 border rounded"
              />
              <label>NUmber message</label>
              <input
                type="number"
                name="comments"
                placeholder="Number of Comments"
                value={formData.comments}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
              <label>Number comments</label>
              <input
                type="number"
                name="links"
                placeholder="Number of Links"
                value={formData.links}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={formData.image}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              >
                <option value="to-do">To-Do</option>
                <option value="on progress">On Progress</option>
                <option value="in review">In Review</option>
                <option value="completed">Completed</option>
              </select>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                  Create Task
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-300 text-black py-2 px-4 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Display Tasks by Category */}
      <div className="flex gap-4 overflow-x-auto">
        <div className="bg-white p-4 rounded shadow w-1/4">
          <TopCardTodo/>
          {filterTasksByStatus('to-do').map((task) => (
            <ToDoCard key={task.id} {...task} />
          ))}
        </div>
        <div className="bg-white p-4 rounded shadow w-1/4">
        <TopCardProgress/>
          {filterTasksByStatus('on progress').map((task) => (
            <OnProgressCard key={task.id} {...task} />
          ))}
        </div>
        <div className="bg-white p-4 rounded shadow w-1/4">
        <TopCardReview/>
          {filterTasksByStatus('in review').map((task) => (
            <InReviewCard key={task.id} {...task} />
          ))}
        </div>
        <div className="bg-white p-4 rounded shadow w-1/4">
        <TopCardComplete/>
          {filterTasksByStatus('completed').map((task) => (
            <CompletedCard key={task.id} {...task} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
