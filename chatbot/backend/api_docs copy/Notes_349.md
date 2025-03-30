
# Create Notes

#### Purpose

To add new notes.

#### Endpoints

[POST /Notes](https://www.zoho.com/crm/developer/docs/api/v7/create-notes.html)

[POST /{module\_api\_name}/{record\_id}/Notes](https://www.zoho.com/crm/developer/docs/api/v7/create-notes.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/Notes

**To add notes for a specific record:**

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

CREATE - Create note data

#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/1000000145990/Notes"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d "@newnote.json"
-X POST
```

``` deluge
Copiednote1 = Map();
note1.put("Note_Title", "Contacted");
note1.put("Note_Content", "Need to do further tracking");
note1.put("Parent_Id", "692969000000981055");
note1.put("se_module", "Leads");

dataList = List();
dataList.add(note1);

params = Map();
params.put("data", dataList);

response = invokeurl
[\
	url :"https://www.zohoapis.com/crm/v7/Notes"\
	type :POST\
	parameters: params.toString()\
	connection:"crm_oauth_connection"\
];
info response;
```

In the request, "@newnote.json" contains the sample input data.

#### Request JSON Keys

- Parent\_IdJSON object, mandatory



Contains the details of the parent record.



  - moduleJSON object, mandatory



    Represents the details of the **requested module**. It is mandatory to specify either the **API name** or the **unique ID** of the requested module. Refer to [GET Modules API](https://www.zoho.com/crm/developer/docs/api/v7/modules-api.html) to get the details.

  - idstring, mandatory



    Specify the **unique ID** of the **parent record**. Refer to Refer the [GET Records API](https://www.zoho.com/crm/developer/docs/api/v7/get-records.html) to get valid record IDs.
- Note\_Contentstring, mandatory



Specify the content of the note.


**Note**

- You must use only Field API names in the input. You can obtain the field API names from [Fields metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) (the value for the key “api\_name” for every field).
- You can create a maximum of **100 notes** per API call.

#### Sample Input

``` json
Copied{
    "data": [\
        {\
            "Parent_Id": {\
                "module": {\
                    "api_name": "Leads",  //API name of the module\
                    "id": "2423488000000000125" //module ID\
                },\
                "id": "2423488000000771297" //record ID\
            },\
            "Note_Content": "note content after edit"\
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

**Resolution:** Client does not have ZohoCRM.modules.notes.CREATE scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to add notes details

**Resolution:** The user does not have permission to add notes data. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to add notes

**Resolution:** The user does not have the permission to add notes data. Contact your system administrator.

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
                "Modified_Time": "2023-12-18T18:48:25+05:30",\
                "Modified_By": {\
                    "name": "Patricia",\
                    "id": "2423488000000483001"\
                },\
                "Created_Time": "2023-12-18T18:48:25+05:30",\
                "id": "2423488000000776006",\
                "Created_By": {\
                    "name": "Patricia",\
                    "id": "2423488000000483001"\
                }\
            },\
            "message": "record added",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/create-notes.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)