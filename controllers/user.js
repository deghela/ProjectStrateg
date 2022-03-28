const userModel = require('.././models/userModel')

  exports.addUser = async function addUser (req, res, next) {
    const data = new userModel({
        name : req.body.name,
        login : req.body.login
    })
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
  }


  exports.signin = async (req, res, next) => {
    const jwt = require('jsonwebtoken');
    userModel.findOne({ name: req.body.name })
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      if(req.body.login === user.login){
        res.status(200).json({
            userId: user._id,
            token: jwt.sign(
              { userId: user._id },
              'TFV7OVFEV5KEER5NVER_SVEF6ECBEREBERETB',
              { expiresIn: '24h' }
            )
          });
      }else {
        return res.status(401).json({ error: 'Mot de passe incorrect !' });
      }
    }).catch(error => res.status(500).json({ erro : error.message, exp : "shg happen 2" }));
  }

exports.getUsers = async function getUsers (req, res) {
    res.status(200).json(await userModel.find({}))
  }

