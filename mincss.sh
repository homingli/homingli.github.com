stylus -c < website.styl > website.css
curl -X POST -s --data-urlencode 'input@website.css' https://cssminifier.com/raw > website.min.css
