var express = require('express')

module.exports.showForm = function(req, res) {
    products = req.app.locals.products
    res.render('surveysession.pug', {products: products})
}

module.exports.showResult = function(req, res) {
    gender = req.body.gender
    productidx = req.body.vote;
    products = req.app.locals.products;
    surveyresults = req.app.locals.surveyresults;
    sess = req.session;
    if ( 'vote' in sess) res.render('surveysessionresult.ejs', { products: products, surveyresults: surveyresults});
    else {
        sess.vote = productidx;
        gender = req.body.gender
        productidx = req.body.vote;
        if (gender == 0)
            surveyresults.mp[productidx]++;
        else
            surveyresults.fp[productidx]++;
            res.render('surveyresult.ejs', { products: products, surveyresults: surveyresults})
    }
}