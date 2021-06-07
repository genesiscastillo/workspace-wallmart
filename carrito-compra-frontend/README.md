# development y contaerinze carrito compra frontend

## Containerising the app carrito compra frontend

### with ng for developers

```
cd / carrito-compra-frontend

ng serve -o
```

### with docker

```bash
docker build -t carrito-compra-frontend .

docker run -it --rm -p 4200:80 --name carrito-compra-frontend carrito-compra-frontend
```

![holaa](../img/frontend1.png)

