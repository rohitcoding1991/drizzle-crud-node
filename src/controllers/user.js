const { db } = require('../db/setup');
const { users } = require('../db/schema');

exports.createUser = async (req, res) => {
  const { name, email } = req.body;

  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    return res.status(400).json({ error: 'validation_error', message: 'Name is required' });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
    return res.status(400).json({ error: 'validation_error', message: 'Email is missing or invalid' });
  }

  try {
    await db.insert(users).values({ name: name.trim(), email: email.trim() });
    return res.status(201).json({ message: 'User added successfully' });
  } catch (error) {
    console.log('Error while creating user', error);
    return res.status(500).json({ error: 'server_error', message: 'Unable to add' });
  }
};


exports.getUserById = async (req, res) => {
  const { id } = req.params;
  if (!id || isNaN(id)) {
    return res.status(400).json({ error: 'validation_error', message: 'Invalid or missing ID' });
  }
  try {
    const user = await db.select().from(users).where({ id }).limit(1);
    
    if (user.length === 0) {
      return res.status(404).json({ error: 'not_found', message: 'User not found' });
    }
    return res.status(200).json(user[0]);
  } catch (error) {
    console.log('Error while fetching user', error);
    return res.status(500).json({ error: 'server_error', message: 'Unable to fetch user' });
  }
};

exports.updateUser = async (req, res) => {
  const { name, email,id } = req.query;

  if (!id || isNaN(id)) {
    return res.status(400).json({ error: 'validation_error', message: 'Invalid or missing ID' });
  }

  try {
    const updateData = {};

    if (name) updateData.name = name.trim();
    if (email) updateData.email = email.trim();

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ error: 'validation_error', message: 'No data provided for update' });
    }

    const result = await db
      .update(users)
      .set(updateData)
      .where({ id });

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'not_found', message: 'User not found' });
    }

    return res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    console.log('Error while updating user', error);
    return res.status(500).json({ error: 'server_error', message: 'Unable to update user' });
  }
};


exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!id || isNaN(id)) {
    return res.status(400).json({ error: 'validation_error', message: 'Invalid or missing ID' });
  }

  try {
    const [result] = await db.delete(users).where({ id });
 console.log({result});
    const affectedRows = result.affectedRows;
console.log({affectedRows});

    if (affectedRows === 0) {
      return res.status(404).json({ error: 'not_found', message: 'User not found' });
    }

    return res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.log('Error while deleting user', error);
    return res.status(500).json({ error: 'server_error', message: 'Unable to delete user' });
  }
};


