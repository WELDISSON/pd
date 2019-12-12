import db from '../database/index';

export default {
    createCollection(req, res){
        if(!req.body.name){
            return res.status(400).json({
                error: ['name is required']
            });
        }
        db.query(`INSERT INTO collection SET ?`,{ name: req.body.name },
            (error, results) => {
            if (error) res.status(400).send(error);
            res.status(200)
            .send({
                'id': results.insertId,
                'name': req.body.name,
            });
        });
    }
}
