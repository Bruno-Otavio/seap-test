const prismaClient = require('@prisma/client');
const prisma = new prismaClient.PrismaClient();

const get = (req, res) => {
    if (req.params.id !== undefined) {
        try {
            const user = prisma.usuario.findUnique({
                where: { id: req.params.id },
                include: { lancamentos: true },
            });

            res.status(200).json(user).end();
        } catch (err) {
            res.status(404).json({ message: 'User not found' });
        }
    } else {
        try {
            const users = prisma.usuario.findMany();
            res.status(200).json(users).end();
        } catch (err) {
            res.status(401).json({ message: 'Could not get users' });
        }
    }
}

const create = (req, res) => {
    try {
        const user = prisma.usuario.create({
            data: req.body,
        });
        res.status(202).json(user).end();
    } catch (err) {
        res.status(401).json({ message: 'Could not get users' });
    }
}

const update = (req, res) => {
    try {
        const user = prisma.usuario.update({
            where: req.params.id,
            data: req.body,
        });
        res.status(202).json(user).end();
    } catch (err) {
        res.status(404).json({ message: 'Could not update users' });
    }
}

const del = (req, res) => {
    try {
        const user = prisma.usuario.delete({
            where: req.params.id
        })
        res.status(200).json({ message: 'User deleted successfully' }).end();
    } catch (err) {
        res.status(404).json({ message: 'Could not delete users' });
    }
}

module.exports = {
    get,
    create,
    update,
    del,
};
