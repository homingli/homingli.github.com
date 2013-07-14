stylus -c < website.styl > website.css
curl -X POST -s --data-urlencode 'input@website.css' http://cssminifier.com/raw > website.min.css
