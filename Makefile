SERVER_NAME := packages.dns.ad.zopa.com:5002
IMAGE_NAME := $(shell cat ./IMAGE_NAME)
ASSET_PATH := /usr/src/app/dist/
VERSION := $(shell cat ./VERSION)

version:
	@echo $(VERSION)

image:
	@echo $(IMAGE_NAME)
	
assets:
	@echo $(ASSET_PATH)

pull:
	-docker pull $(SERVER_NAME)/$(IMAGE_NAME):latest

build:
	mkdir -p zopa_certs
	curl -skS -L http://packages.dns.ad.zopa.com/artifactory/tools-dev-local/zopa_certs.tar | tar xvf - -C zopa_certs
	docker build -t $(IMAGE_NAME) .

test: build

tag:
	@echo "***Tagging $(IMAGE_NAME) $(VERSION)***"
	docker tag $(IMAGE_NAME) $(IMAGE_NAME):$(VERSION)
	docker tag $(IMAGE_NAME) $(SERVER_NAME)/$(IMAGE_NAME):$(VERSION)

push:
	@echo "***Pushing $(IMAGE_NAME) $(VERSION)***"
	docker push $(SERVER_NAME)/$(IMAGE_NAME):$(VERSION)

publish: test tag push

clean:
	rm -rf zopa_certs
