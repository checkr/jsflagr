gen:
	rm -rf .swagger-codegen/
	rm -rf docs/
	rm -rf src/
	rm -rf test/
	rm -rf .swagger-codegen-ignore
	rm -rf .travis.yml
	rm -rf README.md
	rm -rf git_push.sh
	rm -rf mocha.opts
	rm -rf package.json
	docker run --rm -v ${PWD}:/local swaggerapi/swagger-codegen-cli generate \
		-i /local/swagger.yaml \
		-l javascript \
		-D projectName=jsflagr \
		-D moduelName=jsflagr \
		-D licenseName="Apache 2.0" \
		-D projectDescription="jsflagr is a Javascript client SDK for Flagr." \
		-o /local/
	git co -- package.json
	git co -- package-lock.json
