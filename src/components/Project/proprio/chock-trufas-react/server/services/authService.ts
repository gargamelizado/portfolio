import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { config } from '../config.js';

const userRecord = {
  email: 'admin@chocktrufas.com.br',
  passwordHash: bcrypt.hashSync('admin123', 10),
};

export const authService = {
  async login(email: string, password: string) {
    const isValid = email === userRecord.email && (await bcrypt.compare(password, userRecord.passwordHash));

    if (!isValid) {
      throw new Error('Credenciais inválidas.');
    }

    return jwt.sign({ email, role: 'admin' }, config.jwtSecret, {
      expiresIn: config.jwtExpiresIn,
    });
  },

  verifyToken(token: string) {
    try {
      const decoded = jwt.verify(token, config.jwtSecret) as { email: string; role: string };
      return Boolean(decoded?.email && decoded?.role);
    } catch {
      return false;
    }
  },
};
