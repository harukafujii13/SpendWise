const IncomeSchema = require('../models/income.modal');

// Add an Income
exports.addIncome = async (req, res) => {
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

    const income = new IncomeSchema({
      userId: req.userId,
      title,
      amount,
      category,
      description,
      date,
    });

    await income.save();
    res.status(200).json({ message: 'Income Added', income });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get Incomes for a User
exports.getIncomes = async (req, res) => {
  try {
    const incomes = await IncomeSchema.find({ userId: req.userId }).sort({
      createdAt: -1,
    });
    res.status(200).json(incomes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update an Income
exports.updateIncome = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const income = await IncomeSchema.findOne({ _id: id, userId: req.userId });

    if (!income) {
      return res
        .status(404)
        .json({ message: 'Income not found or not owned by user.' });
    }

    Object.assign(income, updateData);
    await income.save();
    res.status(200).json({ message: 'Income Updated', income });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete an Income
exports.deleteIncome = async (req, res) => {
  const { id } = req.params;

  try {
    const income = await IncomeSchema.findOneAndDelete({
      _id: id,
      userId: req.userId,
    });

    if (!income) {
      return res
        .status(404)
        .json({ message: 'Income not found or not owned by user.' });
    }

    res.status(200).json({ message: 'Income Deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
