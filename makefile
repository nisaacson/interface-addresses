MOCHA?=node_modules/.bin/mocha
CONFIG?=test/config.json
REPORTER?=tap
FLAGS=--config $(CONFIG) --reporter $(REPORTER)

test:
	$(MOCHA) $(shell find test/* -prune -name "*test.js") $(FLAGS)

.PHONY: test

