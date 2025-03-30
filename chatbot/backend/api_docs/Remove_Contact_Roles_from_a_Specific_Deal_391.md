
# Remove Contact Role from a Specific Deal

#### Purpose

To remove contact roles from a specific deal.

#### Endpoints

[DELETE /Deals/{deal\_id}/Contact\_Roles/{contact\_id}](https://www.zoho.com/crm/developer/docs/api/v7/remove-contact-role-from-a-specific-deal.html)

[DELETE /Deals/{deal\_id}/Contact\_Roles?ids={contact1,contact2,..}](https://www.zoho.com/crm/developer/docs/api/v7/remove-contact-role-from-a-specific-deal.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/Deals/{deal\_id}/Contact\_Roles/{contact\_id}

**To remove more than one contact role from a deal:**

{api-domain}/crm/{version}/Deals/{deal\_id}/Contact\_Roles?ids={contact1,contact2,..}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.ALL

(or)

scope=ZohoCRM.modules.deals.DELETE

**(and)**

scope=ZohoCRM.modules.contacts.DELETE

#### Possible operation types

ALL - Full access to the records

DELETE - Delete records in the module

#### Parameters

- idsstring, mandatory to remove more than one contact role



Specify comma-separated unique IDs of the contacts


**Note**

You can remove up to 100 contact roles from a deal in a single API call.

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Deals/4150868000003384003/Contact_Roles/4150868000003283024"
-X DELETE
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Possible Errors

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.modules.contacts.DELETE (or) ZohoCRM.modules.deals.DELETE scope. Create a new client with valid scope. Refer to scope section above.

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

- INVALID\_DATAHTTP 400



the related id given seems to be invalid

**Resolution:** Specify a valid _{deal\_id}_ in the request URL. Refer to [Get Records API](https://www.zoho.com/crm/developer/docs/api/v7/get-records.html) to get valid record ids.

- INVALID\_DATAHTTP 400



the id given seems to be invalid

**Resolution:** Specify a valid _{contact\_id}_ in the request URL. Refer to [Get Records API](https://www.zoho.com/crm/developer/docs/api/v7/get-records.html) to get valid record ids.

- MANDATORY\_NOT\_FOUNDHTTP 400



relation not found

**Resolution:** There is no relation between the specified Deal and Contact.


#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "4150868000003283024"\
            },\
            "message": "relation removed",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/remove-contact-role-from-a-specific-deal.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)