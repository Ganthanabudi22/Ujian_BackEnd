const db = require('../1.database/index')

module.exports = {
    getAllMovie : (req,res) => {
        var sql = `select * from movies;`
        db.query(sql, (err,result)=>{
            if(err) throw err
            res.send(result)
        })
    },
    addMovies : (req,res)=>{
        var data = {
            nama : req.body.nama,
            tahun :req.body.tahun,
            description : req.body.description

        }
        var sql = `insert into movies set?;`
        db.query(sql,data,(err,result)=>{
            if (err) throw err
            res.redirect('/api/getAllMovie')
        })
    },
    updateMovies : (req,res)=>{
        var id = req.params.id
        var nama = req.body.nama
        var tahun =req.body.tahun
        var description = req.body.description
        var sql = `update movies set nama = '${nama}',tahun = ${tahun},description = '${description}' where id = ${id};`
        db.query(sql,(err,result)=>{
            if(err) throw err
            res.redirect('/api/getAllMovie')
        })
    },
    deleteMovies : (req,res) => {
        var id = req.params.id
        var sql= `delete from movies where id = ${id};`
        db.query(sql, (err,result)=>{
            if(err) throw err 
            res.redirect('/api/getAllMovie')
        })
    },

    //=================================== categories ===================================
    getAllCategories : (req,res) => {
        var sql = `select * from categories;`
        db.query(sql, (err,result)=>{
            if(err) throw err
            res.send(result)
        })
    },
    addCategories : (req,res)=>{
        var data = {
            nama : req.body.nama
        }
        var sql = `insert into categories set?;`
        db.query(sql,data,(err,result)=>{
            if (err) throw err
            res.redirect('/api/getAllcategories')
        })
    },
    updateCategories : (req,res)=>{
        var id = req.params.id
        var nama = req.body.nama
        var sql = `update categories set nama = '${nama}' where id = ${id};`
        db.query(sql,(err,result)=>{
            if(err) throw err
            res.redirect('/api/getAllcategories')
        })
    },
    deleteCategories : (req,res) => {
        var id = req.params.id
        var sql= `delete from categories where id = ${id};`
        db.query(sql, (err,result)=>{
            if(err) throw err 
            res.redirect('/api/getAllcategories')
        })
    },
//=============================================== movcat ================================= 
getAllMovcat : (req,res) => {
    var sql = `select m.nama as nama_movies, c.nama as nama_category from movcat 
                join movies m on idmovie = m.id
                join categories c on idcategory = c.id;`
    db.query(sql, (err,result)=>{
        if(err) throw err
        res.send(result)
    })
},
addMovcat : (req,res)=>{
    var data = {
        idmovie : req.body.nama_movie,
        idcategory : req.body.nama_category
    }
    var sql = `insert into movcat set?;`
    db.query(sql,data,(err,result)=>{
        if (err) throw err
        res.redirect('/api/getAllMovcat')
    })
},
    deleteMovcat : (req,res) => {
        var id = req.params.id
        var sql= `delete from movcat where id = ${id};`
        db.query(sql, (err,result)=>{
            if(err) throw err 
            res.redirect('/api/getAllMovcat')
        })
    }

}