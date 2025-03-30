
# Associate Users with Territory

#### Purpose

To associate users with a territory in your organization.

#### Endpoints

[PUT /settings/territories/{territoryid}/users](https://www.zoho.com/crm/developer/docs/api/v7/associate-users-territory.html)

[PUT /settings/territories/{territoryid}/users/{userid}](https://www.zoho.com/crm/developer/docs/api/v7/associate-users-territory.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/territories/{territoryid}/users/{userid}

or {api-domain}/crm/{version}/settings/territories/{territoryid}/users

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.territories.All and ZohoCRM.users.All

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/territories/431581000000744113/users"
-X PUT
-d "@addusertoterritories.json"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

In the request, "@addusertoterritories.json" contains the sample input.

#### Input JSON

- users JSON Array (Mandatory if user id is not given in the request URL)



Represents the unique ID of the user you want to associate with the territory.This can be obtained from [Get Users API](https://www.zoho.com/crm/developer/docs/api/v7/get-users.html)


**Note**

A single user can be associate with the territory directly through the URL with the end point {api-domain}/crm/{version}/settings/territories/{territoryid}/users/{userid}

#### Sample Request

``` json
Copied{
  "users":
  [\
    {\
      "id": "431581000000258001"\
    }\
  ]
}
```

#### Possible Errors

- DUPLICATE\_DATA HTTP 400



The user you are trying to associate is already associated with the tterritory



**Resolution:** Check the ID of the user you wish to associate.

- LIMIT\_EXCEEDED HTTP 400



Maximum Users Limit reached for a territory.



**Resolution:** Check the Territory users limit.Note that manager is also considered as a user.

- INVALID\_DATA HTTP 400



- The user you are trying to associate is an inactive user.
- The user ID is invalid.

**Resolution:** Refer to the "details" key in the response for the API name of the field that has the error in the input.

#### Sample Response

``` json
Copied{
    "users": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "431581000000258001"\
            },\
            "message": "Given User added to the mentioned territory Successfully",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/associate-users-territory.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)