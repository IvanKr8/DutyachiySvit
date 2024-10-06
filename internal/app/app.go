package app

import "net/http"

type App struct {
}

func NewApp() {

}

func (a *App) GetRouter() *http.ServeMux {
	r := http.NewServeMux()

	r.HandleFunc("GET /api/get-products", a.getProducts)

	return r
}
