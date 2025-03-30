
# Delete User's Unavailability

#### Purpose

To delete the record that contains the details of your unavailability.

#### Endpoint

[DELETE /settings/users\_unavailability/{id}](https://www.zoho.com/crm/developer/docs/api/v7/del-user-unavailability.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/users\_unavailability/{id}

#### Header

**Authorization**: Zoho-oauthtoken <access\_token>

#### Scope

scope=ZohoCRM.settings.users\_unavailability.ALL

(or)

scope=ZohoCRM.settings.users\_unavailability.DELETE

(or)

scope=ZohoCRM.settings.users\_unavailability.WRITE

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/users_unavailability/554023000002227001"
-X DELETE
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Possible Errors

- INVALID\_REQUEST\_METHODHTTP 400



You have used an invalid HTTP method to access this API.

**Resolution:** Use the correct HTTP method.

- INTERNAL\_ERRORHTTP 500



There is an unexpected exception in the server.

**Resolution:** Contact support@zohocrm.com.


#### Sample Response

``` json
Copied{
    "users_unavailability": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "554023000002227001"\
            },\
            "message": "Unavailability deleted Successfully",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/del-user-unavailability.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)