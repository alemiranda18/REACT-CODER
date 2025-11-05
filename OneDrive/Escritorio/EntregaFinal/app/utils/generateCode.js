import crypto from 'crypto';

export const generateCode = () => crypto.randomBytes(6).toString('hex');