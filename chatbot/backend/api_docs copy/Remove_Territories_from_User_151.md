
# Remove Territories from User

#### Purpose

To remove specific territories from a user.

#### Endpoints

[DELETE /Users/{user\_id}/territories/{territory\_id}](https://www.zoho.com/crm/developer/docs/api/v7/remove-territories-from-user.html)

[DELETE /Users/{user\_id}/territories?ids={territory\_1},{territory\_2},{territory\_3},...](https://www.zoho.com/crm/developer/docs/api/v7/remove-territories-from-user.html)

### Request Details

#### Request URLs

- **To remove one territory from a user**

{api-domain}/crm/{version}/Users/{user\_id}/territories/{territory\_id}

- **To remove multiple territories from a user**

{api-domain}/crm/{version}/Users/{user\_id}/territories?ids={territory\_1},{territory\_2},{territory\_3},...


#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope = ZohoCRM.users.{operation\_type} and

scope = ZohoCRM.settings.territories.{operation\_type}

#### Possible operation types

ALL - Full access to territories

DELETE - Delete territories from a user

#### Parameter

- idsstring, optional (The parameter is mandatory for bulk territories removal from a user)



Represents the unique IDs of the territories. A maximum of **100** territories can be specified in a single API call.


**Notes**

- A territory cannot be removed from its assigned manager (the owner of the territory).
- Default territory cannot be removed.

#### Sample request to remove a single territory from a user

``` curl
Copied"https://www.zohoapis.com/crm/v7/Users/5725767000000583004/territories/5725767000002709047"
-X DELETE
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Possible Errors

- INVALID\_DATAHTTP 400



- The user ID given seems to be invalid

**Resolution :** Specify a valid user ID. Refer to the [GET Users API](https://www.zoho.com/crm/developer/docs/api/v7/get-users.html) to retrieve available users, along with their unique IDs.
- One or more given territory IDs seem to be invalid

**Resolutions :** Specify valid territory IDs.
  - To retrieve all the territories, use the [GET Territories API](https://www.zoho.com/crm/developer/docs/api/v7/territories.html).
  - To retrieve all territories belong to a user, use the [GET Territories of a User API](https://www.zoho.com/crm/developer/docs/api/v7/territories.html).
- The user ID given has already been deleted or is not associated with Zoho CRM

**Resolution :** Specify an active user ID associated with Zoho CRM.
- Organization Territory cannot be removed from the user

**Resolution :** The default territory cannot be removed. Specify valid territories.
- The territory ID is not linked with the specified user

**Resolution :** Specify the territories associated with the user. To know the assigned territories of a specific user, use the [Territories of a User API](https://www.zoho.com/crm/developer/docs/api/v7/get-user-territories.html).
- The territory given cannot be removed from the user

**Resolution :** The user is the manager of the territory, and you cannot remove the territory from the user.

- NOT\_ALLOWEDHTTP 400



You cannot update the territories you belong to

**Resolution:** You can remove only the territories to which you do not belong.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL.

Specify a valid request method. Refer to the endpoints section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** The client does not have a valid scope to remove territories from user. Create a new token with valid scope. Refer to scope section above.

- AUTHENTICATION\_FAILUREHTTP 401



Authentication failed

**Resolution:** Pass the access token in the request header of the API call.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to the request URL section above.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in the server. Contact support team.


#### Response

``` json
Copied{
    "territories": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "5725767000002709047"\
            },\
            "message": "Territory removed from the user successfully",\
            "status": "success"\
        }\
    ]
}
```

#### Sample request to remove bulk territories from user

``` curl
Copied"https://www.zohoapis.com/crm/v7/Users/5725767000000583004/territories?ids=5725767000000452115,5725767000000454003,5725767000002709047"
-X DELETE
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"

```

#### Sample Response

``` json
Copied{
    "territories": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "5725767000000452115"\
            },\
            "message": "Territory removed from the user successfully",\
            "status": "success"\
        },\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "5725767000000454003"\
            },\
            "message": "Territory removed from the user successfully",\
            "status": "success"\
        },\
        {\
            "code": "INVALID_DATA",\
            "details": {},\
            "message": "This user cannot be removed as the user is a manager of the mentioned Territory.",\
            "status": "error"\
        },\
        {\
            "code": "INVALID_DATA",\
            "details": {},\
            "message": "This user cannot be removed as the user is a manager of the mentioned Territory.",\
            "status": "error"\
        },\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "5725767000002709047"\
            },\
            "message": "Territory removed from the user successfully",\
            "status": "success"\
        }\
    ]
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/remove-territories-from-user.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)