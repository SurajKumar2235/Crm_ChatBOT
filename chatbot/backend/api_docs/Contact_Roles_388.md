
# Delete Contact Roles

#### Purpose

To delete contact roles.

#### Endpoints

[DELETE /Contacts/roles?ids={contact\_role\_id1,contact\_role\_id2,..}](https://www.zoho.com/crm/developer/docs/api/v7/delete-contact-roles.html)

[DELETE /Contacts/roles/{contact\_role\_id}](https://www.zoho.com/crm/developer/docs/api/v7/delete-contact-roles.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/Contacts/roles?ids={contact\_role\_id1,contact\_role\_id2,..}

**To delete a specific contact role:**

{api-domain}/crm/{version}/Contacts/roles/{contact\_role\_id}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.ALL

(or)

scope=ZohoCRM.modules.contacts.DELETE

#### Possible operation types

ALL - Full access to the record

DELETE - Delete records in the module

#### Parameters

- idsstring, mandatory when deleting multiple contact roles



Specify comma separated contact role IDs. Refer to [Get Contact Roles API](https://www.zoho.com/crm/developer/docs/api/v7/get-contact-roles.html) to retrieve valid contact role IDs.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Contacts/roles?ids=4150868000001015046,4150868000001015042"
-X DELETE
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

**Note**

- You can delete a maximum of **100 contact roles** per API call.

#### Possible Errors

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.modules.contacts.DELETE scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to delete records

**Resolution:** The user does not have permission to delete records. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to delete contact roles

**Resolution:** The user does not have the permission to delete contact roles. Contact your system administrator.

- INVALID\_DATAHTTP 400



contact role not deleted

**Resolution:** The contact role you are trying to delete has already been deleted.

- REQUIRED\_PARAM\_MISSINGHTTP 400



One of the expected parameter is missing

**Resolution:** Specify the unique IDs of the contact role to be deleted in "ids" parameter. Refer to [Get Contact Roles API](https://www.zoho.com/crm/developer/docs/api/v7/get-contact-roles.html) to retrieve valid contact role IDs.


#### Sample Response

``` json
Copied{
    "contact_roles": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "4150868000001015046"\
            },\
            "message": "contact role deleted",\
            "status": "success"\
        },\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "4150868000001015042"\
            },\
            "message": "contact role deleted",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/delete-contact-roles.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)