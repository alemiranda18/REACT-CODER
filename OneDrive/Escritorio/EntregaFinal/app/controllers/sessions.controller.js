import jwt from 'jsonwebtoken';
import { UserDAO } from '../dao/User.dao.js';
import { createHash, isValidPassword } from '../utils/hash.js';
import { UserDTO } from '../dto/User.dto.js';

const userDAO = new UserDAO();
const JWT_SECRET = process.env.JWT_SECRET;

export const register = async (req, res) => {
    const { first_name, last_name, email, age, password } = req.body;
    const exists = await userDAO.findByEmail(email);
    if (exists) return res.status(400).json({ error: 'Usuario ya existe' });

    const user = await userDAO.createUser({
        first_name,
        last_name,
        email,
        age,
        password: createHash(password)
    });

    res.status(201).json({ message: 'Usuario registrado', user });
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await userDAO.findByEmail(email);
    if (!user || !isValidPassword(user, password)) {
        return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login exitoso', token });
};

export const current = async (req, res) => {
    const user = req.user;
    const dto = new UserDTO(user);
    res.status(200).json({ user: dto });
};