const Cont = require('../model/cont')

const S = {}

// inicialisa el QR
S.GetCont = async (req, res) => {
    const D = await Cont.find()
    res.json(D)
}


S.PostCont = async (req, res) => {
    const {name,numer}= req.body
    const T = new Cont({numer, name})
   await T.save()
    res.send('guardado')
}
S.DeleteCont = async (req, res) => {
    await Cont.deleteMany()
    res.send('borado')
}

module.exports = S;