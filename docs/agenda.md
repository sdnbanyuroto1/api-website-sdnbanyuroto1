# Agenda API Spec

## Create Agenda API

Endpoint : POST /api/agenda

Headers:

-   Authorization : token

Request Body :

```json
{
    "judul": "judul Agenda",
    "deskripsi": "ini adalah deskripsi dari agenda yang ada",
    "tanggal_publikasi": "20 maret 2002",
    "jadwal": "25 maret 2002",
    "gambar": "foto.jpg"
}
```

Response Body Success :

```json
{
    "data": {
        "id": 1,
        "judul": "judul Agenda",
        "deskripsi": "ini adalah deskripsi dari agenda yang ada",
        "tanggal_publikasi": "20 maret 2002",
        "jadwal": "25 maret 2002",
        "gambar": "foto.jpg"
    }
}
```

Response Body Error :

```json
{
    "errors": "Cannot add agenda"
}
```

## Get Agenda API

Endpoint : GET /api/agenda

Headers :

-   Authorization : token

Response Body Success :

```json
{
    "data": [
        {
            "id": 1,
            "judul": "judul Agenda",
            "deskripsi": "ini adalah deskripsi dari agenda yang ada",
            "tanggal_publikasi": "20 maret 2002",
            "jadwal": "25 maret 2002",
            "gambar": "foto.jpg"
        },
        {
            "id": 2,
            "judul": "judul Agenda",
            "deskripsi": "ini adalah deskripsi dari agenda yang ada",
            "tanggal_publikasi": "20 maret 2002",
            "jadwal": "25 maret 2002",
            "gambar": "foto.jpg"
        }
    ]
}
```

Response Body Error :

```json
{
    "errors": "Cannot get all agenda"
}
```

## Update Agenda API

Endpoint : PUT /api/agenda/:id

Headers :

-   Authorization : token

Request Body:

```json
{
    "judul": "judul Agenda",
    "deskripsi": "ini adalah deskripsi dari agenda yang ada",
    "tanggal_publikasi": "20 maret 2002",
    "jadwal": "25 maret 2002",
    "gambar": "foto.jpg"
}
```

Response Body Success :

```json
{
    "data": {
        "id": 1,
        "judul": "judul Agenda",
        "deskripsi": "ini adalah deskripsi dari agenda yang ada",
        "tanggal_publikasi": "20 maret 2002",
        "jadwal": "25 maret 2002",
        "gambar": "foto.jpg"
    }
}
```

Response Body Error :

```json
{
    "errors": "Cannot update agenda"
}
```

## Delete Agenda API

Endpoint : DELETE /api/agenda/:id

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
    "errors": "Cannot delete agenda"
}
```
