const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  try {
    const { title } = req.body;

    // Validation
    if (!title || title.trim() === '') {
      return res.status(400).json({ msg: "Task title is required" });
    }

    if (title.trim().length < 3) {
      return res.status(400).json({ msg: "Task title must be at least 3 characters" });
    }

    if (title.trim().length > 200) {
      return res.status(400).json({ msg: "Task title must be less than 200 characters" });
    }

    const task = await Task.create({
      user: req.user,
      title: title.trim(),
    });

    res.status(201).json({ 
      msg: "Task created successfully", 
      task 
    });
  } catch (err) {
    console.error("Create task error:", err);
    res.status(500).json({ msg: "Server error while creating task" });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const { page = 1, limit = 10, status, search } = req.query;
    
    // Build query
    let query = { user: req.user };
    
    // Filter by status
    if (status === 'completed') {
      query.completed = true;
    } else if (status === 'pending') {
      query.completed = false;
    }
    
    // Search functionality
    if (search) {
      query.title = { $regex: search, $options: 'i' };
    }

    const skip = (page - 1) * limit;
    
    const tasks = await Task.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Task.countDocuments(query);

    res.json({
      tasks,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (err) {
    console.error("Get tasks error:", err);
    res.status(500).json({ msg: "Server error while fetching tasks" });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { title, completed } = req.body;
    const taskId = req.params.id;

    // Find task and ensure it belongs to the user
    const task = await Task.findOne({ _id: taskId, user: req.user });
    
    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }

    // Validation for title update
    if (title !== undefined) {
      if (!title || title.trim() === '') {
        return res.status(400).json({ msg: "Task title cannot be empty" });
      }
      
      if (title.trim().length < 3) {
        return res.status(400).json({ msg: "Task title must be at least 3 characters" });
      }
      
      if (title.trim().length > 200) {
        return res.status(400).json({ msg: "Task title must be less than 200 characters" });
      }
      
      task.title = title.trim();
    }

    // Update completed status
    if (completed !== undefined) {
      task.completed = completed;
    }

    await task.save();

    res.json({ 
      msg: "Task updated successfully", 
      task 
    });
  } catch (err) {
    console.error("Update task error:", err);
    res.status(500).json({ msg: "Server error while updating task" });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;

    // Find task and ensure it belongs to the user
    const task = await Task.findOne({ _id: taskId, user: req.user });
    
    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }

    await Task.findByIdAndDelete(taskId);

    res.json({ msg: "Task deleted successfully" });
  } catch (err) {
    console.error("Delete task error:", err);
    res.status(500).json({ msg: "Server error while deleting task" });
  }
};