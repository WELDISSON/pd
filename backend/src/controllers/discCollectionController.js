import db from '../database/index';

export default {
    insertDiscInCollection(req, res){
        if(!req.body.discName, !req.body.collectionName ){
            return res.status(400).json({
                error: ['discName, collectionName is required']
            });
        }
        db.query(`INSERT INTO discCollection SET ?`,{ 
            disc_name: req.body.discName, 
            collection_name: req.body.collectionName
        },
            (error, results) => {
            if (error) res.status(400).send(error);
            res.status(200)
            .send({
                'results': results
            });
        });
    },
    deleteDiscFromCollection(req, res){
        db.query(`DELETE FROM discCollection WHERE disc_name = "${req.query.discName}"`,
        (error, results) => {
            if (error) res.status(400).send(error);
            if (results) res.status(200).send(results);
        });
    },
    getDiscsfromcollection(req, res){
        if(!req.query.collectionName){
            return res.status(400).json({
                error: ['collectionName is required in params']
            });
        }
        db.query(`SELECT * FROM discCollection where collection_name like "${req.query.collectionName}";`,
        (error, results) => {
            if (error) res.status(400).send(error);
            if (results) res.status(200).send({
                results
            });
        });
    }
}
