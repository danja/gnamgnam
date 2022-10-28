**2022-10-28**

had a little play with m-ld, port 1883 already in use

sudo lsof -i -P -n | grep 1883
mosquitto 1148 mosquitto 5u IPv4 19253 0t0 TCP 127.0.0.1:1883 (LISTEN)

---

made a new routing aware angular app:

ng new gnamgnam --routing --defaults

ng generate component link-page
ng generate component list-page

created https://github.com/danja/gnamgnam

VSCode recommended Angular Language Service - installed

ng serve --open
