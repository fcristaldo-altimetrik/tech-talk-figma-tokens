
install:
	@rm -rf node_modules
	@npm i

start:
	@echo "Running Project"
	@npm run style-generate
	@npm run start