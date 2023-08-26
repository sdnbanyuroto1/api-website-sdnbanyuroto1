# prestasi API Spec

## Create prestasi API

Endpoint : POST /api/prestasi

Headers:

-   Authorization : token

Request Body :

```json
{
    "judul": "judul prestasi",
    "deskripsi": "ini adalah deskripsi dari prestasi yang ada",
    "gambar": "foto.jpg"
}
```

Response Body Success :

```json
{
    "data": {
        "id": 1,
        "judul": "judul prestasi",
        "deskripsi": "ini adalah deskripsi dari prestasi yang ada",
        "gambar": "foto.jpg"
    }
}
```

Response Body Error :

```json
{
    "errors": "Cannot add prestasi"
}
```

## Get prestasi API

Endpoint : GET /api/prestasi

Headers :

-   Authorization : token

Response Body Success :

```json
{
    "data": [
        {
            "id": 1,
            "judul": "judul prestasi",
            "deskripsi": "ini adalah deskripsi dari prestasi yang ada",
            "gambar": "foto.jpg"
        },
        {
            "id": 2,
            "judul": "judul prestasi",
            "deskripsi": "ini adalah deskripsi dari prestasi yang ada",
            "gambar": "foto.jpg"
        }
    ]
}
```

Response Body Error :

```json
{
    "errors": "Cannot get all prestasi"
}
```

## Update prestasi API

Endpoint : PUT /api/prestasi/:id

Headers :

-   Authorization : token

Request Body:

```json
{
    "judul": "judul prestasi",
    "deskripsi": "ini adalah deskripsi dari prestasi yang ada",
    "gambar": "foto.jpg"
}
```

Response Body Success :

```json
{
    "data": {
        "id": 1,
        "judul": "judul prestasi",
        "deskripsi": "ini adalah deskripsi dari prestasi yang ada",
        "gambar": "foto.jpg"
    }
}
```

Response Body Error :

```json
{
    "errors": "Cannot update prestasi"
}
```

## Delete prestasi API

Endpoint : DELETE /api/prestasi/:id

Headers :

-   Authorization : token

Response Body Success :

```json
{
    "data": "OK"
}
```

Response Body Error :

```json
{
    "errors": "Cannot delete prestasi"
}
```
