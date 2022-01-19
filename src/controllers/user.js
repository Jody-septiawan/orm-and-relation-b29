// import model here
const { user } = require('../../models');

exports.addUsers = async (req, res) => {
  try {
    const data = req.body;

    const newData = await user.create(data);

    res.send({
      status: 'success',
      message: 'Add user finished',
      newData,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: 'failed',
      message: 'server error',
    });
  }
};
