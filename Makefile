TAG?=1.3.4
NAME:=helm-dashboard
DOCKER_REPOSITORY:=blacklee123
DOCKER_IMAGE_NAME:=$(DOCKER_REPOSITORY)/$(NAME)
DATE    ?= $(shell date +%FT%T%z)
VERSION:=$(shell grep 'VERSION' pkg/version/version.go | awk '{ print $$4 }' | tr -d '"')

.PHONY: test
test: ; $(info $(M) start unit testing...) @
	@go test $$(go list ./... | grep -v /mocks/) --race -v -short -coverpkg=./... -coverprofile=profile.cov
	@echo "\n*****************************"
	@echo "**  TOTAL COVERAGE: $$(go tool cover -func profile.cov | grep total | grep -Eo '[0-9]+\.[0-9]+')%  **"
	@echo "*****************************\n"

.PHONY: pull
pull: ; $(info $(M) Pulling source...) @
	@git pull

.PHONY: build_go
build_go: $(BIN) ; $(info $(M) Building GO...) @ ## Build program binary
	go build \
		-ldflags '-X main.version=$(VERSION) -X main.buildDate=$(DATE)' \
		-o bin/dashboard .

.PHONY: build_go_linux
build_go_linux: $(BIN) ; $(info $(M) Building GO...) @ ## Build program binary
	GOOS=linux GOARCH=amd64 go build \
		-ldflags '-X main.version=$(VERSION) -X main.buildDate=$(DATE)' \
		-o bin/dashboard .

.PHONY: build_ui
build_ui: $(BIN) ; $(info $(M) Building UI...) @ ## Build program binary
	cd frontend && npm i && npm run build && cd ..

.PHONY: build
build: build_ui build_go ; $(info $(M) Building executable...) @ ## Build program binary

.PHONY: debug
debug: ; $(info $(M) Running dashboard in debug mode...) @
	@DEBUG=1 ./bin/dashboard

build-container:
	docker buildx build \
	--platform=linux/amd64 \
	-t $(DOCKER_IMAGE_NAME):$(VERSION) \
	--load \
	-f Dockerfile .

push-container:
	docker tag $(DOCKER_IMAGE_NAME):$(VERSION) $(DOCKER_IMAGE_NAME):latest
	docker push $(DOCKER_IMAGE_NAME):$(VERSION)
	docker push $(DOCKER_IMAGE_NAME):latest