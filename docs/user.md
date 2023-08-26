# USER API SPEC

## Login User API

Endpoint : POST /api/users/login

Request Body :

```json
{
    "username": "admin",
    "password": "123"
}
```

Response Body Success:

```json
{
    "data": {
        "token": "unique-token"
    }
}
```

Response Body Error:

```json
{
    "errors": "username or password wrong"
}
```

## Get User API

Endpoint : GET /api/users/current
Headers :

-   Authorization : token

Response Body Success

```json
{
    "data": {
        "name": "Admin SD NEGERI BANYUROTO 1",
        "username": "adminsdnbanyuroto1"
    }
}
```

Response Body Error :

```json
{
    "errors": "message error cannot get user"
}
```

## Logout User API

Endpoint : DELETE /api/users/logout
Headers :

-   Authorization : token

Response Body Success:

```json
{
    "data": "OK"
}
```

Response Body Error:

```json
{
    "errors": "unauthorized"
}
```
