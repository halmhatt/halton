
JSFILES = halton.js
JSTESTFILES = $(wildcard test/*Spec.js)

jshint: $(JSFILES)
	jshint $(JSFILES)

jscs: $(JSFILES)
	jscs $(JSFILES)

mocha: $(JSFILES) $(JSTESTFILES)
	mocha

coverage: $(JSFILES) $(JSTESTFILES)
	mocha --reporter mocha-istanbul

test_js: jshint jscs

test: test_js mocha coverage