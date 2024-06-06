const ReplaceFood = require('../models/ReplaceFood');

const saveReplaceFood = async (req, res) => {
    const { userId, productId } = req.body;

    try {
        const newReplaceFood = new ReplaceFood({
            userId,
            productId
        });

        await newReplaceFood.save();
        res.json({ message: 'Produit substitué avec succès!' });
    } catch (error) {
        console.error('Erreur lors de la substitution du produit:', error);
        res.status(500).json({ message: 'Erreur lors de la substitution du produit.' });
    }
};

module.exports = { saveReplaceFood }
