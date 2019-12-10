import db from '../database/index';

export default {
    createDisc(req, res){
        if(!req.body.name || !req.body.artist || !req.body.year || !req.body.info || !req.){
            return res.status(400).json({
                error: ['require name, artist, year, info']
            });
        }
        db.query(`INSERT INTO disc SET ?`,{ name: req.body.name, artist: req.body.artist, year: req.body.year, info: req.body.info },
            (error, results) => {
            if (error) res.status(400).send(error);
            res.status(200)
            .send({
                'id': results.insertId,
                'disc': req.body.name,
                'artist': req.body.artist,
                'year': req.body.year,
                'info': req.body.info
            });
        });
    }
}
