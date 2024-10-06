package app

import "net/http"

type App struct {
}

func NewApp() {

}

func (a *App) GetRouter() *http.ServeMux {
	r := http.NewServeMux()

	r.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {})

	return r
}
