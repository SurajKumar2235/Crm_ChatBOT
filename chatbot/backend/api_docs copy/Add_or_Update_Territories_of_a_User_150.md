
# Add or Update Territories of a User

#### Purpose

To add or update the territories related to a user.

#### Endpoints

[PUT /users/{id}/territories](https://www.zoho.com/crm/developer/docs/api/v7/add-update-user-territories.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/users/{id}/territories

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.users.{operation\_type}

(or)

scope=ZohoCRM.settings.territories.{operation\_type}

#### Possible operation types

ALL - Full access to the record

UPDATE - Update records in the module

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/users/3652397000001460001/territories"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d "@updateuserterritory.json"
-X PUT

```

#### Input JSON Key

- idstring, mandatory



Represents the unique ID of the territory that you want to assign the user to. You can have up to 100 JSON objects under the "territories" array.


#### Sample Input

``` json
Copied{
  "territories": [\
    {\
      "id": "3652397000007622003"\
    }\
  ]
}
```

#### Possible Errors

- INVALID\_DATAHTTP 400



You have specified an invalid ID for territory in the input.

**Resolution:** Use the [Get Territories API](https://www.zoho.com/crm/developer/docs/api/v7/territories.html) to get the unique IDs of the territories.

- LIMIT\_EXCEEDEDHTTP 400



You have tried to add or update more than 100 territories in an API call.

**Resolution:** You can add or update only up to 100 territories to a user in an API call.

- DUPLICATE\_DATAHTTP 400



Territory already associated with the user.

**Resolution:** Refer to the "json\_path" key in the "details" key of the response to find out the ID of the territory that is already associated to the user. Remove it from the input to avoid this error.

- MANDATORY\_NOT\_FOUNDHTTP 400



Required field not found.

**Resolution:** You must specify the territory ID in the input.

- expected\_data\_typeHTTP 400



The data type of the ID in the input does not match with the expected one.

**Resolution:** You must specify the territory ID as a string and it must only contain numbers(long).

- NOT\_ALLOWEDHTTP 400



Logged in users cannot update their own territories.


#### Sample Response

``` json
Copied{
    "territories": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "3652397000007622003"\
            },\
            "message": "Territory associated to the user successfully",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/add-update-user-territories.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)