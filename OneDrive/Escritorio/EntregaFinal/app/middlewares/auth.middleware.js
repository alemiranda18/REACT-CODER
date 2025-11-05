export const isAdmin = (req, res, next) => {
    if (req.user?.role === 'admin') return next();
    return res.status(403).json({ error: 'Acceso restringido a administradores' });
};

export const isUser = (req, res, next) => {
    if (req.user?.role === 'user') return next();
    return res.status(403).json({ error: 'Solo usuarios pueden realizar compras' });
};