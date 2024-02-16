import Marketplace from "../../models/marketplace.js"


const Marketplace = async(req, res) => {
    try {
        const name = req.body.name
        const price = req.body.price
        const desc = req.body.desc
        const quantity = req.body.quantity
        const img = req.body.img
    

        const Marketplace = new Marketplace({
            name: name,
            price: price,
            desc: desc,
            quantity: quantity,
            img: img
        });

        Marketplace.save()
        
        res.send({ success: true, message: "New product added successfully!" });
    } catch (error) {
        console.log(error)
    }
}

export default Marketplace