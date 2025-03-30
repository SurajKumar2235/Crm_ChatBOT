
# Update Contact Roles

#### Purpose

To update details of contact roles.

#### Endpoints

[PUT /Contacts/roles](https://www.zoho.com/crm/developer/docs/api/v7/update-contact-roles.html)

[PUT /Contacts/roles/{contact\_role\_id}](https://www.zoho.com/crm/developer/docs/api/v7/update-contact-roles.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/Contacts/roles

**To update a specific contact role:**

{api-domain}/crm/{version}/Contacts/roles/{contact\_role\_id}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.ALL

(or)

scope=ZohoCRM.modules.contacts.UPDATE

#### Possible operation types

ALL - Full access to the records

WRITE - Edit records in the contacts module

UPDATE - Update records in the contacts module

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Contacts/roles"
-X PUT
-d "@updatecontactroles.json"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Input JSON Keys

- idstring, mandatory



Specify the unique ID of the contact role. Refer to [Get Contact Roles API](https://www.zoho.com/crm/developer/docs/api/v7/get-contact-roles.html) to get valid IDs. You need not specify this key if you specify the ID in request URL.

- namestring, optional



Specify the unique name of the contact role.

- sequence\_numberinteger, optional



Specify the position of the contact role in the picklist in CRM UI.


#### Sample Input

``` json
Copied{
    "contact_roles": [\
        {\
            "name": "Sales Lead",\
            "sequence_number": 5,\
             "id": "4150868000003611011"\
        },\
        {\
            "name": "Quality Control",\
            "sequence_number": 6,\
            "id": "4150868000003611012"\
        }\
    ]
}
```

#### Possible Errors

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.modules.contacts.UPDATE scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to update records

**Resolution:** The user does not have permission to update records. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to update records

**Resolution:** The user does not have the permission to update records. Contact your system administrator.

- DUPLICATE\_DATAHTTP 400



duplicate data

**Resolution:** You have specified a duplicate value for "name" field. Specify a unique contact role name in the request input.

- INVALID\_DATAHTTP 400



invalid data

**Resolution:** The input specified for "sequence\_number" key is incorrect. Refer to Input JSON Keys section above and specify the valid input.

- MANDATORY\_NOT\_FOUNDHTTP 400



required field not found

**Resolution:** Specify the unique ID of the contact role to be updated in your request input. Refer to [Get Contact Roles API](https://www.zoho.com/crm/developer/docs/api/v7/get-contact-roles.html) to get valid contact role IDs.


#### Sample Response

``` json
Copied{
    "contact_roles": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "4150868000003611011"\
            },\
            "message": "record updated",\
            "status": "success"\
        },\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "4150868000003611012"\
            },\
            "message": "record updated",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/update-contact-roles.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)