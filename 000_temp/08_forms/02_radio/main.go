package main

import (
	"net/http"
	"text/template"
	"fmt"
)

var tpl *template.Template

func init() {
	tpl = template.Must(template.ParseGlob("templates/*.gohtml"))
}

func main() {
	http.HandleFunc("/", index)
	http.HandleFunc("/process", process)
	http.ListenAndServe(":8080", nil)
}

func index(w http.ResponseWriter, r *http.Request) {
	tpl.ExecuteTemplate(w, "index.gohtml", nil)
}


func process(w http.ResponseWriter, r *http.Request) {
	i := r.FormValue("item")
	fmt.Println(i)
	tpl.ExecuteTemplate(w, "process.gohtml", i)
}
