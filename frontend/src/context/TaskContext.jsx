import { createContext, useState } from "react";
import API from "../api/axios";
import toast from "react-hot-toast";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchTasks = async () => {
        setLoading(true);
        try {
            const res = await API.get("/tasks");
            setTasks(res.data.tasks || []);
        } finally {
            setLoading(false);
        }
    };


    const createTask = async (title) => {
        try {
            const res = await API.post("/tasks", { title });
            setTasks([...tasks, res.data.task]);
            toast.success("Task added");
        } catch {
            toast.error("Error creating task");
        }
    };

    const updateTask = async (id, data) => {
        try {
            const res = await API.put(`/tasks/${id}`, data);
            setTasks(tasks.map(t => t._id === id ? res.data.task : t));
        } catch {
            toast.error("Error updating task");
        }
    };

    const deleteTask = async (id) => {
        await API.delete(`/tasks/${id}`);
        setTasks(tasks.filter(t => t._id !== id));
    };

    return (
        <TaskContext.Provider value={{ tasks, loading, fetchTasks, createTask, updateTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    );
};