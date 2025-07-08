import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchTasksByIds } from '../api';
import { Link } from 'react-router-dom';

const STATUS_COLORS = {
    "To Do": "bg-gray-200 text-gray-800",
    "In Progress": "bg-blue-200 text-blue-800",
    "Done": "bg-green-200 text-green-800",
    "Blocked": "bg-red-200 text-red-800",
};

export default function Tasks() {
    const assignedTaskIds = JSON.parse(localStorage.getItem("assignedTaskIds") || "[]");

    const { data: tasks = [], isLoading, error } = useQuery({
        queryKey: ['userAssignedTasks', assignedTaskIds],
        queryFn: () => fetchTasksByIds(assignedTaskIds),
        enabled: assignedTaskIds.length > 0,
    });

    if (isLoading) return <div className="text-center py-20 text-gray-500">Loading your tasks...</div>;
    if (error) return <div className="text-center py-20 text-red-500">Error loading tasks: {error.message}</div>;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-semibold text-gray-800">My Tasks</h1>
                    <p className="text-gray-500 mt-1">All tasks that have been assigned to you.</p>
                </div>
                 {/* FIX: Corrected link to point to the proper route */}
                <Link 
                    to="/tasks/create" 
                    className="px-5 py-2 text-white bg-blue-600 rounded-lg font-medium shadow-sm hover:bg-blue-700 focus:outline-none"
                >
                    + Create New Task
                </Link>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task Name</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {tasks.length === 0 ? (
                                <tr>
                                    <td colSpan="4" className="text-center py-10 text-gray-500">You have not been assigned any tasks yet.</td>
                                </tr>
                            ) : (
                                tasks.map(task => (
                                    <tr key={task.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            <Link to={`/tasks/${task.id}`} className="text-blue-600 hover:underline">
                                                {task.fields["Task Name"]}
                                            </Link>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.fields["Project Name"]?.[0]}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.fields["Due Date"]}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${STATUS_COLORS[task.fields.Status]}`}>
                                                {task.fields.Status}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}