
# Files and Attachments APIs

Attachments provide more information about a contact or a company, which normally cannot be displayed. You may also need to send images, text files or videos or any other type of files to contacts. The files and attachments API allows a user to get a list of attachments, upload or download a photo or a file.

### Get list of Attachments

#### Purpose

To get the list of attachments.

#### Endpoints

[GET /{module\_api\_name}/{record\_id}/Attachments](https://www.zoho.com/crm/developer/docs/api/v7/get-attachments.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_api\_name}/{record\_id}/Attachments

#### Supported modules

Leads, Accounts, Contacts, Deals, Campaigns, Tasks, Cases, Events, Calls, Solutions, Products, Vendors, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, Custom, Appointments, Services and Notes

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.ALL

(or)

scope=ZohoCRM.modules.{module\_name}.{operation\_type}

**(and)**

scope=ZohoCRM.modules.attachments.{operation\_type}

#### Possible module names

leads, accounts, contacts, deals, campaigns, tasks, cases, events, calls, solutions, products, vendors, pricebooks, quotes, salesorders, purchaseorders, invoices, custom, appointments, services and notes

#### Possible operation types

ALL - Full access to attachments

READ - Get attachment data

#### Parameters

- fieldsstring, mandatory



Specify the API name of the field whose details you want to receive in the response.


#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/4876876000000376008/Attachments?fields=id,Owner,File_Name,Created_Time,Parent_Id"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

``` deluge
Copiedresponse = invokeurl
[\
	url: "https://www.zohoapis.com/crm/v7/Leads/4876876000000376008/Attachments?fields=id,Owner,File_Name,Created_Time,Parent_Id"\
	type: GET\
	connection:"crm_oauth_connection"\
];
info response;
```

#### Response JSON Keys

- OwnerJSON object



Represents the name, ID, and email of the record owner.

- Modified\_Timestring



Represents the date and time at which the attachment was last modified.

- File\_Namestring



Represents the name of the attachment.

- Created\_Timestring



Represents the date and time at which the attachment was added to the record.

- Sizeinteger



Represents the size of the attachment.

- Parent\_IdJSON object



Represents the name and ID of the parent record.

- $editableboolean



Represents if the user can edit the attachment.

**true:** The user can edit the attachment.

**false:** The user cannot edit the attachment.

- $file\_idstring



Represents the unique file ID of the file in the ZFS.

- $se\_modulestring



Represents the API name of the parent module.

- Modified\_ByJSON object



Represents the name, ID, and email of the user who last modified the attachment.

- idstring



Represents the unique ID of the related record.

- Created\_ByJSON object



Represents the name, ID, and email of the user who added the attachment to the record.


#### Possible Errors

- INVALID\_MODULEHTTP 400



The module name given seems to be invalid

**Resolution:** You have specified an invalid module name or there is no tab permission, or the module could have been removed from the available modules. Specify a valid module API name.

- INVALID\_MODULEHTTP 400



The given module is not supported in API

**Resolution:** The modules such as Documents and Projects are not supported in the current API. (This error will not be shown, once these modules are been supported). Specify a valid module API name.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.modules.attachments.READ scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to read attachment details

**Resolution:** The user does not have permission to read attachment details. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to read attachments

**Resolution:** The user does not have the permission to read attachment details. Contact your system administrator.

- REQUIRED\_PARAM\_MISSINGHTTP 400



One of the expected parameter is missing

**Resolution:** Specify the mandatory parameter. Refer to the Parameters section above for more details.


#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "Owner": {\
                "name": "Patricia Boyle",\
                "id": "4876876000000327001",\
                "email": "patricia.boyle@zohocorp.com"\
            },\
            "File_Name": "Image.jpg",\
            "Created_Time": "2022-04-21T10:27:41+05:30",\
            "Parent_Id": null,\
            "id": "4876876000001021001"\
        },\
        {\
            "Owner": {\
                "name": "Patricia Boyle",\
                "id": "4876876000000327001",\
                "email": "patricia.boyle@zohocorp.com"\
            },\
            "File_Name": "in23er.png",\
            "Created_Time": "2022-04-20T14:45:42+05:30",\
            "Parent_Id": null,\
            "id": "4876876000001015061"\
        }\
    ],
    "info": {
        "per_page": 200,
        "next_page_token": null,
        "count": 2,
        "page": 1,
        "previous_page_token": null,
        "page_token_expiry": null,
        "more_records": false
    }
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-attachments.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)