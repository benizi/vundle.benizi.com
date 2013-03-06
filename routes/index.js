exports.vundle = function(req, res){
  res.set('Content-Type', 'text/plain');
  var full_url = req.protocol + '://' + req.get('host') + req.url;
  res.render('vundle', {locals: {full_url: full_url}});
};
