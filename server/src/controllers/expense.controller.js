const ExpenseSchema = require('../models/expense.modal');

// Add an Expense
exports.addExpense = async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  try {
    if (!title || !category || !description || !date) {
      return res.status(400).json({ message: 'All fields are required!' });
    }

    if (amount <= 0 || typeof amount !== 'number') {
      return res
        .status(400)
        .json({ message: 'Amount must be a positive number!' });
    }

    const expense = new ExpenseSchema({
      userId: req.userId,
      title,
      amount,
      category,
      description,
      date,
    });

    await expense.save();
    res.status(200).json({ message: 'Expense Added', expense });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get Expenses for a User
exports.getExpenses = async (req, res) => {
  try {
    const expenses = await ExpenseSchema.find({ userId: req.userId }).sort({
      createdAt: -1,
    });
    res.status(200).json(expenses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update an Expense
exports.updateExpense = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const expense = await ExpenseSchema.findOne({
      _id: id,
      userId: req.userId,
    });

    if (!expense) {
      return res
        .status(404)
        .json({ message: 'Expense not found or not owned by user.' });
    }

    Object.assign(expense, updateData);
    await expense.save();
    res.status(200).json({ message: 'Expense Updated', expense });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete an Expense
exports.deleteExpense = async (req, res) => {
  const { id } = req.params;

  try {
    const expense = await ExpenseSchema.findOneAndDelete({
      _id: id,
      userId: req.userId,
    });

    if (!expense) {
      return res
        .status(404)
        .json({ message: 'Expense not found or not owned by user.' });
    }

    res.status(200).json({ message: 'Expense Deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
