
# Create a Portal

#### Purpose

To create a portal for your org.

#### Endpoints

[POST /settings/portals](https://www.zoho.com/crm/developer/docs/api/v7/create-portal.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/portals

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.clientportal.ALL

(or)

Scope=ZohoCRM.settings.clientportal.CREATE

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/portals"
-X POST
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d "@input.json"
```

#### Input JSON

- namestring, mandatory



The name of the portal. Ensure that this name is unique and has only alphanumeric characters.


#### Sample Input

``` json
Copied{
    "portals": [\
        {\
            "name": "PortalsAPItest100"\
        }\
    ]
}
```

#### Possible Errors

- MANDATORY\_NOT\_FOUNDHTTP 400



You have not specified a name for the portal.

**Resolution:** Portal's name is mandatory. Ensure that you have included the key "name" in the input body.

- INVALID\_DATAHTTP 400



You have defined portal name in the input body. **Resolutions** Specify portal name.

- PATTERN\_NOT\_MATCHEDHTTP 400



The portal name contains special characters.

**Resolution:** You can only use alphanumeric characters for the portal name.

- ALREADY\_USEDHTTP 400



The portal name already exists.

**Resolution:** The portal name must be unique. Try again with a different name.

- NO\_PERMISSIONHTTP 403



You do not have either "Manage Portal", "Manage Portal Users" permission or both.

**Resolution:** Refer to the "details" key in the response and contact your administrator.


#### Sample Response

``` json
Copied{
    "portals": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "name": "PortalsAPItest100"\
            },\
            "message": "Portal created successfully with given name.",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/create-portal.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)