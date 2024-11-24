var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');

let Book = require('../model/book');
const book = require('../model/book');
let bookController = require('../controllers/book.js')



/* the codes here import the contacts collection, guides the user to the pages where contacts get added/edited or removed from the mongoose collection 
    and also view the collection with the new updates to it.  
*/


router.get('/',async(req,res,next)=>{
try{
    const BookList = await Book.find();
    res.render('Book/list',{
        title:'My Contacts',
        BookList:BookList
    })}
    catch(err){
        console.error(err);
        res.render('Book/list',{
            error:'Error on the server'
        })
    }
    });



    


router.get('/add',async(req,res,next)=>{
    try{
        res.render('Book/add',{
            title: 'Add Book'
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('Book/list',{
            error:'Error on the server'
        })
    }
});

router.post('/add',async(req,res,next)=>{
    try{
        let newBook = Book({
            "Name":req.body.Name,
            "PhoneNumber":req.body.PhoneNumber,
            "Email":req.body.Email,
            "Notes":req.body.Notes
        });
        Book.create(newBook).then(()=>{
            res.redirect('/bookslist');
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('Book/list',{
            error:'Error on the server'
        })
    }
});

router.get('/edit/:id',async(req,res,next)=>{
    try{
        const id = req.params.id;
        const bookToEdit= await Book.findById(id);
        res.render('Book/edit',
            {
                title:'Edit Book',
                Book:bookToEdit
            }
        )
    }
    catch(err)
    {
        console.error(err);
        next(err); // passing the error
    }
});

router.post('/edit/:id',async(req,res,next)=>{
    try{
        let id=req.params.id;
        let updatedBook = Book({
            "_id":id,
            "Name":req.body.Name,
            "PhoneNumber":req.body.PhoneNumber,
            "Email":req.body.Email,
            "Notes":req.body.Notes
        });
        Book.findByIdAndUpdate(id,updatedBook).then(()=>{
            res.redirect('/bookslist')
        })
    }
    catch(err){
        console.error(err);
        res.render('Book/list',{
            error:'Error on the server'
        })
    }
});

router.get('/delete/:id',async(req,res,next)=>{
    try{
        let id=req.params.id;
        Book.deleteOne({_id:id}).then(()=>{
            res.redirect('/bookslist')
        })
    }
    catch(error){
        console.error(err);
        res.render('Book/list',{
            error:'Error on the server'
        })
    }
});
module.exports = router;