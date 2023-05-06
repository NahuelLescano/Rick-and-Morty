const { User } = require('../db');

const postUser = async (req, res) => {
    const { email, password } = req.body;
    if ((!email || email.trim() === '') ||
        (!password || password.trim() === '')) {
            return res.status(400).send('Missing or invalid data');
    }

    try {
        const [user] = await User.findOrCreate({
            where: { email, password },
        });

        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = postUser;