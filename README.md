# Phunk metadata API

## routes

1. GET /api/tokens <br>
   returns all tokens from the database

2. GET /api/tokens/:tokenid <br>
   get metadata about token - #tokenid <br>

3. GET /api/attributes/:trait_type <br>
   Query params are used to select tokens based on trait type's value<br>
   eg:<br>

   GET /api/attributes/Eyes<br>
   will return all tokens with the eyes trait<br>

   GET /api/attributes/Eyes?value=Purple%20Eye%20Shadow<br>
   will return all tokens with the eyes trait which matches the value
