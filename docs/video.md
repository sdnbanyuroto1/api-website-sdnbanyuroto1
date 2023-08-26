# video API Spec

## Create video API

Endpoint : POST /api/video

Headers:

-   Authorization : token

Request Body :

```json
{
    "Link": "Link iframe Youtube"
}
```

Response Body Success :

```json
{
    "data": {
        "id": 1,
        "Link": "Link iframe Youtube"
    }
}
```

Response Body Error :

```json
{
    "errors": "Cannot add video"
}
```

## Get video API

Endpoint : GET /api/video

Headers :

-   Authorization : token

Response Body Success :

```json
{
    "data": [
        {
            "id": 1,
            "Link": "Link iframe Youtube"
        },
        {
            "id": 2,
            "Link": "Link iframe Youtube"
        }
    ]
}
```

Response Body Error :

```json
{
    "errors": "Cannot get all video"
}
```

## Update video API

Endpoint : PUT /api/video/:id

Headers :

-   Authorization : token

Request Body:

```json
{
    "Link": "Link iframe Youtube"
}
```

Response Body Success :

```json
{
    "data": {
        "id": 1,
        "Link": "Link iframe Youtube"
    }
}
```

Response Body Error :

```json
{
    "errors": "Cannot update video"
}
```

## Delete video API

Endpoint : DELETE /api/video/:id

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
    "errors": "Cannot delete video"
}
```
