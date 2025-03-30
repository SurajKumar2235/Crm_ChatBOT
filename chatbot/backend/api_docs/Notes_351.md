
# Update Notes

#### Purpose

To update an existing note.

#### Endpoints

[PUT /Notes](https://www.zoho.com/crm/developer/docs/api/v7/update-notes.html)

[PUT /Notes/{note\_id}](https://www.zoho.com/crm/developer/docs/api/v7/update-notes.html)

[PUT /{module\_api\_name}/{record\_id}/Notes](https://www.zoho.com/crm/developer/docs/api/v7/update-notes.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/Notes

**To update a specific note:**

{api-domain}/crm/{version}/Notes/{note\_id}

**To update notes of a specific record:**

{api-domain}/crm/{version}/{module\_api\_name}/{record\_id}/Notes

#### Supported modules

Leads, Accounts, Contacts, Deals, Campaigns, Tasks, Cases, Events, Calls, Solutions, Products, Vendors, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, Appointments, Services and Custom

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.ALL

(or)

scope=ZohoCRM.modules.{module\_name}.{operation\_type}

**(and)**

scope=ZohoCRM.modules.notes.{operation\_type}

#### Possible module names

leads, accounts, contacts, deals, campaigns, tasks, events, calls, cases, events, calls, solutions, products, vendors, pricebooks, quotes, salesorders, purchaseorders, invoices, appointments, services and custom

#### Possible operation types

ALL - Full access to notes

WRITE - Edit note data

UPDATE - Update note data

#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Notes/4150868000002975099"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d "@updatenote.json"
-X PUT
```

``` deluge
Copiednote1 = Map();
note1.put("Note_Title", "Contacted");
note1.put("Note_Content", "Tracking done. Happy with the customer");

dataList = List();
dataList.add(note1);

params = Map();
params.put("data", dataList);

response = invokeurl
[\
	url :"https://www.zohoapis.com/crm/v7/Leads/692969000000981055/Notes/692969000000994147"\
	type :PUT\
	parameters: params.toString()\
	connection:"crm_oauth_connection"\
];
info response;
```

In the request, "@updatenote.json" contains the sample input data.

#### Request JSON Keys

- Note\_Titlestring, optional



Specify the updated title of the note.

- Note\_Contentstring, optional



Specify the updated content of the note.


**Note**

- You must use only Field API names in the input. You can obtain the field API names from [Fields metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) (the value for the key “api\_name” for every field).
- You can update a maximum of **100 notes** per API call.
- You can update only two fields of a note: Note\_Title and Note\_Content. You cannot update values for the following read\_only fields: Owner, Modified\_Time, Created\_Time, Modified\_By, and Created\_By.

#### Sample Input

``` json
Copied{
    "data": [\
       {\
            "Note_Title": "Contacted",\
            "Note_Content": "Tracking done. Happy with the customer"\
        }\
    ]
}
```

In the input, specify the field API names of the Notes module along with the corresponding values.

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

**Resolution:** Client does not have ZohoCRM.modules.notes.UPDATE scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to update notes details

**Resolution:** The user does not have permission to update notes data. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to update notes

**Resolution:** The user does not have the permission to update notes data. Contact your system administrator.

- INVALID\_DATAHTTP 400



the related id given seems to be invalid

**Resolution:** You have specified an incorrect related record ID. Please specify a valid record ID. Refer to [Get Related Records API](https://www.zoho.com/crm/developer/docs/api/v7/get-related-records.html) to get valid record IDs.

- MANDATORY\_NOT\_FOUNDHTTP 400



required field not found

**Resolution:** You have not specified one or more mandatory fields in the input. Refer to [Fields Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) to know the mandatory fields.


#### Sample Response

``` json
Copied{
    "data": [\
       {\
            "code": "SUCCESS",\
            "details": {\
                "created_time": "2016-07-05T17:13:24+05:30",\
                "modified_time": "2016-08-08T11:28:41+05:30",\
                "modified_by": {\
                    "name": "Patricia Boyle",\
                    "id": "4108880000086001"\
                },\
                "id": "410888000000643123",\
                "created_by": {\
                    "name": "Patricia Boyle",\
                    "id": "4108880000086001"\
                }\
            },\
            "message": "record updated",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/update-notes.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)