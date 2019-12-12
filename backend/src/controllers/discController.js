import db from '../database/index';

export default {
    createDisc(req, res){
        if(!req.body.name || !req.body.artist || !req.body.year){
            return res.status(400).json({
                error: ['name, artist and year is required']
            });
        }
        db.query(`INSERT INTO disc SET ?`,{  
            name: req.body.name, 
            artist: req.body.artist, 
            year: req.body.year, 
            info: req.body.info,
        },
            (error, results) => {
            if (error) res.status(400).send(error);
            if (results)res.status(200)
            .send({
                'id': results.insertId,
                'disc': req.body.name,
                'artist': req.body.artist,
                'year': req.body.year,
                'info': req.body.info
            });
        });
    },
    updateDisc(req, res){
        console.log(req.params);
        db.query(`UPDATE disc SET name = ?, artist = ?, year = ?, info = ?, WHERE id = ${req.params.id}`,[
            req.body.name,
            req.body.artist,
            req.body.year,
            req.body.info
        ],(error, results) => {
            if (error) res.status(400).send(error);
            if (results)res.status(200).send({'results': results});
        });
    },
}
