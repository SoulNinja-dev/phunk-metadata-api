# Phunk metadata API

## routes

1. GET /api/tokens <br>
   returns all tokens from the database

2. GET /api/tokens/:tokenid <br>
   get metadata about token - #tokenid <br>

3. GET /api/attributes <br>
   **Query params:**<br>
   Traits=Hair,Eyes,Mouth<br>
   Hair=Hoodie<br>
   Sex=Male<br>
   Query params are used to select tokens based on attributes
