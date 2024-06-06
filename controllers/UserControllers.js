const Users = require('../models/User')
const Food = require('../models/Product')
const ReplaceFood = require('../models/ReplaceFood')

const loginUser = (req, res) => {
    const email = req.body.email;
    const mot_de_passe = req.body.mot_de_passe;
    Users.findOne({ 'email': email, 'mot_de_passe': mot_de_passe })
        .then(user => {
            if (!user) {
                return res.status(404).json({ notFound: 'Utilisateur non trouvé' });
            }
            res.status(200).json(user)
            console.log(user)
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Erreur de serveur' });
        });
}

const registerUser = (req, res) => {
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const email = req.body.email;
    const mot_de_passe = req.body.mot_de_passe;

    const newUser = new Users({
        nom,
        prenom,
        email,
        mot_de_passe,
    })
    newUser.save()
        .then(user => {
            res.status(200).json({ message: 'utilisateur enregistré!' })
            console.log(user)
        })
        .catch(err => {
            console.error(err);
            res.status(400).json({ error: 'Erreur client' });
        });
}

const addProductToHisBasket = async (req, res) => {

    const { userId, productId } = req.body;

    const newCart = new ReplaceFood({
        userId: userId,
        productId: productId,
    });

    res.status(201).json( await newCart.save());
};

const getCartUser = async (req, res) => {
    const id = req.params.id;

    const cart = await ReplaceFood.find({ "userId": id });

    if (cart.length === 0) {
        return res.status(404).json({ notFound: 'Produits non trouvés!' });
    }

    const productIds = cart.map(cart => cart.productId);
    const products = await Food.find({ "_id": { $in: productIds } });

    if (products.length === 0) {
        return res.status(404).json({ notFound: 'Produits non trouvés!' });
    }

    res.status(200).json(products);
}

const deleteCartUser = (req, res) => {

    const { userId, productId } = req.params


    ReplaceFood.deleteOne({ "userId": userId, "productId": productId  })
        .then(deletedCart => {
            res.status(200).json({ message: "Panier(s) Supprimé(s)" });

            console.log(deletedCart);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Erreur de serveur lors de la suppression du panier' });
        });
};


module.exports = { loginUser, getCartUser, addProductToHisBasket, registerUser, deleteCartUser };
