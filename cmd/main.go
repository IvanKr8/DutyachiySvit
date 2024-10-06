package main

import (
	"fmt"
	"net/http"
	"os"
)

func main() {
	port, ok := os.LookupEnv("PORT")
	if !ok {
		fmt.Println("Port not found")
		port = "8000"
	} else {
		fmt.Printf("Running the server on port %s\n", port)
	}

	err := http.ListenAndServe("", nil)
	if err != nil {
		fmt.Print("Server run error", err)
	}
}
