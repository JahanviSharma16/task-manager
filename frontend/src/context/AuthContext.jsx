import { createContext, useState } from "react";
import API from "../api/axios";
import toast from "react-hot-toast";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem("token"));

    const login = async (data) => {
        try {
            const res = await API.post("/auth/login", data);
            localStorage.setItem("token", res.data.token);
            setUser(res.data.token);
            toast.success("Login successful");
        } catch {
            toast.error("Invalid credentials");
        }
    };

    const register = async (data) => {
        try {
            await API.post("/auth/register", data);
            toast.success("Registration successful! Please login.");
        } catch (error) {
            toast.error(error.response?.data?.msg || "Registration failed");
            throw error;
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};