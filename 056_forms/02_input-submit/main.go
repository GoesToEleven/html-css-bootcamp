package main

import (
	"net/http"
	"html/template"
	"fmt"
)

var tpl *template.Template

func init() {
	tpl = template.Must(template.ParseFiles("index.html"))
}


func main() {
	http.HandleFunc("/", index)
	http.Handle("/public/", http.StripPrefix("/public", http.FileServer(http.Dir("./public"))))
	http.ListenAndServe(":8080", nil)
}

func index(res http.ResponseWriter, req *http.Request) {

	fmt.Println(req.PostForm)
	fmt.Printf("%T\n", req.PostForm)

	data := struct{
		Method string
		URL string
		Submissions map[string][]string
	}{
		req.Method,
		req.URL.Path,
		req.PostForm,
	}
	tpl.ExecuteTemplate(res, "index.html", data)
}


















