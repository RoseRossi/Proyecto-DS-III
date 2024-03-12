#Golang image
FROM golang:1.19.8

WORKDIR /server_go

COPY lienzo-go/go.mod lienzo-go/go.sum ./
RUN go mod download

COPY lienzo-go/ .

RUN go build -o server ./src/main.go

EXPOSE 4700

CMD ["./server"]
