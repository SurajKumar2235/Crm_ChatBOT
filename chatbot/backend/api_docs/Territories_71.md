
# Delete Territories

#### Purpose

To delete territories from your organization.

#### Endpoints

[DELETE /settings/territories](https://www.zoho.com/crm/developer/docs/api/v7/delete-territories.html)

[DELETE /settings/territories/{territoryid}](https://www.zoho.com/crm/developer/docs/api/v7/delete-territories.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/territories

{api-domain}/crm/{version}/settings/territories/{territoryid}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.territories.{operation\_type}

#### Possible operation types

ALL - Full access to territories

DELETE - Delete territories

#### Parameters

- idsstring, mandatory



Specify the unique ID of the territories that you want to delete.

**Possible values:** Territory IDs separated by commas or a single territory ID.

For example: 431581000000272796, 431581000000272786. Use the [Get Territories API](https://www.zoho.com/crm/developer/docs/api/v7/territories.html) to get the ID of the territory.

- delete\_previous\_forecastsBoolean, mandatory



Delete previous forecasts made by the territory


**Note**

Maximum number of territories that can be deleted in one API call is 10

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/territories?ids=431581000000734147"
-X DELETE
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Possible Errors

- INVALID\_DATAHTTP 400



The territory given is invalid



**Resolution:** Give valid territory ID

- NOT\_ALLOWEDHTTP 400



- This territory has a child territory associated with it. It can't be deleted directly as transfer of child territory is required.

**Resolution:** Use transfer and delete api to delete the parent territory
- The territory you are trying to delete is the Org Territory

- PERMISSION\_DENIEDHTTP 401



You don't have a permission to delete the Territory



**Resolution:** The user does not have permission to delete the territory. Contact your system administrator.


#### Sample Response

``` json
Copied{
    "territories": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "431581000000734147"\
            },\
            "message": "Given Territory Removed Successfully",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/delete-territories.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)