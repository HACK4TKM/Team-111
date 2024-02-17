import User from "../../models/user.js";

const FetchProfile = async (req, res) => {
    try {
        const profile = await User.find({
            _id: req.params.id
        });
        res.json({ profile });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export default FetchProfile;
