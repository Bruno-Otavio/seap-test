const prismaClient = require('@prisma/client');
const prisma = new prismaClient.PrismaClient();

const get = (req, res) => {
    if (req.params.id !== undefined) {
        try {
            const lancamento = prisma.lancamento.findUnique({
                where: { id: req.params.id },
                include: { lancamentos: true },
            });

            res.status(200).json(lancamento).end();
        } catch (err) {
            res.status(404).json({ message: 'Lancamento not found' });
        }
    } else {
        try {
            const lancamentos = prisma.lancamento.findMany();
            res.status(200).json(lancamentos).end();
        } catch (err) {
            res.status(401).json({ message: 'Could not get lancamentos' });
        }
    }
}

const create = (req, res) => {
    try {
        const lancamento = prisma.lancamento.create({
            data: req.body,
        });
        res.status(202).json(lancamento).end();
    } catch (err) {
        res.status(401).json({ message: 'Could not get lancamentos' });
    }
}

const update = (req, res) => {
    try {
        const lancamento = prisma.lancamento.update({
            where: req.params.id,
            data: req.body,
        });
        res.status(202).json(lancamento).end();
    } catch (err) {
        res.status(404).json({ message: 'Could not update lancamentos' });
    }
}

const del = (req, res) => {
    try {
        const lancamento = prisma.lancamento.delete({
            where: req.params.id
        })
        res.status(200).json({ message: 'Lancamento deleted successfully' }).end();
    } catch (err) {
        res.status(404).json({ message: 'Could not delete lancamentos' });
    }
}

module.exports = {
    get,
    create,
    update,
    del,
};
