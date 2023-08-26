# Berita dan Artikel API Spec

## Create Berita dan Artikel API

Endpoint : POST /api/berita-artikel

Headers:

-   Authorization : token

Request Body :

```json
{
    "judul": "judul berita dan artikel",
    "jenis": "berita/artikel",
    "deskripsi": "ini adalah deskripsi dari berita atau artikel yang ada",
    "tanggal_publikasi": "20 maret 2002",
    "gambar": "foto.jpg"
}
```

Response Body Success :

```json
{
    "data": {
        "id": 1,
        "judul": "judul berita dan artikel",
        "jenis": "berita/artikel",
        "deskripsi": "ini adalah deskripsi dari berita atau artikel yang ada",
        "tanggal_publikasi": "20 maret 2002",
        "gambar": "foto.jpg"
    }
}
```

Response Body Error :

```json
{
    "errors": "Cannot add berita atau artikel"
}
```

## Get Berita dan Artikel API

Endpoint : GET /api/berita-artikel

Headers :

-   Authorization : token

Response Body Success :

```json
{
    "data": [
        {
            "id": 1,
            "judul": "judul berita dan artikel",
            "jenis": "berita/artikel",
            "deskripsi": "ini adalah deskripsi dari berita atau artikel yang ada",
            "tanggal_publikasi": "20 maret 2002",
            "gambar": "foto.jpg"
        },
        {
            "id": 1,
            "judul": "judul berita dan artikel",
            "jenis": "berita/artikel",
            "deskripsi": "ini adalah deskripsi dari berita atau artikel yang ada",
            "tanggal_publikasi": "20 maret 2002",
            "gambar": "foto.jpg"
        }
    ]
}
```

Response Body Error :

```json
{
    "errors": "Cannot get all berita atau artikel"
}
```

## Update Berita dan Artikel API

Endpoint : PUT /api/berita-artikel/:id

Headers :

-   Authorization : token

Request Body:

```json
{
    "judul": "judul berita dan artikel",
    "jenis": "berita/artikel",
    "deskripsi": "ini adalah deskripsi dari berita atau artikel yang ada",
    "tanggal_publikasi": "20 maret 2002",
    "gambar": "foto.jpg"
}
```

Response Body Success :

```json
{
    "data": {
        "id": 1,
        "judul": "judul berita dan artikel",
        "jenis": "berita/artikel",
        "deskripsi": "ini adalah deskripsi dari berita atau artikel yang ada",
        "tanggal_publikasi": "20 maret 2002",
        "gambar": "foto.jpg"
    }
}
```

Response Body Error :

```json
{
    "errors": "Cannot update berita atau artikel"
}
```

## Delete Berita dan Artikel API

Endpoint : DELETE /api/berita-artikel/:id

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
    "errors": "Cannot delete berita atau artikel"
}
```
