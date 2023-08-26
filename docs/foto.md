# foto API Spec

## Create foto API

Endpoint : POST /api/foto

Headers:

-   Authorization : token

Request Body :

```json
{
    "judul": "judul foto",
    "deskripsi": "ini adalah deskripsi dari foto yang ada",
    "gambar": "foto.jpg"
}
```

Response Body Success :

```json
{
    "data": {
        "id": 1,
        "judul": "judul foto",
        "deskripsi": "ini adalah deskripsi dari foto yang ada",
        "gambar": "foto.jpg"
    }
}
```

Response Body Error :

```json
{
    "errors": "Cannot add foto"
}
```

## Get foto API

Endpoint : GET /api/foto

Headers :

-   Authorization : token

Response Body Success :

```json
{
    "data": [
        {
            "id": 1,
            "judul": "judul foto",
            "deskripsi": "ini adalah deskripsi dari foto yang ada",
            "gambar": "foto.jpg"
        },
        {
            "id": 2,
            "judul": "judul foto",
            "deskripsi": "ini adalah deskripsi dari foto yang ada",
            "gambar": "foto.jpg"
        }
    ]
}
```

Response Body Error :

```json
{
    "errors": "Cannot get all foto"
}
```

## Update foto API

Endpoint : PUT /api/foto/:id

Headers :

-   Authorization : token

Request Body:

```json
{
    "judul": "judul foto",
    "deskripsi": "ini adalah deskripsi dari foto yang ada",
    "gambar": "foto.jpg"
}
```

Response Body Success :

```json
{
    "data": {
        "id": 1,
        "judul": "judul foto",
        "deskripsi": "ini adalah deskripsi dari foto yang ada",
        "gambar": "foto.jpg"
    }
}
```

Response Body Error :

```json
{
    "errors": "Cannot update foto"
}
```

## Delete foto API

Endpoint : DELETE /api/foto/:id

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
    "errors": "Cannot delete foto"
}
```
