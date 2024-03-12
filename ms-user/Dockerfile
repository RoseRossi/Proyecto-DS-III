#Golang image
FROM golang:1.19.8

WORKDIR /server_go

COPY ms-user/go.mod ms-user/go.sum ./
RUN go mod download

COPY ms-user/ .

RUN go build -o server ./src/main.go

EXPOSE 4700

CMD ["./server"]
